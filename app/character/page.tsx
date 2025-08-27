"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { characters } from "@/lib/charactersData"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

export default function SAOCharacters() {

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.1,
      spacing: 12,
    },
  })

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.alphacoders.com/110/1103597.png')`,
      }}
    >
      <div className="min-h-screen bg-background/80 backdrop-blur-sm">
        {/* 🔹 Header */}
        <header className="border-b border-border py-4">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="outline" size="sm" className="cyber-border bg-transparent">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="sm" className="cyber-border bg-transparent">
                  About
                </Button>
              </Link>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-accent neon-glow">
              SAO Characters
            </h1>
          </div>
        </header>

        {/* 🔹 Characters */}
        <main className="max-w-7xl mx-auto px-4 py-8">
        
          <div className="block md:hidden">
            <div ref={sliderRef} className="keen-slider">
              {characters.map((char, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <Card className="relative w-full aspect-[3/4] shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <img
                      src={char.image}
                      alt={char.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 w-full bg-black/70 text-white p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold">{char.name}</h2>
                        <Badge variant="secondary" className="text-xs">
                          {char.arc}
                        </Badge>
                      </div>
                      <p className="italic text-indigo-300 text-sm">{char.title}</p>
                      <p className="text-xs mt-2 text-gray-200 line-clamp-3">
                        {char.description}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
            {characters.map((char, idx) => (
              <Card
                key={idx}
                className="relative w-full aspect-[3/4] shadow-xl rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 w-full bg-black/70 text-white p-4 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold">{char.name}</h2>
                    <Badge variant="secondary" className="text-xs">
                      {char.arc}
                    </Badge>
                  </div>
                  <p className="italic text-indigo-300 text-sm">{char.title}</p>
                  <p className="text-xs mt-2 text-gray-200 line-clamp-3">
                    {char.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
