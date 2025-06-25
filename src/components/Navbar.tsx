import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/AuthModal";
import { PaymentModal } from "@/components/PaymentModal";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { path: "/", label: "Accueil" },
    { path: "/our-work", label: "Notre Travail" },
    { path: "/founders", label: "Fondateurs & Collaborateurs" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleVolunteerClick = () => {
    if (isAuthenticated) {
      // User is authenticated, show volunteer dashboard or success message
      alert(`Merci ${user?.firstName} ! Vous êtes maintenant inscrit comme bénévole. Nous vous contacterons bientôt.`);
    } else {
      // User needs to authenticate
      setIsAuthModalOpen(true);
    }
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo hm Final1.jpeg.jpg"
                alt="HealthMOUR Logo"
                className="h-12 w-auto"
              />
              <span className="font-montserrat font-bold text-xl text-primary">
                HealthMOUR
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-open-sans font-medium transition-colors duration-200 ${isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-700 hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              ))}

              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <User className="h-4 w-4" />
                    <span className="font-open-sans text-sm">
                      Bonjour, {user?.firstName}
                    </span>
                  </div>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Déconnexion</span>
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => setIsAuthModalOpen(true)}
                  variant="outline"
                  className="font-montserrat"
                >
                  Connexion
                </Button>
              )}

              <Button
                onClick={handleVolunteerClick}
                className="bg-secondary hover:bg-secondary/90 text-primary font-montserrat"
              >
                Devenir Bénévole
              </Button>

              <Button
                onClick={() => setIsPaymentModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-montserrat"
              >
                Faire un Don
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
                  <div className="px-4 space-y-2">
                    <div className="flex items-center space-x-2 text-gray-700 py-2">
                      <User className="h-4 w-4" />
                      <span className="font-open-sans text-sm">
                        Bonjour, {user?.firstName}
                      </span>
                    </div>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      size="sm"
                      className="w-full flex items-center justify-center space-x-2"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Déconnexion</span>
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => {
                      setIsAuthModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    variant="outline"
                    className="mx-4 font-montserrat"
                  >
                    Connexion
                  </Button>
                )}

                <Button
                  onClick={() => {
                    handleVolunteerClick();
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 bg-blue-600 hover:bg-blue-700 text-white font-montserrat"
                >
                  Devenir Bénévole
                </Button>

                <Button
                  onClick={() => {
                    setIsPaymentModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 bg-primary hover:bg-primary/90 text-white font-montserrat"
                >
                  Faire un Don
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
    </>
  );
};
