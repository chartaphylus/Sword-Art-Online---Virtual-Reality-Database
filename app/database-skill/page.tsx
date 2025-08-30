"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SkillList from "@/components/skillList"
import Navbar from "@/components/navbar"

export default function DatabaseSkillPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.alphacoders.com/110/1103597.png')`,
      }}
    >
      <div className="min-h-screen flex flex-col bg-background/80 backdrop-blur-sm">
        {/* 🔹 Header */}
        <div>
          <Navbar />
        </div>
          <br /><br />

        <div className="relative py-12 md:py-20 px-4 text-center">
          <p className="text-lg md:text-xl text-muted-foreground mb-4"> {/* Mengurangi margin-bottom */}
            Explore and Master the Skills of Sword Art Online Characters
          </p>
        </div>

  {/* 🔹 Main Content */}
  <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-4"> {/* Mengurangi padding pada main content */}
    <SkillList />
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
