'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, RotateCcw, Volume1 } from 'lucide-react'

interface AudioPlayerProps {
  text: string
  title: string
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
}

export default function AudioPlayer({
  text,
  title,
  isPlaying,
  setIsPlaying,
}: AudioPlayerProps) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [volume, setVolume] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [rate, setRate] = useState(1)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  // Clean text for TTS
  const cleanText = text.replace(/\n+/g, ' ').replace(/•\s*/g, '')

  const handlePlay = () => {
    if (isSpeaking) {
      window.speechSynthesis.pause()
      setIsSpeaking(false)
      setIsPlaying(false)
    } else {
      // Cancel any existing speech
      window.speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance(cleanText)
      utterance.lang = 'ar-SA'
      utterance.rate = rate
      utterance.pitch = pitch
      utterance.volume = Math.min(volume, 1) // Ensure volume stays within bounds

      utterance.onstart = () => {
        setIsSpeaking(true)
        setIsPlaying(true)
      }

      utterance.onend = () => {
        setIsSpeaking(false)
        setIsPlaying(false)
      }

      utterance.onerror = () => {
        setIsSpeaking(false)
        setIsPlaying(false)
      }

      utteranceRef.current = utterance
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleReset = () => {
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
    setIsPlaying(false)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (isSpeaking && utteranceRef.current) {
      utteranceRef.current.volume = newVolume
    }
  }

  const handlePitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPitch = parseFloat(e.target.value)
    setPitch(newPitch)
  }

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRate = parseFloat(e.target.value)
    setRate(newRate)
  }

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current" />
            )}
          </button>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="w-5 h-5 text-primary flex-shrink-0" />
              <h3 className="font-semibold text-foreground truncate">استمع للمقالة</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {isSpeaking ? 'جاري التشغيل...' : 'اضغط للاستماع للمقالة'}
            </p>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3 px-2">
          <Volume1 className="w-4 h-4 text-primary flex-shrink-0" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`
            }}
          />
          <span className="text-xs text-muted-foreground w-8 text-right">{Math.round(volume * 100)}%</span>
        </div>

        {/* Pitch Control */}
        <div className="flex items-center gap-3 px-2">
          <span className="text-xs font-semibold text-primary flex-shrink-0 w-12">الطبقة</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={pitch}
            onChange={handlePitchChange}
            className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((pitch - 0.5) / 1.5) * 100}%, #e5e7eb ${((pitch - 0.5) / 1.5) * 100}%, #e5e7eb 100%)`
            }}
          />
          <span className="text-xs text-muted-foreground w-8 text-right">{pitch.toFixed(1)}</span>
        </div>

        {/* Speed Control */}
        <div className="flex items-center gap-3 px-2">
          <span className="text-xs font-semibold text-primary flex-shrink-0 w-12">السرعة</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={handleRateChange}
            className="flex-1 h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${((rate - 0.5) / 1.5) * 100}%, #e5e7eb ${((rate - 0.5) / 1.5) * 100}%, #e5e7eb 100%)`
            }}
          />
          <span className="text-xs text-muted-foreground w-8 text-right">{rate.toFixed(1)}x</span>
        </div>
      </div>

      {/* Progress Note */}
      <div className="mt-4 p-3 bg-white rounded border border-border">
        <p className="text-xs text-muted-foreground text-center">
          ⓘ ميزة الاستماع مفعلة مع التحكم الكامل بالصوت والطبقة والسرعة. تأكد من تفعيل الصوت في جهازك.
        </p>
      </div>
    </div>
  )
}
