"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Sword, Shield, Zap, Star, Users, Clock, ArrowLeft, ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Skill {
  id: number
  name: string
  description: string
  type: string
  element?: string
  cooldown?: number
  damage?: number
  level?: number
  category?: string
  imageUrl?: string
}

interface AnimeQuote {
  anime: string
  character: string
  quote: string
}

export default function SAOWebsite() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [quote, setQuote] = useState<AnimeQuote | null>(null)
  const [loading, setLoading] = useState(true)
  const [quoteLoading, setQuoteLoading] = useState(false)
  const [skillsError, setSkillsError] = useState(false)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        console.log("[v0] Fetching skills data...")
        const response = await fetch(
          "https://saoif.zulma.id/assets/api/skills.json?fbclid=IwQ0xDSwMYhbBjbGNrAxiFVGV4dG4DYWVtAjExAAEeuRUIA1rozQVvGnH6bnA2KNtf6XzDHJ8ZDIWICkczCQGYSl-oPL75uwaWrUI_aem_lAkVtMrNmR-q5BMOAT97ew&sfnsn=wiwspwa",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          },
        )

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        console.log("[v0] Skills data received:", data)

        let skillsArray = []
        if (data.skill && Array.isArray(data.skill)) {
          // Transform the API data to our format
          skillsArray = data.skill.map((skill: any, index: number) => {
            // Clean HTML tags from description
            const cleanDescription = (text: string) => {
              if (!text) return "No description available"
              return text
                .replace(/<br\s*\/?>/gi, " ")
                .replace(/<[^>]*>/g, "")
                .trim()
            }

            const skillEffect = skill.skill_effect?.[0] || skill.skill_name?.[0] || ""
            const cleanedDescription = cleanDescription(skillEffect)

            return {
              id: skill.id || index + 1,
              name: skill.name || `Skill ${index + 1}`,
              description: cleanedDescription,
              type: skill.skill_type || "Normal Skill",
              element: skill.element || "None",
              cooldown: Number.parseFloat(skill.skill_cool_time?.[0]) || 0,
              damage: skillEffect.match(/(\d+)%/)?.[1]
                ? Number.parseInt(skillEffect.match(/(\d+)%/)?.[1] || "0") * 10
                : 0,
              level: 1,
              category: skill.weapon || "General",
              imageUrl: skill.url_image || null,
            }
          })
        } else if (Array.isArray(data)) {
          skillsArray = data
        } else if (typeof data === "object") {
          skillsArray = Object.values(data)
        }

        console.log("[v0] Parsed skills:", skillsArray)
        setSkills(skillsArray)
        setSkillsError(false)
      } catch (error) {
        console.error("[v0] Error fetching skills:", error)
        setSkillsError(true)
        setSkills([
          {
            id: 1,
            name: "Starburst Stream",
            description: "A powerful 16-hit combo sword skill that overwhelms enemies with speed",
            type: "Sword Skill",
            element: "Light",
            cooldown: 45,
            damage: 850,
            level: 50,
            category: "Ultimate",
            imageUrl: "/anime-sword-fighter-with-dual-blades.png",
          },
          {
            id: 2,
            name: "Vertical Square",
            description: "A four-hit sword skill forming a square pattern",
            type: "Sword Skill",
            element: "None",
            cooldown: 12,
            damage: 320,
            level: 15,
            category: "Basic",
            imageUrl: "/anime-warrior-with-single-sword.png",
          },
          {
            id: 3,
            name: "Sonic Leap",
            description: "A high-speed jumping attack that closes distance instantly",
            type: "Movement",
            element: "Wind",
            cooldown: 8,
            damage: 180,
            level: 8,
            category: "Mobility",
            imageUrl: "/anime-character-jumping-with-wind-effects.png",
          },
          {
            id: 4,
            name: "Healing Light",
            description: "Restores HP over time with a warm golden glow",
            type: "Magic",
            element: "Light",
            cooldown: 30,
            damage: 0,
            level: 20,
            category: "Support",
            imageUrl: "/anime-healer-with-golden-light-magic.png",
          },
          {
            id: 5,
            name: "Flame Burst",
            description: "Explosive fire magic that damages multiple enemies",
            type: "Magic",
            element: "Fire",
            cooldown: 18,
            damage: 450,
            level: 25,
            category: "AOE",
            imageUrl: "/anime-mage-casting-fire-magic.png",
          },
          {
            id: 6,
            name: "Ice Wall",
            description: "Creates a protective barrier of ice to block attacks",
            type: "Defense",
            element: "Ice",
            cooldown: 25,
            damage: 0,
            level: 18,
            category: "Defense",
            imageUrl: "/anime-character-creating-ice-barrier.png",
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  useEffect(() => {
    fetchRandomQuote()
  }, [])

  const fetchRandomQuote = async () => {
    setQuoteLoading(true)
    try {
      console.log("[v0] Fetching random quote...")
      const response = await fetch("https://katanime.vercel.app/api/getrandom")

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("[v0] Quote data received:", data)

      if (data.sukses && data.result && Array.isArray(data.result) && data.result.length > 0) {
        const randomQuote = data.result[Math.floor(Math.random() * data.result.length)]
        setQuote({
          anime: randomQuote.anime,
          character: randomQuote.character,
          quote: randomQuote.english || randomQuote.indo,
        })
      } else {
        throw new Error("Invalid quote data structure")
      }
    } catch (error) {
      console.error("[v0] Error fetching quote:", error)
      const fallbackQuotes = [
        {
          anime: "Sword Art Online",
          character: "Kirito",
          quote: "A person is strong when they can truly smile.",
        },
        {
          anime: "Sword Art Online",
          character: "Asuna",
          quote:
            "Life isn't just about passing on your genes. We can leave behind much more than just DNA. Through speech, music, literature and movies... what we've seen, heard, felt... anger, joy and sorrow... these are the things I will pass on.",
        },
        {
          anime: "Sword Art Online",
          character: "Klein",
          quote: "You're not alone. We're partners.",
        },
        {
          anime: "Sword Art Online",
          character: "Yui",
          quote: "Even if I die, my love for you will never disappear.",
        },
      ]
      const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]
      setQuote(randomQuote)
    } finally {
      setQuoteLoading(false)
    }
  }

  const getSkillIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case "attack":
      case "sword":
      case "sword skill":
        return <Sword className="h-5 w-5" />
      case "defense":
      case "shield":
        return <Shield className="h-5 w-5" />
      case "magic":
        return <Star className="h-5 w-5" />
      case "movement":
      case "mobility":
        return <Zap className="h-5 w-5" />
      case "support":
        return <Users className="h-5 w-5" />
      default:
        return <Zap className="h-5 w-5" />
    }
  }

  const getElementColor = (element: string) => {
    switch (element?.toLowerCase()) {
      case "fire":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "water":
      case "ice":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "earth":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "wind":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "light":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "dark":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "none":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-accent/20 text-accent border-accent/30"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category?.toLowerCase()) {
      case "ultimate":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
      case "basic":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "aoe":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "defense":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "support":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      case "mobility":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-accent/20 text-accent border-accent/30"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/sword-art-online-epic-cyber-landscape-with-floatin.png')`,
          }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-destructive rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/50 rounded-full animate-bounce"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 neon-glow text-accent animate-pulse">
            SWORD ART ONLINE
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-muted-foreground">
            Enter the Virtual Reality MMORPG World
          </p>
      
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Link href="/about">
            <Button variant="outline" size="sm" className="cyber-border bg-transparent">
              <ArrowRightIcon className="h-4 w-4 mr-2" />
              Learn About Sword Art Online
            </Button>
          </Link>
          </div>

          <br />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Link href="/character">
            <Button variant="outline" size="sm" className="cyber-border bg-transparent">
              <ArrowRightIcon className="h-4 w-4 mr-2" />
              Main Character
            </Button>
          </Link>
          </div>

          <br /><br />

          {/* Quote Section */}
          <Card className="cyber-border bg-card/80 backdrop-blur-sm max-w-2xl mx-auto hover-elevate">
            <CardHeader>
              <CardTitle className="text-accent flex items-center justify-center gap-2">
                <Sword className="h-5 w-5" />
                Anime Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              {quote && !quoteLoading ? (
                <div className="space-y-4">
                  <blockquote className="text-base md:text-lg italic text-foreground leading-relaxed">
                    "{quote.quote}"
                  </blockquote>
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
                      className="cyber-border hover-elevate bg-transparent"
                    >
                      <RefreshCw className={`h-4 w-4 ${quoteLoading ? "animate-spin" : ""}`} />
                      <span className="ml-2 hidden sm:inline">Reload</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 neon-glow text-accent">SKILL DATABASE</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Master the arts of virtual combat</p>
            {skillsError && (
              <p className="text-destructive mt-2 text-sm">Using demo data - API temporarily unavailable</p>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="cyber-border animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.id || index}
                  className="cyber-border hover-elevate bg-card/80 backdrop-blur-sm overflow-hidden"
                >
                  {skill.imageUrl && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={skill.imageUrl || "/placeholder.svg"}
                        alt={skill.name}
                        fill
                        className="object-contain object-center transition-transform duration-300 hover:scale-105 p-2"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement
                          target.src = `/placeholder.svg?height=200&width=200&query=anime character ${skill.category}`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                  )}

                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-accent text-lg">
                      {getSkillIcon(skill.type)}
                      {skill.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="cyber-border text-xs">
                        {skill.type}
                      </Badge>
                      {skill.element && (
                        <Badge className={`${getElementColor(skill.element)} text-xs`}>{skill.element}</Badge>
                      )}
                      {skill.category && (
                        <Badge className={`${getCategoryColor(skill.category)} text-xs`}>{skill.category}</Badge>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {skill.cooldown !== undefined && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground">CD:</span>
                          <span className="text-accent font-medium">{skill.cooldown}s</span>
                        </div>
                      )}
                      {skill.damage !== undefined && skill.damage > 0 && (
                        <div className="flex items-center gap-1">
                          <Sword className="h-3 w-3 text-destructive" />
                          <span className="text-muted-foreground">DMG:</span>
                          <span className="text-destructive font-medium">{skill.damage}</span>
                        </div>
                      )}
                      {skill.level !== undefined && (
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          <span className="text-muted-foreground">Lv:</span>
                          <span className="text-yellow-400 font-medium">{skill.level}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {skills.length > 0 && (
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Displaying {skills.length} skill{skills.length !== 1 ? "s" : ""} from the SAO database
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Added navigation link to about page */}
          <div className="mb-4">
            <a
              href="/about"
              className="text-accent hover:text-accent/80 transition-colors duration-200 text-sm md:text-base underline"
            >
              Learn About Sword Art Online
            </a>
          </div>
          <p className="text-muted-foreground text-sm md:text-base">
            © 2025 Sword Art Online Database.
          </p>
          <p className="text-muted-foreground text-xs mt-2">"The virtual world is just as real as the physical one."</p>
        </div>
      </footer>
    </div>
  )
}
