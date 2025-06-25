
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const { language } = useLanguage();
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

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
                {t('servicesTitle')}
              </h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-gold-200 hover:border-gold-400">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{service}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full bg-gold-600 hover:bg-gold-700 text-white"
                        asChild
                      >
                        <Link to="/contact">{t('bookConsultation')}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
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
