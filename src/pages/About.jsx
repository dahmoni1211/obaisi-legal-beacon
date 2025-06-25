
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const { language } = useLanguage();
  const t = (key) => getTranslation(language, key);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                {t('aboutTitle')}
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t('aboutDescription')}
                </p>
                
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('valuesTitle')}</h2>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-600">•</span>
                    <span>{t('trustValue')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-600">•</span>
                    <span>{t('integrityValue')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-600">•</span>
                    <span>{t('privacyValue')}</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-gold-600">•</span>
                    <span>{t('relationshipValue')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
