
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

const Footer = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const currentYear = new Date().getFullYear();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      // If already on home page, scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      window.location.href = '/#about';
    }
  };

  return (
    <footer className="bg-gradient-to-b from-navy-800 to-navy-900 text-white">
      <div className="container-spacing section-padding">
        {/* Enhanced Logo Section - Made Larger */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-6 rtl:space-x-reverse mb-8">
            <img 
              src="/lovable-uploads/c88ded15-f299-41ed-a031-22c2957734cd.png" 
              alt="Law Firm Logo" 
              className="h-24 w-24 filter brightness-110"
            />
            <div className="text-center">
              <h3 className={`text-3xl font-ge-ss-two text-gold-400 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {isArabic ? 'مكتب حاتم ماجد العبيسي للمحاماة' : 'Hatem Majed Al-Obaisi Law Firm'}
              </h3>
              <p className={`text-gold-300 text-xl font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('location')}
              </p>
            </div>
          </div>
          <p className={`text-gray-300 max-w-3xl mx-auto leading-relaxed text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'شريكك القانوني الموثوق في المملكة العربية السعودية' : 'Your trusted legal partner in Saudi Arabia'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Quick Links */}
          <div className="text-center">
            <h4 className={`text-2xl font-ge-ss-two mb-6 text-gold-400 ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className={`text-gray-300 hover:text-gold-400 smooth-hover text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('home')}
                </Link>
              </li>
              <li>
                <a 
                  href="/#about" 
                  onClick={handleAboutClick}
                  className={`text-gray-300 hover:text-gold-400 smooth-hover text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <Link to="/services" className={`text-gray-300 hover:text-gold-400 smooth-hover text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link to="/legal-knowledge" className={`text-gray-300 hover:text-gold-400 smooth-hover text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('legalKnowledge')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`text-gray-300 hover:text-gold-400 smooth-hover text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className={`text-2xl font-ge-ss-two mb-6 text-gold-400 ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('contact')}
            </h4>
            <div className="space-y-6">
              <a 
                href="https://wa.me/966576808900" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block text-gray-300 hover:text-gold-400 smooth-hover text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}
              >
                <span className="font-ge-ss-two-medium">{isArabic ? 'واتساب:' : 'WhatsApp:'}</span>
                <br />
                +966 57 680 8900
              </a>
              <p className={`text-gray-300 text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                <span className="font-ge-ss-two-medium text-gold-400">{isArabic ? 'الموقع:' : 'Location:'}</span>
                <br />
                {t('location')}
              </p>
              <div className={`text-gray-300 text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                <span className="font-ge-ss-two-medium text-gold-400">{t('workingHours')}:</span>
                <br />
                {t('workingTime')}
                <br />
                {t('weekend')}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className={`text-gray-400 text-body font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
            © {currentYear} {isArabic ? 'مكتب حاتم ماجد العبيسي للمحاماة' : 'Hatem Majed Al-Obaisi Law Firm'}. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
