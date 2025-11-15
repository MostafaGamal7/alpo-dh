import Link from 'next/link'
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              +
            </div>
              <h3 className="font-bold text-lg">alpo-DH</h3>
            </div>
            <p className="text-white/80 text-sm">
              منصة مقالات طبية موثوقة متخصصة في تقديم محتوى صحي دقيق من خبراء بدرجة دكتوراه.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">الروابط السريعة</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition">الرئيسية</Link></li>
              <li><Link href="/" className="hover:text-white transition">المقالات</Link></li>
              <li><Link href="/about" className="hover:text-white transition">عن الموقع</Link></li>
              <li><Link href="/" className="hover:text-white transition">الشروط والأحكام</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">التصنيفات</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition">صحة نفسية</Link></li>
              <li><Link href="/" className="hover:text-white transition">نمط حياة</Link></li>
              <li><Link href="/" className="hover:text-white transition">تغذية</Link></li>
              <li><Link href="/" className="hover:text-white transition">لياقة بدنية</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +20 12 235 099 12
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@alpo-dh.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                مصر - القاهرة
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white/80 mb-4 md:mb-0">
            © 2025 alpo-DH. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
