
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, Scale, Users, Building, Gavel, Plus, Search } from 'lucide-react';

const LegalKnowledge = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'corporate',
      title: isArabic ? 'قانون الشركات' : 'Corporate Law',
      description: isArabic ? 'القوانين المتعلقة بتأسيس وإدارة الشركات' : 'Laws related to company formation and management',
      icon: Building,
      articles: [
        { title: isArabic ? 'تأسيس الشركات في السعودية' : 'Company Formation in Saudi Arabia', readTime: '5 دقائق' },
        { title: isArabic ? 'حوكمة الشركات وأفضل الممارسات' : 'Corporate Governance Best Practices', readTime: '7 دقائق' },
        { title: isArabic ? 'دمج واستحواذ الشركات' : 'Mergers and Acquisitions', readTime: '10 دقائق' }
      ]
    },
    {
      id: 'commercial',
      title: isArabic ? 'القانون التجاري' : 'Commercial Law',
      description: isArabic ? 'الأنظمة التجارية والعقود التجارية' : 'Commercial regulations and contracts',
      icon: FileText,
      articles: [
        { title: isArabic ? 'العقود التجارية الأساسية' : 'Essential Commercial Contracts', readTime: '6 دقائق' },
        { title: isArabic ? 'حقوق الملكية الفكرية' : 'Intellectual Property Rights', readTime: '8 دقائق' },
        { title: isArabic ? 'قانون المنافسة التجارية' : 'Commercial Competition Law', readTime: '9 دقائق' }
      ]
    },
    {
      id: 'arbitration',
      title: isArabic ? 'التحكيم والوساطة' : 'Arbitration & Mediation',
      description: isArabic ? 'حل النزاعات عبر التحكيم والوساطة' : 'Dispute resolution through arbitration and mediation',
      icon: Scale,
      articles: [
        { title: isArabic ? 'أساسيات التحكيم في السعودية' : 'Arbitration Basics in Saudi Arabia', readTime: '8 دقائق' },
        { title: isArabic ? 'الوساطة كبديل للتقاضي' : 'Mediation as Alternative to Litigation', readTime: '6 دقائق' },
        { title: isArabic ? 'تنفيذ أحكام التحكيم' : 'Enforcement of Arbitration Awards', readTime: '7 دقائق' }
      ]
    },
    {
      id: 'employment',
      title: isArabic ? 'قانون العمل' : 'Employment Law',
      description: isArabic ? 'حقوق وواجبات العمال وأصحاب العمل' : 'Rights and duties of employees and employers',
      icon: Users,
      articles: [
        { title: isArabic ? 'نظام العمل السعودي الجديد' : 'New Saudi Labor Law', readTime: '12 دقائق' },
        { title: isArabic ? 'حقوق العامل والتعويضات' : 'Employee Rights and Compensations', readTime: '9 دقائق' },
        { title: isArabic ? 'فض منازعات العمل' : 'Labor Dispute Resolution', readTime: '8 دقائق' }
      ]
    },
    {
      id: 'real-estate',
      title: isArabic ? 'القانون العقاري' : 'Real Estate Law',
      description: isArabic ? 'الأنظمة المتعلقة بالعقارات والممتلكات' : 'Regulations related to real estate and properties',
      icon: Gavel,
      articles: [
        { title: isArabic ? 'عقود البيع العقاري' : 'Real Estate Sale Contracts', readTime: '10 دقائق' },
        { title: isArabic ? 'نظام التملك للأجانب' : 'Foreign Ownership Regulations', readTime: '7 دقائق' },
        { title: isArabic ? 'التطوير العقاري والترخيص' : 'Real Estate Development & Licensing', readTime: '11 دقائق' }
      ]
    },
    {
      id: 'compliance',
      title: isArabic ? 'الامتثال التنظيمي' : 'Regulatory Compliance',
      description: isArabic ? 'الامتثال للأنظمة واللوائح الحكومية' : 'Compliance with government regulations',
      icon: BookOpen,
      articles: [
        { title: isArabic ? 'امتثال الشركات للأنظمة' : 'Corporate Regulatory Compliance', readTime: '9 دقائق' },
        { title: isArabic ? 'مكافحة غسل الأموال' : 'Anti-Money Laundering', readTime: '13 دقائق' },
        { title: isArabic ? 'حماية البيانات والخصوصية' : 'Data Protection & Privacy', readTime: '8 دقائق' }
      ]
    }
  ];

  const handleAddArticle = () => {
    toast({
      title: isArabic ? "مخصص للإدارة فقط" : "Admin Only Feature",
      description: isArabic ? "هذه الخاصية متاحة للإدارة فقط" : "This feature is available for administrators only",
    });
  };

  const handleExploreCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-28">
        <section className="section-padding bg-background">
          <div className="container-spacing">
            <div className="max-w-7xl mx-auto">
              {!selectedCategory ? (
                <>
                  <div className="text-center mb-16 animate-fade-in">
                    <h1 className={`text-section-title text-foreground mb-8 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {t('legalKnowledgeTitle')}
                    </h1>
                    <p className={`text-body-large text-muted-foreground max-w-4xl mx-auto leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {t('legalKnowledgeDescription')}
                    </p>
                  </div>

                  {/* Admin Add Article Button */}
                  <div className="text-center mb-12">
                    <Button 
                      onClick={handleAddArticle}
                      className="golden-button font-ge-ss-two flex items-center gap-2"
                    >
                      <Plus className="w-5 h-5" />
                      {t('addNewArticle')}
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                      <Card key={category.id} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500 bg-gradient-to-br from-white to-gold-50 dark:from-navy-800 dark:to-navy-700 animate-scale-in h-full flex flex-col" style={{animationDelay: `${index * 0.1}s`}}>
                        <CardHeader className="pb-4 flex-grow">
                          <div className="flex items-center mb-4">
                            <category.icon className="w-12 h-12 text-gold-600 mr-4" />
                            <CardTitle className={`text-card-title text-foreground leading-relaxed font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                              {category.title}
                            </CardTitle>
                          </div>
                          <p className={`text-body text-muted-foreground leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                            {category.description}
                          </p>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-4">
                            <div className={`text-sm text-gold-600 font-ge-ss-two-medium ${isArabic ? 'font-arabic' : 'font-english'}`}>
                              {category.articles.length} {isArabic ? 'مقالات متاحة' : 'articles available'}
                            </div>
                            <Button 
                              className="w-full golden-button font-ge-ss-two"
                              onClick={() => handleExploreCategory(category)}
                            >
                              {t('exploreArticles')}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {/* Category Articles View */}
                  <div className="mb-8">
                    <Button 
                      onClick={handleBackToCategories}
                      variant="outline"
                      className="mb-6"
                    >
                      ← {isArabic ? 'العودة للفئات' : 'Back to Categories'}
                    </Button>
                    
                    <div className="text-center mb-12 animate-fade-in">
                      <div className="flex items-center justify-center mb-6">
                        <selectedCategory.icon className="w-16 h-16 text-gold-600 mr-4" />
                        <h1 className={`text-section-title text-foreground font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          {selectedCategory.title}
                        </h1>
                      </div>
                      <p className={`text-body-large text-muted-foreground max-w-3xl mx-auto leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                        {selectedCategory.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {selectedCategory.articles.map((article, index) => (
                      <Card key={index} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500 bg-gradient-to-br from-white to-gold-50 dark:from-navy-800 dark:to-navy-700 animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                        <CardHeader>
                          <CardTitle className={`text-card-title text-foreground leading-relaxed font-ge-ss-two mb-4 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                            {article.title}
                          </CardTitle>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Search className="w-4 h-4 mr-2" />
                            <span className={`font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                              {isArabic ? 'وقت القراءة:' : 'Read time:'} {article.readTime}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Button 
                            className="w-full golden-button font-ge-ss-two"
                            asChild
                          >
                            <Link to="/contact">
                              {isArabic ? 'اقرأ المقال' : 'Read Article'}
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              )}

              {/* Legal Disclaimer */}
              <div className="mt-16 p-8 bg-gold-50 dark:bg-navy-800 rounded-lg border-l-4 border-gold-500 animate-fade-in">
                <p className={`text-body text-muted-foreground font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                  {t('legalDisclaimer')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LegalKnowledge;
