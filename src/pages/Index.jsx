
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const values = [
    { title: t('trustValue'), icon: '🤝' },
    { title: t('integrityValue'), icon: '⚖️' },
    { title: t('privacyValue'), icon: '🔒' },
    { title: t('relationshipValue'), icon: '🤝' },
  ];

  const whyUsPoints = [
    t('professionalism'),
    t('accuracy'),
    t('expertise'),
    t('bilingual'),
    t('partnership'),
    t('confidentiality'),
    t('solutions'),
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center hero-bg">
        <div className="hero-content text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t('heroTitle')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">{t('bookConsultation')}</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 text-lg"
              asChild
            >
              <a href="https://wa.me/966123456789" target="_blank" rel="noopener noreferrer">
                {t('whatsappContact')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {t('aboutDescription')}
            </p>
            
            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {values.map((value, index) => (
                <Card key={index} className="border-2 border-gold-200 hover:border-gold-400 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="font-semibold text-foreground">{value.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-navy-50 dark:bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              {t('whyUsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyUsPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-gold-600 rounded-full mt-3"></div>
                  <p className="text-foreground text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('visionTitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('visionText')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {isArabic ? 'جاهزون لمساعدتك؟' : 'Ready to Get Started?'}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {isArabic ? 'احجز استشارتك القانونية اليوم' : 'Book your legal consultation today'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">{t('bookConsultation')}</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy-800 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/services">{t('services')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
