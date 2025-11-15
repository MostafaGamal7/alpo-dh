'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import AudioPlayer from '@/components/audio-player'
import { useParams } from 'next/navigation'
import { BLOGS } from '@/lib/blogs-data'

export default function BlogDetail() {
  const params = useParams()
  const slug = params.slug as string
  const blog = BLOGS.find(b => b.slug === slug)
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-xl text-muted-foreground">المقالة غير موجودة</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">      
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden bg-muted">
        <img 
          src={blog.image || "/placeholder.svg"} 
          alt={blog.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <article className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{blog.category}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            {blog.title}
          </h1>

          {/* Audio Player */}
          <div className="mb-8">
            <AudioPlayer 
              text={blog.content} 
              title={blog.title}
              isPlaying={isPlayingAudio}
              setIsPlaying={setIsPlayingAudio}
            />
          </div>

          {/* Content */}
          <div className="prose-ar max-w-none space-y-6 text-lg leading-relaxed">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
