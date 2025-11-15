import Link from 'next/link'
import { Volume2 } from 'lucide-react'

interface BlogCardProps {
  blog: {
    id: number
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
  }
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden bg-muted">
          <img 
            src={blog.image || "/placeholder.svg"} 
            alt={blog.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
              {blog.category}
            </span>
            <span className="text-xs text-muted-foreground">{blog.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 hover:text-primary">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-foreground/70 text-sm mb-4 line-clamp-2 flex-1">
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-xs text-muted-foreground">{blog.date}</span>
            <Volume2 className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </Link>
  )
}
