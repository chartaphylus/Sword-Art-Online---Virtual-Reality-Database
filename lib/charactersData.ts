export type Character = {
  name: string
  title: string
  description: string
  image: string
  arc: string
}

export const characters: Character[] = [
  // === SAO Season 1: Aincrad Arc ===
  {
    name: "Kirito",
    title: "The Black Swordsman",
    description: "Protagonist of SAO, known for his dual-wielding ability and unmatched sword skills.",
    image: "https://i.pinimg.com/1200x/5d/55/3c/5d553cd8911378163e989839dff229f3.jpg",
    arc: "Aincrad"
  },
  {
    name: "Asuna",
    title: "The Lightning Flash",
    description: "Vice-commander of the Knights of the Blood Oath and Kirito's partner.",
    image: "https://i.pinimg.com/1200x/2e/a6/f0/2ea6f048d20c170a150f2030dcb4a5e5.jpg",
    arc: "Aincrad"
  },
  {
    name: "Klein",
    title: "Samurai Gamer",
    description: "One of the first friends Kirito made in SAO, loyal and supportive.",
    image: "https://i.pinimg.com/736x/62/ef/86/62ef861d8c473d51391b5cf5aca57240.jpg",
    arc: "Aincrad"
  },
  {
    name: "Agil",
    title: "Merchant Warrior",
    description: "A strong player who runs a shop in SAO and helps Kirito’s party.",
    image: "https://i.pinimg.com/736x/90/d9/d0/90d9d0a177a19554622f8aa97abca51d.jpg",
    arc: "Aincrad"
  },
  {
    name: "Yui",
    title: "Navigation Pixie",
    description: "An AI program who becomes Kirito and Asuna’s adopted daughter.",
    image: "https://i.pinimg.com/736x/9b/ed/0f/9bed0f6f6851b8c00a2b4bf0c46f9eb2.jpg",
    arc: "Aincrad"
  },

  // === Fairy Dance (ALO) ===
  {
    name: "Leafa",
    title: "Sylph Swordswoman",
    description: "Kirito's sister in real life, known as Suguha. A skilled ALO player.",
    image: "https://i.pinimg.com/1200x/73/59/53/7359533c6712cd79142b2ffa49b5ea07.jpg",
    arc: "Fairy Dance"
  },
  {
    name: "Oberon / Sugou Nobuyuki",
    title: "Fairy King",
    description: "The main antagonist of the Fairy Dance arc, obsessed with Asuna.",
    image: "https://i.pinimg.com/1200x/77/db/52/77db521a009d53f18adf326b2cf6b030.jpg",
    arc: "Fairy Dance"
  },

  // === Phantom Bullet (GGO) ===
  {
    name: "Sinon",
    title: "Hecate Sniper",
    description: "A skilled sniper in Gun Gale Online, later becoming one of Kirito's closest allies.",
    image: "https://i.pinimg.com/1200x/0f/ce/bb/0fcebb4dd84e70d87a30959e8a39bf36.jpg",
    arc: "Phantom Bullet"
  },
  {
    name: "Death Gun",
    title: "The Killer in GGO",
    description: "Mysterious killer who links deaths in GGO with the real world.",
    image: "https://i.pinimg.com/736x/32/54/3b/32543b07823d262e2cf27f9a1708c4e1.jpg",
    arc: "Phantom Bullet"
  },

  // === Mother’s Rosario ===
  {
    name: "Yuuki",
    title: "Zekken",
    description: "Known as the Absolute Sword, Yuuki was the strongest swordswoman in ALO.",
    image: "https://i.pinimg.com/1200x/a7/63/8f/a7638f73cce4d3636ce7747c5c3ec140.jpg",
    arc: "Mother’s Rosario"
  },

  // === Alicization ===
  {
    name: "Eugeo",
    title: "Blue Rose Swordsman",
    description: "Kirito’s best friend in Underworld, wielder of the Blue Rose Sword.",
    image: "https://i.pinimg.com/736x/5b/a4/4b/5ba44bb6aec7a1aeda4233ffa50e1807.jpg",
    arc: "Alicization"
  },
  {
    name: "Alice Zuberg",
    title: "Integrity Knight",
    description: "Once a childhood friend of Kirito and Eugeo, later becomes an Integrity Knight.",
    image: "https://i.pinimg.com/1200x/ed/e0/3a/ede03a9b0f520c75890f7b60c1185f2b.jpg",
    arc: "Alicization"
  },
  {
    name: "Administrator / Quinella",
    title: "Highest Minister",
    description: "The main antagonist of the first half of Alicization, ruler of the Underworld.",
    image: "https://i.pinimg.com/736x/58/68/f3/5868f3fc75ff713c79b57c015ac6fe4b.jpg",
    arc: "Alicization"
  },

  // === War of Underworld ===
  {
    name: "Gabriel Miller",
    title: "Subtilizer",
    description: "The main antagonist of War of Underworld, an American mercenary.",
    image: "https://i.pinimg.com/1200x/6f/69/91/6f6991aa3c1e1ef77a946076e9e07775.jpg",
    arc: "War of Underworld"
  },

  // === Movies ===
  {
    name: "Eiji",
    title: "Nautilus",
    description: "Former member of YUNA’s team and antagonist of Ordinal Scale movie.",
    image: "https://i.pinimg.com/736x/63/5b/88/635b88a6b93c980784cf4c58b78aabc5.jpg",
    arc: "Ordinal Scale"
  },
  {
    name: "Yuna",
    title: "AR Idol",
    description: "An AR Idol in Ordinal Scale, beloved by fans, tied to Eiji’s story.",
    image: "https://i.pinimg.com/1200x/68/27/88/6827882a885a00f33cc5d074f2ab814b.jpg",
    arc: "Ordinal Scale"
  },
  {
    name: "Llenn",
    title: "Pink Devil",
    description: "Main protagonist of Gun Gale Online Alternative, skilled with P-90.",
    image: "https://i.pinimg.com/1200x/d7/ca/cf/d7cacf515227add46bc21e98f10e5103.jpg",
    arc: "Alternative GGO"
  },

    // === Progressive Movies ===
  {
    name: "Mito (Misumi Tozawa)",
    title: "Scythe Wielder",
    description: "Asuna’s best friend in real life and her first companion in SAO. Skilled with a scythe weapon.",
    image: "https://i.pinimg.com/736x/10/eb/94/10eb941d711e653f89b0e7e2bb28635c.jpg",
    arc: "Progressive"
  },
  {
    name: "Argo",
    title: "The Rat",
    description: "An information broker in SAO, known for her whisker-like face markings. Key support character in Progressive.",
    image: "https://i.pinimg.com/1200x/07/29/89/072989b0fefca67510fb4df7a356438a.jpg",
    arc: "Progressive"
  }

]
