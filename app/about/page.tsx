"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sword, Users, Calendar, Star, Play, Book, Heart } from "lucide-react"
import Link from "next/link"
import ArcList from "@/components/arcList"
import Navbar from "@/components/navbar"

export default function AboutSAO() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('https://images.alphacoders.com/110/1103597.png')` }}
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen">

        {/* Header */}
        <div>
          <Navbar />
        </div>
        <br /><br />

        {/* Hero Section */}
        <div className="relative py-12 md:py-20 px-4 text-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 text-accent">SWORD ART ONLINE</h1> */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The Revolutionary Virtual Reality MMORPG That Changed Everything
          </p>
        </div>

        {/* Main Content */}
        <div className="py-8 px-4 max-w-6xl mx-auto space-y-12">

          {/* Overview */}
          <Card className="cyber-border bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <Book className="h-6 w-6" />
                What is Sword Art Online?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Sword Art Online (SAO) is a Japanese light novel series written by Reki Kawahara and illustrated by abec. The series takes place in the year 2022, when a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online is released.
              </p>
              <p>
                Players control their avatars with their minds using a piece of technology called the NerveGear. However, they soon discover they cannot log out, as the game's creator has trapped them until they reach the 100th floor of the game's tower and defeat the final boss. If they die in the game, they die in real life.
              </p>
              <p>
                SAO explores not only action and battles but also human relationships in a virtual world. It highlights themes of trauma, love, friendship, and courage in a digital scale. Additionally, SAO has many side stories, spin-offs, and extra light novels like "Calibur Arc", "Progressive Series", and "Girls' Ops".
              </p>
            </CardContent>
          </Card>

          {/* Story Arcs */}
          <section className="py-8">
            <h2 className="text-2xl font-semibold mb-6 text-accent">Story Arcs</h2>
            <ArcList />
          </section>

          {/* Series Information & Media Adaptation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="cyber-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> Series Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <div className="flex justify-between"><span>Author:</span><span className="text-accent">Reki Kawahara</span></div>
                <div className="flex justify-between"><span>Illustrator:</span><span className="text-accent">abec</span></div>
                <div className="flex justify-between"><span>First Published:</span><span className="text-accent">April 2009</span></div>
                <div className="flex justify-between"><span>Anime Debut:</span><span className="text-accent">July 2012</span></div>
                <div className="flex justify-between"><span>Studio:</span><span className="text-accent">A-1 Pictures</span></div>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Play className="h-5 w-5" /> Media Adaptations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["Light Novel Series","Anime Series (4 Seasons)","Manga Adaptations","Video Games","Movie Series"].map((m,i)=>(
                  <Badge key={i} className="bg-purple-500/20 text-purple-400 border-purple-500/30 w-full justify-center py-2">{m}</Badge>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Core Themes */}
          <Card className="cyber-border bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Core Themes</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="text-lg font-semibold text-accent">Virtual vs Reality</h3>
                <p>SAO explores the blurring lines between virtual and real experiences, questioning what makes relationships and emotions authentic in digital spaces.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">Technology & Humanity</h3>
                <p>The series examines how advanced technology can both enhance and threaten human connection, freedom, and identity.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">Love & Partnership</h3>
                <p>Central to the story is the relationship between Kirito and Asuna, showing how love can transcend virtual boundaries.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent">Survival & Growth</h3>
                <p>Characters must adapt, grow stronger, and overcome seemingly impossible challenges to survive and protect those they care about.</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>

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
  )
}
