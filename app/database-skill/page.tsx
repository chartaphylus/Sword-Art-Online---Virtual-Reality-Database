"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SkillList from "@/components/skillList"

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

        {/* 🔹 Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
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
