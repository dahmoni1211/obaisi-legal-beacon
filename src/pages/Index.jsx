
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Scale, Shield, FileText, Gavel, Eye, Target } from 'lucide-react';

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
      
      {/* Enhanced Hero Section with Logo */}
      <section className="relative min-h-screen flex items-center justify-center hero-bg">
        <div className="hero-content text-center px-4 max-w-6xl mx-auto">
          <div className="animate-fade-in">
            {/* Logo above text - Made Larger */}
            <div className="mb-12">
              <img 
                src="/lovable-uploads/c88ded15-f299-41ed-a031-22c2957734cd.png" 
                alt="Law Firm Logo" 
                className="h-40 w-40 mx-auto mb-8 filter brightness-110"
              />
              <h1 className={`text-hero text-white mb-8 leading-tight font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('heroTitle')}
              </h1>
            </div>
            
            <p className={`text-body-large text-white/90 mb-12 leading-relaxed max-w-5xl mx-auto font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="golden-button text-lg px-12 py-4 font-ge-ss-two transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleConsultationClick}
                asChild
              >
                <Link to="/contact">{t('bookConsultation')}</Link>
              </Button>
              <Button 
                size="lg" 
                className="golden-button text-lg px-12 py-4 font-ge-ss-two transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href="https://wa.me/966576808900" target="_blank" rel="noopener noreferrer">
                  {t('whatsappContact')}
                </a>
              </Button>
              <Button 
                size="lg" 
                className="golden-button text-lg px-12 py-4 font-ge-ss-two transition-all duration-300 hover:scale-105 hover:shadow-lg"
                asChild
              >
                <Link to="/services">{t('services')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-background">
        <div className="container-spacing">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className={`text-section-title text-foreground mb-8 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('aboutTitle')}
              </h2>
              <div className={`text-body text-muted-foreground leading-relaxed max-w-5xl mx-auto font-ge-ss-two-light text-justified ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('aboutDescription').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-with-spacing">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-8 text-center">
                    <value.icon className={`w-16 h-16 ${value.color} mx-auto mb-6`} />
                    <h3 className={`font-ge-ss-two-medium text-card-title text-foreground ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {value.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="whyUs" className="section-padding bg-gradient-to-br from-navy-50 to-gold-50 dark:from-navy-900 dark:to-navy-800">
        <div className="container-spacing">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-section-title text-center text-foreground mb-8 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('whyUsTitle')}
            </h2>
            
            <div className={`text-body text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto mb-12 font-ge-ss-two-light text-justified ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('whyUsDescription').split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-with-spacing">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {whyUsPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mt-2"></div>
                  <p className={`text-foreground text-body leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
            
            <div className={`text-body text-center text-foreground font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'} animate-fade-in`}>
              {t('whyUsClosing')}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="section-padding bg-background">
        <div className="container-spacing">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <Eye className="w-16 h-16 text-gold-600 mr-6" />
              <h2 className={`text-section-title text-foreground font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('visionTitle')}
              </h2>
            </div>
            <p className={`text-body-large text-muted-foreground leading-relaxed font-ge-ss-two-light text-justified ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('visionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="section-padding bg-gradient-to-br from-gold-50 to-navy-50 dark:from-navy-900 dark:to-gold-900">
        <div className="container-spacing">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <Target className="w-16 h-16 text-gold-600 mr-6" />
              <h2 className={`text-section-title text-foreground font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('missionTitle')}
              </h2>
            </div>
            <p className={`text-body-large text-muted-foreground leading-relaxed font-ge-ss-two-light text-justified ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-600/10 to-transparent"></div>
        <div className="container-spacing text-center relative z-10">
          <h2 className={`text-section-title text-white mb-8 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'جاهزون لمساعدتك؟' : 'Ready to Get Started?'}
          </h2>
          <p className={`text-body-large text-white/90 mb-10 max-w-2xl mx-auto font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'احجز استشارتك القانونية اليوم واحصل على الدعم المهني الذي تحتاجه' : 'Book your legal consultation today and get the professional support you need'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="golden-button text-lg px-12 py-4 font-ge-ss-two transition-all duration-300 hover:scale-105"
              onClick={handleConsultationClick}
              asChild
            >
              <Link to="/contact">{t('bookConsultation')}</Link>
            </Button>
            <Button 
              size="lg" 
              className="golden-button text-lg px-12 py-4 font-ge-ss-two transition-all duration-300 hover:scale-105"
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
