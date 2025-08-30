"use client"

import { Button } from "@/components/ui/button"
import { Sword } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="absolute top-0 w-full z-20 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-accent">Sword Art Online</h1>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="bg-transparent border border-white/30 text-white hover:bg-white/10"
            onClick={toggleMenu}
          >
            <Sword className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden lg:flex gap-4">
          <Link href="/">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10"
            >
              Home
            </Button>
          </Link>
          <Link href="/about">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10"
            >
              About
            </Button>
          </Link>
          <Link href="/character">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10"
            >
              Character
            </Button>
          </Link>
          <Link href="/database-skill">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10"
            >
              Database Skill
            </Button>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/80 text-white px-4 py-2 flex flex-col space-y-2">
          <Link href="/">
            <Button variant="outline" size="sm" className="bg-transparent text-white hover:bg-white/10">
              Home
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="sm" className="bg-transparent text-white hover:bg-white/10">
              About
            </Button>
          </Link>
          <Link href="/character">
            <Button variant="outline" size="sm" className="bg-transparent text-white hover:bg-white/10">
              Character
            </Button>
          </Link>
          <Link href="/database-skill">
            <Button variant="outline" size="sm" className="bg-transparent text-white hover:bg-white/10">
              Database Skill
            </Button>
          </Link>
        </div>
      )}
    </header>
  )
}
