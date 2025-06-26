
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Book, FileText, Scale, Users, Building, Gavel } from 'lucide-react';

const LegalKnowledge = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const knowledgeCategories = [
    {
      title: isArabic ? 'القانون التجاري' : 'Commercial Law',
      description: isArabic ? 'آخر التحديثات في قوانين الشركات والتجارة' : 'Latest updates in corporate and commercial law',
      icon: Building,
      articles: isArabic ? '25 مقال' : '25 Articles'
    },
    {
      title: isArabic ? 'قانون العمل' : 'Labor Law',
      description: isArabic ? 'حقوق العمال وأصحاب العمل' : 'Rights of workers and employers',
      icon: Users,
      articles: isArabic ? '18 مقال' : '18 Articles'
    },
    {
      title: isArabic ? 'القانون المدني' : 'Civil Law',
      description: isArabic ? 'الحقوق والالتزامات المدنية' : 'Civil rights and obligations',
      icon: Scale,
      articles: isArabic ? '32 مقال' : '32 Articles'
    },
    {
      title: isArabic ? 'القانون الجنائي' : 'Criminal Law',
      description: isArabic ? 'الجرائم والعقوبات في النظام السعودي' : 'Crimes and penalties in the Saudi system',
      icon: Gavel,
      articles: isArabic ? '22 مقال' : '22 Articles'
    },
    {
      title: isArabic ? 'العقود والاتفاقيات' : 'Contracts & Agreements',
      description: isArabic ? 'صياغة ومراجعة العقود القانونية' : 'Drafting and reviewing legal contracts',
      icon: FileText,
      articles: isArabic ? '28 مقال' : '28 Articles'
    },
    {
      title: isArabic ? 'الملكية الفكرية' : 'Intellectual Property',
      description: isArabic ? 'حماية الحقوق الفكرية والتجارية' : 'Protection of intellectual and commercial rights',
      icon: Book,
      articles: isArabic ? '15 مقال' : '15 Articles'
    }
  ];

  const recentArticles = [
    {
      title: isArabic ? 'التحديثات الجديدة في قانون الشركات السعودي' : 'New Updates in Saudi Corporate Law',
      date: isArabic ? '15 ديسمبر 2024' : 'December 15, 2024',
      category: isArabic ? 'القانون التجاري' : 'Commercial Law'
    },
    {
      title: isArabic ? 'حقوق العمال في النظام السعودي الجديد' : 'Workers\' Rights in the New Saudi System',
      date: isArabic ? '12 ديسمبر 2024' : 'December 12, 2024',
      category: isArabic ? 'قانون العمل' : 'Labor Law'
    },
    {
      title: isArabic ? 'دليل شامل لصياغة العقود التجارية' : 'Comprehensive Guide to Commercial Contract Drafting',
      date: isArabic ? '10 ديسمبر 2024' : 'December 10, 2024',
      category: isArabic ? 'العقود والاتفاقيات' : 'Contracts & Agreements'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Book className="w-20 h-20 text-gold-400 mx-auto mb-6" />
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('legalKnowledgeTitle')}
            </h1>
            <p className={`text-xl text-white/90 leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('legalKnowledgeDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic ? 'فئات المعرفة القانونية' : 'Legal Knowledge Categories'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {knowledgeCategories.map((category, index) => (
                <Card key={index} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500">
                  <CardHeader className="text-center">
                    <category.icon className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                    <CardTitle className={`text-xl font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className={`text-muted-foreground mb-4 font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {category.description}
                    </p>
                    <p className={`text-gold-600 font-semibold mb-4 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {category.articles}
                    </p>
                    <Button variant="outline" className={`golden-button font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {isArabic ? 'استكشف المقالات' : 'Explore Articles'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-gradient-to-br from-gold-50 to-navy-50 dark:from-navy-900 dark:to-gold-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-3xl md:text-4xl font-bold text-center text-foreground mb-12 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic ? 'أحدث المقالات' : 'Recent Articles'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className={`text-sm text-gold-600 font-semibold mb-2 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {article.category}
                    </div>
                    <CardTitle className={`text-lg leading-tight font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className={`text-sm text-muted-foreground mb-4 font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {article.date}
                    </div>
                    <Button variant="ghost" className={`text-gold-600 hover:text-gold-700 p-0 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {isArabic ? 'اقرأ المزيد' : 'Read More'} →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'هل تحتاج استشارة قانونية متخصصة؟' : 'Need Specialized Legal Consultation?'}
          </h2>
          <p className={`text-xl text-white/90 mb-8 max-w-2xl mx-auto font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'تواصل معنا للحصول على استشارة قانونية دقيقة ومتخصصة' : 'Contact us for precise and specialized legal consultation'}
          </p>
          <Button 
            size="lg" 
            className="golden-button text-lg px-10 py-4 font-ge-ss-two"
            asChild
          >
            <a href="/contact">
              {isArabic ? 'احجز استشارة' : 'Book Consultation'}
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalKnowledge;
