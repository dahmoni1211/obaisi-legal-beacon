
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const services = [
    { title: t('consultation'), description: t('consultationDesc') },
    { title: t('contracts'), description: t('contractsDesc') },
    { title: t('representation'), description: t('representationDesc') },
    { title: t('arbitration'), description: t('arbitrationDesc') },
    { title: t('governance'), description: t('governanceDesc') },
    { title: t('franchise'), description: t('franchiseDesc') },
    { title: t('mergers'), description: t('mergersDesc') },
    { title: t('investors'), description: t('investorsDesc') },
    { title: t('realEstate'), description: t('realEstateDesc') },
    { title: t('investigations'), description: t('investigationsDesc') },
    { title: t('notarization'), description: t('notarizationDesc') },
    { title: t('techTransformation'), description: t('techTransformationDesc') },
    { title: t('startupPlanning'), description: t('startupPlanningDesc') },
    { title: t('ongoingServices'), description: t('ongoingServicesDesc') },
  ];

  const handleServiceClick = (serviceName) => {
    toast({
      title: isArabic ? "تم تسجيل اهتمامك بالخدمة" : "Service Interest Registered",
      description: isArabic ? `سنتواصل معك قريباً بخصوص ${serviceName}` : `We'll contact you soon about ${serviceName}`,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-28">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className={`text-4xl md:text-6xl font-bold text-foreground mb-8 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('servicesTitle')}
                </h1>
                <p className={`text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('servicesDescription')}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500 bg-gradient-to-br from-white to-gold-50 dark:from-navy-800 dark:to-navy-700 animate-scale-in h-full flex flex-col" style={{animationDelay: `${index * 0.05}s`}}>
                    <CardHeader className="pb-4 flex-grow">
                      <CardTitle className={`text-lg text-foreground leading-relaxed font-ge-ss-two mb-4 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {service.title}
                      </CardTitle>
                      <p className={`text-sm text-muted-foreground leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'} whitespace-pre-line`}>
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        className="w-full golden-button font-ge-ss-two"
                        onClick={() => handleServiceClick(service.title)}
                        asChild
                      >
                        <Link to="/contact">{t('bookConsultation')}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Legal Disclaimer */}
              <div className="mt-16 p-6 bg-gold-50 dark:bg-navy-800 rounded-lg border-l-4 border-gold-500 animate-fade-in">
                <p className={`text-base text-muted-foreground font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('legalDisclaimer')}
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16 animate-fade-in">
                <h3 className={`text-3xl font-bold text-foreground mb-6 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {isArabic ? 'لم تجد الخدمة التي تبحث عنها؟' : "Didn't find the service you're looking for?"}
                </h3>
                <p className={`text-muted-foreground mb-8 text-lg font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {isArabic ? 'تواصل معنا للحصول على استشارة مخصصة' : 'Contact us for a personalized consultation'}
                </p>
                <Button 
                  size="lg"
                  className="golden-button text-lg px-10 py-4 font-ge-ss-two"
                  asChild
                >
                  <Link to="/contact">
                    {isArabic ? 'استشارة مخصصة' : 'Custom Consultation'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
