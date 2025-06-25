
import React, { useState } from 'react';
import { X, CreditCard, Building, User, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    amount: '',
    donorName: '',
    donorEmail: '',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Reset form and close modal after success message
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          amount: '',
          donorName: '',
          donorEmail: '',
          bankName: '',
          accountNumber: '',
          routingNumber: '',
          message: ''
        });
        onClose();
      }, 2000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-2">
            Merci pour votre don !
          </h3>
          <p className="text-gray-600 font-open-sans">
            Votre contribution nous aidera à poursuivre notre mission pour une meilleure santé communautaire.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-2">
            Faire un Don
          </h2>
          <p className="text-gray-600 font-open-sans">
            Soutenez notre mission pour une meilleure santé communautaire
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
              Montant du don (€)
            </Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              required
              min="1"
              value={formData.amount}
              onChange={handleInputChange}
              placeholder="50"
            />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label htmlFor="donorName" className="text-sm font-medium text-gray-700">
                Nom complet
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="donorName"
                  name="donorName"
                  type="text"
                  required
                  value={formData.donorName}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="Votre nom complet"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="donorEmail" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  id="donorEmail"
                  name="donorEmail"
                  type="email"
                  required
                  value={formData.donorEmail}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-montserrat font-semibold text-lg text-gray-900 mb-3">
              Informations Bancaires
            </h3>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="bankName" className="text-sm font-medium text-gray-700">
                  Nom de la banque
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="bankName"
                    name="bankName"
                    type="text"
                    required
                    value={formData.bankName}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Nom de votre banque"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="accountNumber" className="text-sm font-medium text-gray-700">
                  Numéro de compte
                </Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="accountNumber"
                    name="accountNumber"
                    type="text"
                    required
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="routingNumber" className="text-sm font-medium text-gray-700">
                  Code de routage
                </Label>
                <Input
                  id="routingNumber"
                  name="routingNumber"
                  type="text"
                  required
                  value={formData.routingNumber}
                  onChange={handleInputChange}
                  placeholder="XXXXXXXXX"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message (optionnel)
            </Label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Un message pour accompagner votre don..."
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            {isLoading ? 'Traitement en cours...' : `Faire un don de ${formData.amount || '0'}€`}
          </Button>
        </form>

        <div className="mt-4 text-xs text-gray-500 text-center">
          <p>
            🔒 Vos informations sont sécurisées et ne seront utilisées que pour traiter votre don.
          </p>
        </div>
      </div>
    </div>
  );
};
