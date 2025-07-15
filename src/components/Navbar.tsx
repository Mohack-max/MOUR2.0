import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import { PaymentModal } from "@/components/PaymentModal";
import { useTranslation } from 'react-i18next';
import AdminLoginModal from './AdminLoginModal';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: t('navbar.home') },
    { path: "/our-work", label: t('navbar.ourWork') },
    { path: "/founders", label: t('navbar.founders') },
    { path: "/private-documents", label: t('navbar.privateDocuments') }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleVolunteerClick = () => {
    if (isAuthenticated) {
      // User is authenticated, show volunteer dashboard or success message
      alert(t('navbar.volunteerSuccess', { name: user?.firstName }));
    } else {
      // User needs to authenticate
      setIsAuthModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const handleLanguageSwitch = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo (left) */}
            <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
              <img
                src="/images/logo hm Final1.jpeg.jpg"
                alt="HealthMOUR Logo"
                className="h-12 w-auto flex-shrink-0"
              />
              <span className="font-montserrat font-bold text-xl text-primary truncate max-w-[120px] sm:max-w-[180px] md:max-w-none">
                HealthMOUR
              </span>
            </Link>

            {/* Navigation and actions (right) */}
            <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
              {navItems.map((item, idx) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-open-sans font-medium transition-colors duration-200 px-4 ${idx === 0 ? 'ml-6' : ''} ${isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              {isAuthenticated ? (
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>{t('navbar.logout')}</span>
                </Button>
              ) : (
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  variant="outline"
                  className="font-montserrat bg-green-600 hover:bg-green-700 text-white"
                >
                  {t('navbar.becomeMemberVolunteer')}
                </Button>
              )}
              <Button
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-montserrat px-6"
              >
                {t('navbar.donate')}
              </Button>
              <Button
                onClick={handleLanguageSwitch}
                variant="outline"
                className="ml-2 font-montserrat border-green-600 text-green-700"
              >
                {i18n.language === 'en' ? 'Français' : 'English'}
              </Button>
              <Button
                onClick={() => setIsAdminModalOpen(true)}
                className="bg-gradient-to-r from-primary to-accent text-white font-montserrat px-6 shadow-md hover:scale-105 transition-transform"
              >
                Admin Panel
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`font-open-sans font-medium px-4 py-2 rounded transition-colors duration-200 ${isActive(item.path)
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                {isAuthenticated ? (
                  <div className="px-8 space-y-4">
                    <div className="flex items-center space-x-2 text-gray-700 py-2">
                      <User className="h-8 w-8" />
                      <span className="font-open-sans text-sm">
                        {t('navbar.hello', { name: user?.firstName })}
                      </span>
                    </div>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>{t('navbar.logout')}</span>
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    variant="outline"
                    className="mx-4 font-montserrat bg-green-600 hover:bg-green-700 text-white"
                  >
                    {t('navbar.becomeMemberVolunteer')}
                  </Button>
                )}

                <Button
                  onClick={() => {
                    handleVolunteerClick();
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 bg-blue-600 hover:bg-blue-700 text-white font-montserrat"
                >
                  {t('navbar.becomeMemberVolunteer')}
                </Button>

                <Button
                  onClick={() => {
                    setIsPaymentModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 bg-primary hover:bg-primary/90 text-white font-montserrat"
                >
                  {t('navbar.donate')}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      />
      <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onSuccess={() => {
          setIsAdminModalOpen(false);
          navigate('/admin-dashboard');
        }}
      />
    </>
  );
};
