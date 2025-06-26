
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const { language, isArabic } = useLanguage();
  const { toast } = useToast();
  const t = (key) => getTranslation(language, key);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate sending email to Law.hatem1@gmail.com
    try {
      // Here you would integrate with your email service
      console.log('Sending email to: Law.hatem1@gmail.com');
      console.log('Email content:', {
        to: 'Law.hatem1@gmail.com',
        subject: `New Contact Form Submission from ${formData.name}`,
        body: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Message: ${formData.message}
        `
      });
      
      toast({
        title: isArabic ? 'تم إرسال الرسالة بنجاح!' : 'Message Sent Successfully!',
        description: isArabic ? 'سنتواصل معك قريباً' : 'We will contact you soon',
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: isArabic ? 'خطأ في الإرسال' : 'Sending Error',
        description: isArabic ? 'حدث خطأ، يرجى المحاولة مرة أخرى' : 'An error occurred, please try again',
        variant: 'destructive'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-28">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className={`text-4xl md:text-5xl font-bold text-center text-foreground mb-12 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('contact')}
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="border-2 border-gold-200 dark:border-gold-700">
                  <CardHeader>
                    <CardTitle className={`font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {t('sendMessage')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className={`block text-sm font-medium mb-2 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          {t('name')}
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          {t('email')}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          {t('phone')}
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium mb-2 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          {t('message')}
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full golden-button font-ge-ss-two"
                      >
                        {t('send')}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <div className="space-y-8">
                  <Card className="border-2 border-gold-200 dark:border-gold-700">
                    <CardHeader>
                      <CardTitle className={`font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {t('whatsappContact')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`mb-4 font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {isArabic ? 'تواصل معنا مباشرة عبر واتساب للاستشارة السريعة' : 'Contact us directly via WhatsApp for quick consultation'}
                      </p>
                      <Button 
                        className="w-full golden-button font-ge-ss-two"
                        asChild
                      >
                        <a href="https://wa.me/966576808900" target="_blank" rel="noopener noreferrer">
                          {t('whatsappContact')}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gold-200 dark:border-gold-700">
                    <CardHeader>
                      <CardTitle className={`font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {isArabic ? 'موقعنا' : 'Our Location'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className={`text-muted-foreground font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {t('location')}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gold-200 dark:border-gold-700">
                    <CardHeader>
                      <CardTitle className={`font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {t('workingHours')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className={`font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          {t('workingTime')}
                        </p>
                        <p className={`font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          {t('weekend')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
