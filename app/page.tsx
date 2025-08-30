"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RefreshCw, Sword } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"

interface AnimeQuote {
  anime: string
  character: string
  quote: string
}

export default function HomePage() {
  const [quote, setQuote] = useState<AnimeQuote | null>(null)
  const [quoteLoading, setQuoteLoading] = useState(false)
  const [showEnglish, setShowEnglish] = useState(true)

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  const fetchRandomQuote = async () => {
    setQuoteLoading(true)
    try {
      const response = await fetch("https://katanime.vercel.app/api/getrandom")
      const data = await response.json()
      if (data.sukses && Array.isArray(data.result) && data.result.length > 0) {
        const randomQuote = data.result[Math.floor(Math.random() * data.result.length)]
        const selectedQuote = showEnglish
          ? randomQuote.english || randomQuote.indo
          : randomQuote.indo || randomQuote.english

        setQuote({
          anime: randomQuote.anime,
          character: randomQuote.character,
          quote: selectedQuote,
        })

        setShowEnglish(!showEnglish)
      }
    } catch {
      setQuote({
        anime: "Sword Art Online",
        character: "Kirito",
        quote: showEnglish
          ? "A person is strong when they can truly smile."
          : "Seseorang kuat ketika mereka benar-benar bisa tersenyum.",
      })
      setShowEnglish(!showEnglish)
    } finally {
      setQuoteLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div>
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/sword-art-online-epic-cyber-landscape-with-floatin.png')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <br /><br />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-accent animate-pulse">
            SWORD ART ONLINE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground">
            Enter the Virtual Reality MMORPG World
          </p>

          {/* Quote Section */}
          <Card className="bg-card/80 backdrop-blur-sm max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-accent flex items-center justify-center gap-2">
                <Sword className="h-5 w-5" /> Anime Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="overflow-y-auto max-h-[50vh]">
              {quote && !quoteLoading ? (
                <div className="space-y-4">
                  <blockquote className="italic text-lg md:text-xl">"{quote.quote}"</blockquote>
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-center sm:text-left">
                      <p className="font-semibold text-accent">{quote.character}</p>
                      <p className="text-sm text-muted-foreground">{quote.anime}</p>
                    </div>
                    <Button
                      onClick={fetchRandomQuote}
                      disabled={quoteLoading}
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <RefreshCw className={`h-4 w-4 ${quoteLoading ? "animate-spin" : ""}`} />
                      <span className="ml-2 hidden sm:inline">Reload</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="animate-pulse text-muted-foreground text-center">Loading...</p>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
