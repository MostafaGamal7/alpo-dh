import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Award, Target, Heart } from 'lucide-react'

const VALUES = [
  {
    icon: <Award className="w-8 h-8" />,
    title: 'الدقة والتحقق',
    description: 'كل معلومة يتم التحقق منها من قبل خبراء متخصصين ومراجعتها بناءً على أحدث الأبحاث'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'الوضوح والسهولة',
    description: 'نعمل على جعل المعلومات الطبية المعقدة سهلة الفهم للجميع'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'الرعاية والاهتمام',
    description: 'نهتم بصحتك وعافيتك ونسعى لتقديم معلومات تحسن جودة حياتك'
  }
]

const EXPERTISE_AREAS = [
  'التغذية والصحة الغذائية',
  'الصحة النفسية والعافية',
  'الطب الحديث والوقاية',
  'نمط الحياة الصحي',
  'الرعاية الصحية الشاملة',
  'البحث الطبي والعلمي'
]

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <section 
        className="relative py-24 px-4 text-white overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">عن موقعنا</h1>
          <p className="text-lg md:text-xl opacity-90">
            منصة موثوقة متخصصة في تقديم محتوى صحي وتعليمي من أعلى جودة
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">رسالتنا</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                نسعى لتوفير محتوى صحي موثوق ومعلومات دقيقة تساعدك على اتخاذ قرارات صحية أفضل لنفسك وأسرتك. كل مقالة على موقعنا تمثل التزاماً بالتميز والدقة العلمية.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">رؤيتنا</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                أن نكون المرجع الموثوق الأول للمعلومات الصحية في الوطن العربي، حيث يحصل ملايين الأشخاص على معلومات دقيقة وموثوقة تساهم في تحسين جودة حياتهم.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground text-center">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-8 border border-border/50 text-center hover:border-primary/50 transition">
                  <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">مجالات تخصصنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {EXPERTISE_AREAS.map((area, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Trust Us */}
          <div className="bg-white rounded-lg p-8 md:p-12 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-foreground">لماذا تثق بنا؟</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>جميع الكتاب والمحررين حاصلون على درجة دكتوراه في تخصصاتهم</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>كل مقالة تخضع لمراجعة متعددة من قبل خبراء مستقلين</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>نستند على أحدث الأبحاث العلمية والمراجع الطبية المعتمدة</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>التزام كامل بالشفافية والأمانة العلمية في جميع محتوانا</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>تحديث منتظم للمحتوى ليعكس أحدث التطورات العلمية</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
