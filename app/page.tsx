'use client'

import { useState } from 'react'
import BlogCard from '@/components/blog-card'
import { CheckCircle2, Users, Sparkles } from 'lucide-react'
import { BLOGS } from '@/lib/blogs-data'
import Link from "next/link"

const CATEGORIES = ['الكل', 'صحة نفسية', 'نمط حياة', 'تغذية', 'صحة عقلية', 'لياقة بدنية', 'أمراض مزمنة', 'الصحة الجنسية', 'العناية الشخصية']

const ABOUT_FEATURES = [
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: 'محتوى موثوق',
    description: 'جميع المقالات مكتوبة ومراجعة من قبل خبراء حاصلين على درجات دكتوراه في مجالاتهم'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'فريق متخصص',
    description: 'فريقنا يتكون من أطباء وباحثين برتبة دكتوراه في التغذية والصحة النفسية والطب الحديث'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'تجربة فريدة',
    description: 'استمع للمقالات بينما تقرأ بفضل تقنية النطق الصوتي المتقدمة'
  }
]

const EXPERTS = [
  {
    name: 'د. أحمد محمد',
    specialty: 'دكتوراه في التغذية السريرية',
    description: 'متخصص في تخطيط التغذية والصحة الوقائية'
  },
  {
    name: 'د. علي حسن',
    specialty: 'دكتوراه في علم النفس الإكلينيكي',
    description: 'خبير في الصحة النفسية والعلاجات السلوكية'
  },
  {
    name: 'د. محمود يوسف',
    specialty: 'دكتوراه في الطب الحديث والصحة العامة',
    description: 'متخصص في الرعاية الصحية الشاملة والوقاية'
  }
]

const FEATURED_BLOGS = [
  BLOGS[0], // فوائد الكتابة المنتظمة
  BLOGS[1], // نصائح لتحسين جودة النوم
  BLOGS[2], // التغذية السليمة
]

export default function Home() {
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
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">اقرأ واستمع معاً</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                منصة موثوقة للمحتوى الطبي والصحي. استمتع بقراءة المقالات الملهمة والاستماع إليها في نفس الوقت
              </p>
              <p className="text-base opacity-80 mb-8">
                جميع محتوانا مكتوب ومراجع بعناية من قبل متخصصين حاصلين على درجات دكتوراه في مجالات الطب والتغذية والصحة النفسية
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/20 rounded-lg backdrop-blur">
                  <p className="font-semibold">+500</p>
                  <p className="text-sm opacity-90">مقالة موثوقة</p>
                </div>
                <div className="px-6 py-3 bg-white/20 rounded-lg backdrop-blur">
                  <p className="font-semibold">50K+</p>
                  <p className="text-sm opacity-90">قارئ مستفيد</p>
                </div>
                <div className="px-6 py-3 bg-white/20 rounded-lg backdrop-blur">
                  <p className="font-semibold">15+</p>
                  <p className="text-sm opacity-90">خبير متخصص</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur">
                <p className="text-white/90 mb-6 leading-relaxed">
                  "نحن ملتزمون بتقديم معلومات طبية دقيقة وموثوقة مبنية على أحدث الأبحاث العلمية. فريقنا من الخبراء يعمل بجد لضمان جودة كل محتوى."
                </p>
                <p className="text-white/80 font-semibold">- فريق المحررين</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            لماذا تثق بنا؟
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ABOUT_FEATURES.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 border border-border/50 hover:border-primary/50 transition">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">فريقنا من الخبراء</h3>
            <p className="text-muted-foreground mb-8">
              جميع محتوانا مراجع من قبل متخصصين بدرجة دكتوراه في مجالاتهم
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EXPERTS.map((expert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-border">
                  <h4 className="font-bold text-lg text-foreground mb-1">{expert.name}</h4>
                  <p className="text-primary font-semibold text-sm mb-3">{expert.specialty}</p>
                  <p className="text-sm text-muted-foreground">{expert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            المقالات المختارة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {FEATURED_BLOGS.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div className="text-center">
            <Link 
              href="/blogs" 
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-semibold"
            >
              اكتشف المزيد من المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
