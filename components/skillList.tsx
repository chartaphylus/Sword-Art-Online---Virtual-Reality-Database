"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sword, Shield, Zap, Star, Users, Clock, ArrowLeft, ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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

export default function SkillList() {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const perPage = 6

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("https://saoif.zulma.id/assets/api/skills.json")
        const data = await res.json()
        setSkills(
          data.skill.map((skill: any, i: number) => ({
            id: skill.id || i + 1,
            name: skill.name || `Skill ${i + 1}`,
            description: skill.skill_effect?.[0] || "No description",
            type: skill.skill_type || "Normal",
            element: skill.element || "None",
            cooldown: Number(skill.skill_cool_time?.[0]) || 0,
            damage: 100,
            level: 1,
            category: skill.weapon || "General",
            imageUrl: skill.url_image,
          }))
        )
      } catch {
        setSkills([])
      } finally {
        setLoading(false)
      }
    }
    fetchSkills()
  }, [])

  const filtered = skills.filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
  const totalPages = Math.ceil(filtered.length / perPage)
  const displayed = filtered.slice((page - 1) * perPage, page * perPage)

  const getSkillIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case "sword": return <Sword className="h-5 w-5" />
      case "shield": return <Shield className="h-5 w-5" />
      case "magic": return <Star className="h-5 w-5" />
      case "mobility": return <Zap className="h-5 w-5" />
      case "support": return <Users className="h-5 w-5" />
      default: return <Zap className="h-5 w-5" />
    }
  }

  return (
    <div className="px-4 py-8">
      {/* Search Input */}
      <div className="mb-6 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search skill..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          className="w-full p-3 border rounded-lg shadow bg-background text-white placeholder:text-muted-foreground"
        />
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-muted-foreground text-center w-full">Loading skills...</p>
        ) : displayed.length > 0 ? (
          displayed.map((skill) => (
            <Card
              key={skill.id}
              className="bg-card/80 backdrop-blur-sm overflow-hidden hover:shadow-lg transition flex flex-col"
            >
              {skill.imageUrl && (
                <div className="w-full flex justify-center bg-background/20">
                  <Image
                    src={skill.imageUrl}
                    alt={skill.name}
                    width={400}
                    height={250}
                    className="object-contain"
                    placeholder="blur"
                    blurDataURL="/placeholder.png"
                  />
                </div>
              )}
              <CardHeader className="flex-1">
                <CardTitle className="flex items-center gap-2 text-accent">
                  {getSkillIcon(skill.type)} {skill.name}
                </CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline">{skill.type}</Badge>
                  {skill.element && <Badge>{skill.element}</Badge>}
                </div>
                <div className="flex gap-4 mt-2 text-sm flex-wrap">
                  {skill.cooldown ? (
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {skill.cooldown}s</span>
                  ) : null}
                  {skill.level ? <span>Lv {skill.level}</span> : null}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground text-center w-full">No skills found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 max-w-md mx-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Prev
          </Button>
          <span>Page {page} of {totalPages}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
