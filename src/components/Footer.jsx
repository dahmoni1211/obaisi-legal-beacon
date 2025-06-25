
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

const Footer = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-navy-800 to-navy-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Enhanced Logo Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
            <img 
              src="/lovable-uploads/c88ded15-f299-41ed-a031-22c2957734cd.png" 
              alt="Law Firm Logo" 
              className="h-16 w-16 filter brightness-110"
            />
            <div className="text-center">
              <h3 className={`text-2xl font-bold text-gold-400 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {isArabic ? 'مكتب حاتم ماجد العبيسي للمحاماة' : 'Hatem Majed Al-Obaisi Law Firm'}
              </h3>
              <p className={`text-gold-300 text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('location')}
              </p>
            </div>
          </div>
          <p className={`text-gray-300 max-w-2xl mx-auto leading-relaxed ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {t('aboutDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Quick Links */}
          <div className="text-center">
            <h4 className={`text-xl font-semibold mb-6 text-gold-400 ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className={`text-gray-300 hover:text-gold-400 smooth-hover text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className={`text-gray-300 hover:text-gold-400 smooth-hover text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className={`text-gray-300 hover:text-gold-400 smooth-hover text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-gray-300 hover:text-gold-400 smooth-hover text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className={`text-xl font-semibold mb-6 text-gold-400 ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('contact')}
            </h4>
            <div className="space-y-4">
              <a 
                href="https://wa.me/966123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block text-gray-300 hover:text-gold-400 smooth-hover text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}
              >
                <span className="font-semibold">{isArabic ? 'واتساب:' : 'WhatsApp:'}</span>
                <br />
                +966 12 345 6789
              </a>
              <p className={`text-gray-300 text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}>
                <span className="font-semibold text-gold-400">{isArabic ? 'الموقع:' : 'Location:'}</span>
                <br />
                {t('location')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className={`text-gray-400 text-lg ${isArabic ? 'font-arabic' : 'font-english'}`}>
            © {currentYear} {isArabic ? 'مكتب حاتم ماجد العبيسي للمحاماة' : 'Hatem Majed Al-Obaisi Law Firm'}. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
