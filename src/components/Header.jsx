
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getTranslation } from '@/lib/translations';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isArabic } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();

  const t = (key) => getTranslation(language, key);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('services'), href: '/services' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="sticky-header">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src="/lovable-uploads/c88ded15-f299-41ed-a031-22c2957734cd.png" 
              alt="Law Firm Logo" 
              className="h-14 w-14 smooth-hover hover:scale-105"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-xl text-navy-700 dark:text-gold-400 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {isArabic ? 'مكتب حاتم ماجد العبيسي' : 'Al-Obaisi Law Firm'}
              </span>
              <span className="text-sm text-muted-foreground">
                {isArabic ? 'للمحاماة والاستشارات القانونية' : 'Legal Consultation & Services'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium text-foreground hover:text-gold-600 smooth-hover relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold-600 after:transition-all after:duration-300 hover:after:w-full ${isArabic ? 'font-arabic' : 'font-english'}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-10 h-10 p-0 smooth-hover hover:bg-gold-100 dark:hover:bg-gold-900"
            >
              {isDark ? <Sun className="h-5 w-5 text-gold-500" /> : <Moon className="h-5 w-5 text-navy-600" />}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 smooth-hover hover:bg-gold-100 dark:hover:bg-gold-900"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{isArabic ? 'EN' : 'ع'}</span>
            </Button>

            <Button 
              className="golden-button"
              asChild
            >
              <Link to="/contact">{t('bookConsultation')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 smooth-hover hover:bg-gold-100 dark:hover:bg-gold-900 rounded-lg"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-md animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium text-foreground hover:text-gold-600 smooth-hover ${isArabic ? 'font-arabic' : 'font-english'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center space-x-2 px-3 py-2 rtl:space-x-reverse">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="w-9 h-9 p-0"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 rtl:space-x-reverse"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{isArabic ? 'EN' : 'ع'}</span>
                </Button>
              </div>

              <div className="px-3 py-2">
                <Button 
                  className="w-full golden-button"
                  asChild
                >
                  <Link to="/contact">{t('bookConsultation')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
