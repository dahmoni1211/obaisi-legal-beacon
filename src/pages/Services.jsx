
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
    t('consultation'),
    t('contracts'),
    t('representation'),
    t('arbitration'),
    t('governance'),
    t('franchise'),
    t('mergers'),
    t('investors'),
    t('realEstate'),
    t('investigations'),
    t('notarization'),
    t('techTransformation'),
    t('startupPlanning'),
    t('ongoingServices'),
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
      
      <div className="pt-24">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 animate-fade-in">
                <h1 className={`text-4xl md:text-6xl font-bold text-foreground mb-8 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('servicesTitle')}
                </h1>
                <p className={`text-xl text-muted-foreground max-w-3xl mx-auto ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {isArabic 
                    ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتكم المتنوعة"
                    : "We offer a comprehensive range of specialized legal services to meet your diverse needs"
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <Card key={index} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500 bg-gradient-to-br from-white to-gold-50 dark:from-navy-800 dark:to-navy-700 animate-scale-in" style={{animationDelay: `${index * 0.05}s`}}>
                    <CardHeader className="pb-4">
                      <CardTitle className={`text-lg text-foreground leading-relaxed ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {service}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full golden-button"
                        onClick={() => handleServiceClick(service)}
                        asChild
                      >
                        <Link to="/contact">{t('bookConsultation')}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16 animate-fade-in">
                <h3 className={`text-2xl font-bold text-foreground mb-4 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {isArabic ? 'لم تجد الخدمة التي تبحث عنها؟' : "Didn't find the service you're looking for?"}
                </h3>
                <p className={`text-muted-foreground mb-8 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {isArabic ? 'تواصل معنا للحصول على استشارة مخصصة' : 'Contact us for a personalized consultation'}
                </p>
                <Button 
                  size="lg"
                  className="golden-button text-lg px-8"
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
