
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scale, Shield, FileText, Gavel } from 'lucide-react';

const Index = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const values = [
    { title: t('trustValue'), icon: Scale, color: 'text-gold-600' },
    { title: t('integrityValue'), icon: Gavel, color: 'text-gold-600' },
    { title: t('privacyValue'), icon: Shield, color: 'text-gold-600' },
    { title: t('relationshipValue'), icon: FileText, color: 'text-gold-600' },
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

  const handleConsultationClick = () => {
    toast({
      title: isArabic ? "تم تسجيل طلبك بنجاح!" : "Request Submitted Successfully!",
      description: isArabic ? "سنتواصل معك قريباً لتحديد موعد الاستشارة" : "We will contact you shortly to schedule your consultation",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg">
        <div className="hero-content text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-8 leading-tight ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic ? (
                <>
                  معك خطوة بخطوة، لنقودك بثقة
                  <br />
                  <span className="text-gold-300">نحو العدالة وحماية حقوقك</span>
                </>
              ) : (
                <>
                  With you every step of the way
                  <br />
                  <span className="text-gold-300">toward justice and protecting your rights</span>
                </>
              )}
            </h1>
            <p className={`text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic 
                ? "باستشارات قانونية دقيقة تحفظ حقك من البداية" 
                : "Through precise legal consultation from the very beginning"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="golden-button text-lg px-10 py-4"
                onClick={handleConsultationClick}
                asChild
              >
                <Link to="/contact">{t('bookConsultation')}</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy-800 px-10 py-4 text-lg smooth-hover backdrop-blur-sm"
                asChild
              >
                <a href="https://wa.me/966123456789" target="_blank" rel="noopener noreferrer">
                  {t('whatsappContact')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-8 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('aboutTitle')}
              </h2>
              <p className={`text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('aboutDescription')}
              </p>
            </div>
            
            {/* Enhanced Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-8 text-center">
                    <value.icon className={`w-12 h-12 ${value.color} mx-auto mb-6`} />
                    <h3 className={`font-semibold text-lg text-foreground ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {value.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-navy-50 to-gold-50 dark:from-navy-900 dark:to-navy-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold text-center text-foreground mb-16 ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('whyUsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyUsPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mt-2"></div>
                  <p className={`text-foreground text-lg leading-relaxed ${isArabic ? 'font-arabic' : 'font-english'}`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Vision Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-8 ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('visionTitle')}
            </h2>
            <p className={`text-xl text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('visionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-8 ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'جاهزون لمساعدتك؟' : 'Ready to Get Started?'}
          </h2>
          <p className={`text-xl text-white/90 mb-12 max-w-2xl mx-auto ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'احجز استشارتك القانونية اليوم واحصل على الدعم المهني الذي تحتاجه' : 'Book your legal consultation today and get the professional support you need'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="golden-button text-lg px-10 py-4"
              onClick={handleConsultationClick}
              asChild
            >
              <Link to="/contact">{t('bookConsultation')}</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-navy-800 px-10 py-4 text-lg smooth-hover"
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
