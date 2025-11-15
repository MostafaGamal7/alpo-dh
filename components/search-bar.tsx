import { Search } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="ابحث عن المقالات..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-3 pl-12 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
    </div>
  )
}
