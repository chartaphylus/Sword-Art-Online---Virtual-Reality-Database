"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sword, Star, Play, Heart, Book } from "lucide-react"

export default function ArcList() {
  const arcs = [
    {
      name: "Aincrad Arc",
      icon: <Sword className="h-5 w-5" />,
      description: "The Original Death Game",
      image: "https://images.alphacoders.com/752/thumb-1920-752083.png",
      content: "10,000 players terperangkap dalam VRMMORPG Sword Art Online. Mereka harus menaklukkan 100 lantai Aincrad untuk bebas, tetapi kematian dalam game berarti kematian nyata.",
      badges: ["Death Game", "100 Floors", "VRMMO"],
    },
    {
      name: "Fairy Dance Arc",
      icon: <Star className="h-5 w-5" />,
      description: "ALfheim Online",
      image: "https://p325k7wa.twic.pics/high/sword-art-online/sao-lost-song/00-page-setup/sao-ls_game-thumbnail.jpg?twic=v1/resize=760/step=10/quality=80",
      content: "Kirito memasuki ALfheim Online untuk menyelamatkan Asuna yang masih terperangkap. Memperkenalkan mekanik terbang dan berbagai ras peri.",
      badges: ["Flight", "Fairy Races", "Rescue Mission"],
    },
    {
      name: "Phantom Bullet Arc",
      icon: <Play className="h-5 w-5" />,
      description: "Gun Gale Online",
      image: "https://artfiles.alphacoders.com/810/81037.jpg",
      content: "Kirito menyelidiki kasus pembunuhan di dunia virtual Gun Gale Online. Duel intens melawan Death Gun.",
      badges: ["Gun Gale Online", "Death Gun", "Sniper Battles"],
    },
    {
      name: "Mother's Rosario Arc",
      icon: <Heart className="h-5 w-5" />,
      description: "Emotional Side Story",
      image: "https://images4.alphacoders.com/791/thumb-440-791846.webp",
      content: "Fokus pada Asuna dan Yuuki, mengangkat tema persahabatan, keberanian, dan kehilangan.",
      badges: ["Asuna", "Yuuki", "Emotional Story"],
    },
    {
      name: "Alicization Arc",
      icon: <Book className="h-5 w-5" />,
      description: "Underworld VR",
      image: "https://images4.alphacoders.com/132/thumbbig-1329195.webp",
      content: "Kirito terjebak di dunia virtual baru bernama Underworld. Memperkenalkan AI canggih, kerajaan baru, dan pertempuran epik untuk keselamatan umat manusia.",
      badges: ["Underworld", "AI", "Epic Battles"],
    },
    {
      name: "Unital Ring Arc",
      icon: <Star className="h-5 w-5" />,
      description: "War Of Underworld",
      image: "https://i.pinimg.com/1200x/fe/8f/98/fe8f9857ce75f8c829692f0953305a72.jpg",
      content: "Setelah Alicization, Kirito dan teman-temannya menghadapi ancaman global baru. Menyatukan karakter dari semua dunia SAO untuk pertempuran final yang epik.",
      badges: ["Global Threat", "Post-Alicization", "Crossworld Battle"],
    },
    {
      name: "Progressive Arc",
      icon: <Star className="h-5 w-5" />,
      description: "Exploring Aincrad Again",
      image: "https://images6.alphacoders.com/131/thumb-1920-1319783.jpeg",
      content: "Adaptasi ringan dari Light Novel Progressive, Kirito dan Asuna menelusuri lantai demi lantai Aincrad dengan perspektif yang lebih mendetail.",
      badges: ["Progressive", "Post-Aincrad", "Floor-by-Floor Adventure"],
    },
    {
      name: "Ordinal Scale Arc",
      icon: <Star className="h-5 w-5" />,
      description: "Augmented Reality Challenge",
      image: "https://images4.alphacoders.com/800/thumbbig-800256.webp",
      content: "Setelah SAO, dunia nyata menghadapi fenomena baru melalui game AR Ordinal Scale. Kirito dan teman-temannya harus menghadapi ancaman digital baru yang memanfaatkan data memori pemain.",
      badges: ["Ordinal Scale", "Post-Alicization", "AR Battle"],
    },
    {
      name: "Gun Gale Online Alternative",
      icon: <Star className="h-5 w-5" />,
      description: "Squad Jam Survival",
      image: "https://images2.alphacoders.com/137/thumb-440-1379402.webp",
      content: "Kisah mengikuti Karen Kohiruimaki (LLENN), seorang gadis pemalu di dunia nyata namun menjadi pemain lincah nan mematikan di dunia game. Terlibat dalam turnamen Squad Jam yang penuh strategi dan pertarungan tim.",
      badges: ["Alternative GGO", "LLENN", "Squad Jam"],
    },
    {
      name: "Extra Edition",
      icon: <Star className="h-5 w-5" />,
      description: "Recap & Underwater Adventure",
      image: "https://images.mubicdn.net/images/film/148070/cache-168059-1472462015/image-w1280.jpg",
      content: "Movie ini berfungsi sebagai rekap cerita SAO dan Fairy Dance, sekaligus menambahkan cerita baru ketika Kirito dan kawan-kawan melakukan misi menyelam di dunia ALfheim Online.",
      badges: ["Extra Edition", "Recap", "Underwater Adventure"],
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {arcs.map((arc, idx) => (
        <Card key={idx} className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
          <CardHeader>
            <CardTitle className="text-xl text-accent flex items-center gap-2">{arc.icon} {arc.name}</CardTitle>
            <CardDescription>{arc.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={arc.image} alt={arc.name} className="w-full h-70 object-cover rounded-lg mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-4">{arc.content}</p>
            <div className="flex flex-wrap gap-2">
              {arc.badges.map((b, i) => (
                <Badge key={i} className="bg-purple-500/20 text-purple-400 border-purple-500/30">{b}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

