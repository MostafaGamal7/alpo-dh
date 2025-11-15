'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import BlogCard from '@/components/blog-card'
import SearchBar from '@/components/search-bar'
import Footer from '@/components/footer'
import { BLOGS } from '@/lib/blogs-data'

export { BLOGS }

const CATEGORIES = ['الكل', 'صحة نفسية', 'نمط حياة', 'تغذية', 'صحة عقلية', 'لياقة بدنية', 'أمراض مزمنة', 'العناية الشخصية']

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('الكل')

  const filteredBlogs = BLOGS.filter(blog => {
    const matchesSearch = blog.title.includes(searchTerm) || blog.excerpt.includes(searchTerm)
    const matchesCategory = selectedCategory === 'الكل' || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">جميع المقالات</h1>
          <p className="text-lg md:text-xl opacity-90">
            اكتشف مجموعة شاملة من المقالات الطبية الموثوقة والمكتوبة من قبل متخصصين حاصلين على درجات دكتوراه
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-white border-b border-border">
        <div className="max-w-6xl mx-auto">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          
          <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white border border-primary/50 text-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground mb-6">
            عدد المقالات: <span className="font-semibold text-foreground">{filteredBlogs.length}</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          
          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">لا توجد مقالات تطابق بحثك</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
