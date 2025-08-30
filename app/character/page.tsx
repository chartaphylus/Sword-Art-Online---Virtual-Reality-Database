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
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <h1 className="text-xl md:text-2xl font-bold text-accent">
              SAO Database
            </h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/character" className="hover:underline">
                  Character
                </Link>
              </li>
              <li>
                <Link href="/database-skill" className="hover:underline">
                  Database Skill
                </Link>
              </li>
            </ul>
          </nav>
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
        {/* 🔹 Footer */}
        <footer
            className="relative w-full bg-center bg-cover text-white mt-10"
            style={{
                backgroundImage:
                "url('https://i.pinimg.com/1200x/72/c6/66/72c6667249de7cb5d2b0dc223cac4f4c.jpg')",
            }}
            >
            {/* Overlay semi-transparent */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Konten Footer */}
            <div className="relative z-10 flex items-center justify-center py-20 md:py-32">
                <div className="max-w-7xl px-4 text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} SAO Database. All rights reserved.
                </p>
                </div>
            </div>
            </footer>
      </div>
    </div>
  )
}
