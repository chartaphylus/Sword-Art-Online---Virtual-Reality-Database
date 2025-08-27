"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Sword, Users, Calendar, Star, Play, Book, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutSAO() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="outline" size="sm" className="cyber-border bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Skills
            </Button>
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-accent neon-glow">About SAO</h1>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-glow text-accent">SWORD ART ONLINE</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The Revolutionary Virtual Reality MMORPG That Changed Everything
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Overview */}
          <Card className="cyber-border bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <Book className="h-6 w-6" />
                What is Sword Art Online?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sword Art Online (SAO) is a Japanese light novel series written by Reki Kawahara and illustrated by abec. The series takes place in the year 2022, when a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online is released.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Players control their avatars with their minds using a piece of technology called the NerveGear. However, they soon discover they cannot log out, as the game's creator has trapped them until they reach the 100th floor of the game's tower and defeat the final boss. If they die in the game, they die in real life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                SAO explores not only action and battles but also human relationships in a virtual world. It highlights themes of trauma, love, friendship, and courage in a digital scale. Additionally, SAO has many side stories, spin-offs, and extra light novels like "Calibur Arc", "Progressive Series", and "Girls' Ops".
              </p>
            </CardContent>
          </Card>

          {/* Story Arcs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Aincrad Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Sword className="h-5 w-5" />
                  Aincrad Arc
                </CardTitle>
                <CardDescription>The Original Death Game</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images.alphacoders.com/752/thumb-1920-752083.png" alt="Aincrad Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  10,000 players terperangkap dalam VRMMORPG Sword Art Online. Mereka harus menaklukkan 100 lantai Aincrad untuk bebas, tetapi kematian dalam game berarti kematian nyata.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Death Game</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">100 Floors</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">VRMMO</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Fairy Dance Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Fairy Dance Arc
                </CardTitle>
                <CardDescription>ALfheim Online</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://p325k7wa.twic.pics/high/sword-art-online/sao-lost-song/00-page-setup/sao-ls_game-thumbnail.jpg?twic=v1/resize=760/step=10/quality=80" alt="Fairy Dance Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Setelah SAO, Kirito memasuki ALfheim Online untuk menyelamatkan Asuna yang masih terperangkap. Arc ini memperkenalkan mekanik terbang dan berbagai ras peri.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Flight</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Fairy Races</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Rescue Mission</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Phantom Bullet Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Phantom Bullet Arc
                </CardTitle>
                <CardDescription>Gun Gale Online</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://artfiles.alphacoders.com/810/81037.jpg" alt="Phantom Bullet Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kirito menyelidiki kasus pembunuhan di dunia virtual Gun Gale Online. Arc ini memperkenalkan Senjata Api, sniper, dan duel intens melawan pemain misterius Death Gun.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Gun Gale Online</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Death Gun</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Sniper Battles</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Mother's Rosario Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Mother's Rosario Arc
                </CardTitle>
                <CardDescription>Emotional Side Story</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images4.alphacoders.com/791/thumb-440-791846.webp" alt="Mother's Rosario Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fokus pada Asuna dan hubungannya dengan pemain muda Yuuki. Arc ini mengangkat tema persahabatan, keberanian, dan kehilangan.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30">Asuna</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Yuuki</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Emotional Story</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Alicization Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Alicization Arc
                </CardTitle>
                <CardDescription>Underworld VR</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images4.alphacoders.com/132/thumbbig-1329195.webp" alt="Alicization Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Kirito terjebak di dunia virtual baru bernama Underworld. Arc ini memperkenalkan AI canggih, kerajaan baru, dan pertempuran epik untuk keselamatan umat manusia.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Underworld</Badge>
                  <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">AI</Badge>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Epic Battles</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Unital Ring Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Unital Ring Arc
                </CardTitle>
                <CardDescription>War Of Underworld</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://i.pinimg.com/1200x/fe/8f/98/fe8f9857ce75f8c829692f0953305a72.jpg" alt="Unital Ring Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Berlatar setelah Alicization, Kirito dan teman-temannya menghadapi ancaman global baru. Arc ini menyatukan karakter dari semua dunia SAO dan menyajikan pertempuran final yang epik.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Global Threat</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Post-Alicization</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Crossworld Battle</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Progressive Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Movie: Progressive Arc
                </CardTitle>
                <CardDescription>Exploring Aincrad Again</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images6.alphacoders.com/131/thumb-1920-1319783.jpeg" alt="Unital Ring Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Berlatar sebagai adaptasi ringan dari Light Novel Progressive, Kirito dan Asuna kembali menelusuri lantai demi lantai Aincrad dengan perspektif yang lebih mendetail. Arc ini menyoroti awal perjalanan mereka, misteri lantai-lantai baru, dan hubungan yang semakin erat antara Kirito dan Asuna.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Progressive</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Post-Aincrad</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Floor-by-Floor Adventure</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Ordinal Scale Arc */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Movie: Ordinal Scale Arc
                </CardTitle>
                <CardDescription>Augmented Reality Challenge</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images4.alphacoders.com/800/thumbbig-800256.webp" alt="Unital Ring Arc" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Berlatar setelah Fairy Dance Arc, Kirito dan teman-temannya menghadapi ancaman global baru. Arc Setelah SAO berakhir, dunia nyata menghadapi fenomena baru melalui game AR Ordinal Scale. Kirito dan teman-temannya harus menghadapi ancaman digital baru yang memanfaatkan data memori pemain, menguji kemampuan mereka di dunia nyata sekaligus virtual.ini menyatukan karakter dari semua dunia SAO dan menyajikan pertempuran final yang epik.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Ordinal Scale</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Post-Alicization</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">AR Battle</Badge>
                </div>
              </CardContent>
            </Card>

            {/* GUN Gale Online */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Gun Gale Online Alternative
                </CardTitle>
                <CardDescription>Squad Jam Survival</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images2.alphacoders.com/137/thumb-440-1379402.webp" alt="Gun Gale Online" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Berlatar di dunia Gun Gale Online, kisah ini mengikuti Karen Kohiruimaki (LLENN), seorang gadis pemalu di dunia nyata namun menjadi pemain lincah nan mematikan di dunia game. LLENN bersama partnernya, Pitohui, terlibat dalam turnamen Squad Jam yang penuh strategi, pertarungan tim, dan konflik psikologis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Alternative GGO</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">LLENN</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">Squad Jam</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Extra Edition */}
            <Card className="cyber-border bg-card/80 backdrop-blur-sm hover-elevate">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Movie: Extra Edition
                </CardTitle>
                <CardDescription>Recap & Underwater Adventure</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://images.mubicdn.net/images/film/148070/cache-168059-1472462015/image-w1280.jpg" alt="Extra Edition" className="w-full h-70 object-cover rounded-lg mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Movie ini berfungsi sebagai rekap cerita SAO dan Fairy Dance, sekaligus menambahkan cerita baru ketika Kirito dan kawan-kawan melakukan misi menyelam di dunia ALfheim Online. Cerita ini juga menyoroti perkembangan hubungan antar karakter setelah keluar dari Aincrad.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Ordinal Scale</Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Post-Alicization</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">AR Battle</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Additional Information */}
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Main Characters */}
          <Card className="cyber-border bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <Users className="h-6 w-6" />
                Main Characters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Sword className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">Kirito</h3>
                    <p className="text-sm text-muted-foreground">The Black Swordsman</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      A solo player known for his incredible sword skills and determination to protect others.
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">Asuna</h3>
                    <p className="text-sm text-muted-foreground">The Lightning Flash</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Vice-commander of the Knights of the Blood Oath and Kirito's partner.
                    </p>
                  </div>
                </div>

                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-accent">Yui</h3>
                    <p className="text-sm text-muted-foreground">Mental Health Counseling Program</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      An AI program who becomes like a daughter to Kirito and Asuna.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Series Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="cyber-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Series Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Author:</span>
                  <span className="text-accent">Reki Kawahara</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Illustrator:</span>
                  <span className="text-accent">abec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">First Published:</span>
                  <span className="text-accent">April 2009</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Anime Debut:</span>
                  <span className="text-accent">July 2012</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Studio:</span>
                  <span className="text-accent">A-1 Pictures</span>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-accent flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Media Adaptations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 w-full justify-center py-2">
                    Light Novel Series
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 w-full justify-center py-2">
                    Anime Series (4 Seasons)
                  </Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 w-full justify-center py-2">
                    Manga Adaptations
                  </Badge>
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 w-full justify-center py-2">
                    Video Games
                  </Badge>
                  <Badge className="bg-red-500/20 text-red-400 border-red-500/30 w-full justify-center py-2">
                    Movie Series
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Themes */}
          <Card className="cyber-border bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Core Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Virtual vs Reality</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    SAO explores the blurring lines between virtual and real experiences, questioning what makes
                    relationships and emotions authentic in digital spaces.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Technology & Humanity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The series examines how advanced technology can both enhance and threaten human connection, freedom,
                    and identity.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Love & Partnership</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Central to the story is the relationship between Kirito and Asuna, showing how love can transcend
                    virtual boundaries.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-accent">Survival & Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Characters must adapt, grow stronger, and overcome seemingly impossible challenges to survive and
                    protect those they care about.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Link href="/">
            <Button variant="outline" className="cyber-border mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Skills Database
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm">
            © 2025 Sword Art Online Database.
          </p>
          <p className="text-muted-foreground text-xs mt-2">"This world may be virtual, but the feelings are real."</p>
        </div>
      </footer>
    </div>
  )
}
