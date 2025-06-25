
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

const Footer = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/c88ded15-f299-41ed-a031-22c2957734cd.png" 
                alt="Law Firm Logo" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">
                  {isArabic ? 'مكتب حاتم ماجد العبيسي للمحاماة' : 'Hatem Majed Al-Obaisi Law Firm'}
                </h3>
                <p className="text-gold-400 text-sm">
                  {t('location')}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('aboutDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">
              {t('contact')}
            </h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/966123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <span>{isArabic ? 'واتساب:' : 'WhatsApp:'} +966 12 345 6789</span>
              </a>
              <p className="text-gray-300">
                {t('location')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} {isArabic ? 'مكتب حاتم ماجد العبيسي للمحاماة' : 'Hatem Majed Al-Obaisi Law Firm'}. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
