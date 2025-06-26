
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Book, FileText, Scale, Users, Building, Gavel, Globe, Briefcase, Home, Shield } from 'lucide-react';

const LegalKnowledge = () => {
  const { language, isArabic } = useLanguage();
  const t = (key) => getTranslation(language, key);

  const knowledgeCategories = [
    {
      title: isArabic ? 'القانون التجاري' : 'Commercial Law',
      description: isArabic ? 'قوانين الشركات والتجارة والاستثمار' : 'Corporate, commercial, and investment laws',
      icon: Building,
      articles: isArabic ? '45 مقال' : '45 Articles',
      topics: isArabic 
        ? ['تأسيس الشركات', 'عقود الشراكة', 'الاندماج والاستحواذ', 'حوكمة الشركات']
        : ['Company Formation', 'Partnership Agreements', 'M&A', 'Corporate Governance']
    },
    {
      title: isArabic ? 'قانون العمل' : 'Labor Law',
      description: isArabic ? 'حقوق العمال وأصحاب العمل والعلاقات المهنية' : 'Employee and employer rights and professional relations',
      icon: Users,
      articles: isArabic ? '38 مقال' : '38 Articles',
      topics: isArabic 
        ? ['عقود العمل', 'الإجازات والمكافآت', 'إنهاء الخدمة', 'التأمينات الاجتماعية']
        : ['Employment Contracts', 'Leave & Benefits', 'Termination', 'Social Insurance']
    },
    {
      title: isArabic ? 'القانون المدني' : 'Civil Law',
      description: isArabic ? 'الحقوق والالتزامات المدنية والعقود' : 'Civil rights, obligations, and contracts',
      icon: Scale,
      articles: isArabic ? '52 مقال' : '52 Articles',
      topics: isArabic 
        ? ['العقود المدنية', 'المسؤولية التقصيرية', 'الحقوق العينية', 'التعويضات']
        : ['Civil Contracts', 'Tort Liability', 'Property Rights', 'Damages']
    },
    {
      title: isArabic ? 'القانون الجنائي' : 'Criminal Law',
      description: isArabic ? 'الجرائم والعقوبات في النظام السعودي' : 'Crimes and penalties in the Saudi system',
      icon: Gavel,
      articles: isArabic ? '29 مقال' : '29 Articles',
      topics: isArabic 
        ? ['الجرائم المالية', 'جرائم الإنترنت', 'التحقيق الجنائي', 'العقوبات البديلة']
        : ['Financial Crimes', 'Cyber Crimes', 'Criminal Investigation', 'Alternative Penalties']
    },
    {
      title: isArabic ? 'العقود والاتفاقيات' : 'Contracts & Agreements',
      description: isArabic ? 'صياغة ومراجعة العقود القانونية' : 'Drafting and reviewing legal contracts',
      icon: FileText,
      articles: isArabic ? '41 مقال' : '41 Articles',
      topics: isArabic 
        ? ['شروط العقود', 'إنهاء العقود', 'التفاوض التعاقدي', 'النزاعات التعاقدية']
        : ['Contract Terms', 'Contract Termination', 'Contract Negotiation', 'Contract Disputes']
    },
    {
      title: isArabic ? 'الملكية الفكرية' : 'Intellectual Property',
      description: isArabic ? 'حماية الحقوق الفكرية والتجارية' : 'Protection of intellectual and commercial rights',
      icon: Book,
      articles: isArabic ? '26 مقال' : '26 Articles',
      topics: isArabic 
        ? ['براءات الاختراع', 'العلامات التجارية', 'حقوق الطبع', 'الأسرار التجارية']
        : ['Patents', 'Trademarks', 'Copyrights', 'Trade Secrets']
    },
    {
      title: isArabic ? 'القانون الدولي' : 'International Law',
      description: isArabic ? 'القوانين والاتفاقيات الدولية' : 'International laws and agreements',
      icon: Globe,
      articles: isArabic ? '19 مقال' : '19 Articles',
      topics: isArabic 
        ? ['الاستثمار الأجنبي', 'التحكيم الدولي', 'التجارة الدولية', 'المعاهدات']
        : ['Foreign Investment', 'International Arbitration', 'International Trade', 'Treaties']
    },
    {
      title: isArabic ? 'القانون الإداري' : 'Administrative Law',
      description: isArabic ? 'القوانين الحكومية والإدارية' : 'Government and administrative laws',
      icon: Briefcase,
      articles: isArabic ? '33 مقال' : '33 Articles',
      topics: isArabic 
        ? ['التراخيص الإدارية', 'القرارات الإدارية', 'المنازعات الإدارية', 'الخدمات الحكومية']
        : ['Administrative Licenses', 'Administrative Decisions', 'Administrative Disputes', 'Government Services']
    },
    {
      title: isArabic ? 'القانون العقاري' : 'Real Estate Law',
      description: isArabic ? 'قوانين العقارات والأراضي' : 'Real estate and land laws',
      icon: Home,
      articles: isArabic ? '35 مقال' : '35 Articles',
      topics: isArabic 
        ? ['البيع والشراء', 'التأجير', 'التطوير العقاري', 'النزاعات العقارية']
        : ['Sale & Purchase', 'Leasing', 'Real Estate Development', 'Property Disputes']
    },
    {
      title: isArabic ? 'قانون التأمين' : 'Insurance Law',
      description: isArabic ? 'أنظمة وقوانين التأمين' : 'Insurance systems and laws',
      icon: Shield,
      articles: isArabic ? '22 مقال' : '22 Articles',
      topics: isArabic 
        ? ['التأمين الصحي', 'تأمين السيارات', 'التأمين على الممتلكات', 'مطالبات التأمين']
        : ['Health Insurance', 'Auto Insurance', 'Property Insurance', 'Insurance Claims']
    }
  ];

  const recentArticles = [
    {
      title: isArabic ? 'التحديثات الجديدة في قانون الشركات السعودي 2024' : 'New Updates in Saudi Corporate Law 2024',
      date: isArabic ? '20 ديسمبر 2024' : 'December 20, 2024',
      category: isArabic ? 'القانون التجاري' : 'Commercial Law',
      summary: isArabic ? 'أهم التعديلات والتحديثات على نظام الشركات الجديد' : 'Key amendments and updates to the new Companies Law'
    },
    {
      title: isArabic ? 'حقوق العمال في نظام العمل السعودي المطور' : 'Workers\' Rights in the Enhanced Saudi Labor System',
      date: isArabic ? '18 ديسمبر 2024' : 'December 18, 2024',
      category: isArabic ? 'قانون العمل' : 'Labor Law',
      summary: isArabic ? 'التطورات الجديدة في حماية حقوق العمال ومرونة العمل' : 'New developments in worker rights protection and work flexibility'
    },
    {
      title: isArabic ? 'دليل شامل للتحكيم التجاري في المملكة' : 'Comprehensive Guide to Commercial Arbitration in the Kingdom',
      date: isArabic ? '15 ديسمبر 2024' : 'December 15, 2024',
      category: isArabic ? 'التحكيم والوساطة' : 'Arbitration & Mediation',
      summary: isArabic ? 'كل ما تحتاج معرفته عن إجراءات التحكيم التجاري' : 'Everything you need to know about commercial arbitration procedures'
    },
    {
      title: isArabic ? 'الاستثمار الأجنبي في ضوء رؤية 2030' : 'Foreign Investment in Light of Vision 2030',
      date: isArabic ? '12 ديسمبر 2024' : 'December 12, 2024',
      category: isArabic ? 'القانون الدولي' : 'International Law',
      summary: isArabic ? 'الفرص والتحديات للمستثمرين الأجانب في السوق السعودي' : 'Opportunities and challenges for foreign investors in the Saudi market'
    },
    {
      title: isArabic ? 'حماية الملكية الفكرية في العصر الرقمي' : 'Intellectual Property Protection in the Digital Age',
      date: isArabic ? '10 ديسمبر 2024' : 'December 10, 2024',
      category: isArabic ? 'الملكية الفكرية' : 'Intellectual Property',
      summary: isArabic ? 'تحديات وحلول حماية الحقوق الفكرية في البيئة الرقمية' : 'Challenges and solutions for IP protection in the digital environment'
    },
    {
      title: isArabic ? 'التطوير العقاري والاستثمار في السعودية' : 'Real Estate Development and Investment in Saudi Arabia',
      date: isArabic ? '8 ديسمبر 2024' : 'December 8, 2024',
      category: isArabic ? 'القانون العقاري' : 'Real Estate Law',
      summary: isArabic ? 'القوانين والأنظمة الجديدة في قطاع التطوير العقاري' : 'New laws and regulations in the real estate development sector'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Book className="w-24 h-24 text-gold-400 mx-auto mb-8" />
            <h1 className={`text-5xl md:text-7xl font-bold mb-8 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('legalKnowledgeTitle')}
            </h1>
            <p className={`text-xl text-white/90 leading-relaxed font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {t('legalKnowledgeDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold text-center text-foreground mb-16 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic ? 'فئات المعرفة القانونية' : 'Legal Knowledge Categories'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {knowledgeCategories.map((category, index) => (
                <Card key={index} className="card-hover border-2 border-gold-200 dark:border-gold-700 hover:border-gold-400 dark:hover:border-gold-500 h-full flex flex-col">
                  <CardHeader className="text-center flex-grow">
                    <category.icon className="w-16 h-16 text-gold-600 mx-auto mb-6" />
                    <CardTitle className={`text-xl font-ge-ss-two mb-4 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {category.title}
                    </CardTitle>
                    <p className={`text-muted-foreground mb-4 font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {category.description}
                    </p>
                    <p className={`text-gold-600 font-semibold mb-4 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {category.articles}
                    </p>
                    
                    {/* Topics List */}
                    <div className="text-sm space-y-2 mb-4">
                      {category.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className={`text-muted-foreground font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                          • {topic}
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button className={`w-full golden-button font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
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
      <section className="py-24 bg-gradient-to-br from-gold-50 to-navy-50 dark:from-navy-900 dark:to-gold-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold text-center text-foreground mb-16 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
              {isArabic ? 'أحدث المقالات' : 'Recent Articles'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <Card key={index} className="card-hover h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className={`text-sm text-gold-600 font-semibold mb-3 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {article.category}
                    </div>
                    <CardTitle className={`text-xl leading-tight font-ge-ss-two mb-4 ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {article.title}
                    </CardTitle>
                    <p className={`text-sm text-muted-foreground font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
                      {article.summary}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
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

      {/* Legal Disclaimer Section */}
      <section className="py-16 bg-gold-50 dark:bg-navy-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-white dark:bg-navy-700 rounded-lg border-l-4 border-gold-500 shadow-lg">
              <p className={`text-lg text-muted-foreground font-ge-ss-two-light leading-relaxed ${isArabic ? 'font-arabic' : 'font-english'}`}>
                {t('legalDisclaimer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-navy-800 to-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 font-ge-ss-two ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'هل تحتاج استشارة قانونية متخصصة؟' : 'Need Specialized Legal Consultation?'}
          </h2>
          <p className={`text-xl text-white/90 mb-10 max-w-3xl mx-auto font-ge-ss-two-light ${isArabic ? 'font-arabic' : 'font-english'}`}>
            {isArabic ? 'تواصل معنا للحصول على استشارة قانونية دقيقة ومتخصصة من خبرائنا المرخصين' : 'Contact us for precise and specialized legal consultation from our licensed experts'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="golden-button text-lg px-10 py-4 font-ge-ss-two"
              asChild
            >
              <a href="/contact">
                {isArabic ? 'احجز استشارة' : 'Book Consultation'}
              </a>
            </Button>
            <Button 
              size="lg" 
              className="golden-button text-lg px-10 py-4 font-ge-ss-two"
              asChild
            >
              <a href="https://wa.me/966576808900" target="_blank" rel="noopener noreferrer">
                {isArabic ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalKnowledge;
