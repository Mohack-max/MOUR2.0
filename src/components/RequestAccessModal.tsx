import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';

interface RequestAccessModalProps {
  document: { id: string; title: string };
  onClose: (success?: boolean) => void;
}

const RequestAccessModal = ({ document, onClose }: RequestAccessModalProps) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.from('document_access_requests').insert({
      user_id: user.id,
      document_id: document.id,
      reason,
      status: 'pending',
    });
    setLoading(false);
    if (error) {
      setMessage(t('privateDocs.requestError', 'Failed to submit request.'));
    } else {
      onClose(true); // Close the modal and indicate success
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="font-bold text-xl mb-4">{t('privateDocs.requestAccessFor', { title: document.title })}</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-semibold">{t('privateDocs.reason', 'Reason for request')}</label>
          <textarea
            className="w-full border rounded p-2 mb-4"
            value={reason}
            onChange={e => setReason(e.target.value)}
            required
            rows={4}
          />
          <div className="flex gap-2">
            <Button type="submit" disabled={loading}>
              {loading ? t('privateDocs.submitting', 'Submitting...') : t('privateDocs.submit', 'Submit')}
            </Button>
            <Button type="button" variant="outline" onClick={() => onClose()}>
              {t('privateDocs.cancel', 'Cancel')}
            </Button>
          </div>
        </form>
        {message && <div className="mt-4 text-center text-sm text-green-600">{message}</div>}
      </div>
    </div>
  );
};

export default RequestAccessModal; 
