"use client"

import Image from "next/image"

const games = [
    {
        "name": "Sprunki Spruted Remastered",
        "icon": "/images/new_mods/Sprunki Spruted Remastered.png",
        "url": "https://wowtbc.net/sprunkin/spruted-remastered/index.html",
        "description": "Home Squidki Spruted Remastered Squidki Spruted Remastered 583 votes Squidki Spruted Remastered M...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Skibidi Toilet Remake 4.5",
        "icon": "/images/new_mods/Sprunki Skibidi Toilet Remake 4.5.png",
        "url": "https://wowtbc.net/sprunkin/skibidi-toilet4.5/index.html",
        "description": "Home Squidki Skibidi Toilet Remake 4.5 Squidki Skibidi Toilet Remake 4.5 583 votes Squidki Skibid...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Revamped 2.0",
        "icon": "/images/new_mods/Sprunki Revamped 2.0.png",
        "url": "https://wowtbc.net/sprunkin/revamped-2/index.html",
        "description": "Home Squidki Revamped 2.0 Squidki Revamped 2.0 583 votes Squidki Revamped 2.0 Mod is a polished a...",
        "type": "New Mods"
      },
      {
        "name": "Corruptbox but Abgerny",
        "icon": "/images/new_mods/Corruptbox but Abgerny.png",
        "url": "https://wowtbc.net/sprunkin/corruptbox-abgerney/index.html",
        "description": "Home Corruptbox but Abgerny Corruptbox but Abgerny 583 votes Corruptbox but Abgerny Mod is a glit...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki EmojiCat",
        "icon": "/images/new_mods/Sprunki EmojiCat.png",
        "url": "https://wowtbc.net/sprunkin/emojicat/index.html",
        "description": "Home Squidki EmojiCat Squidki EmojiCat 583 votes Squidki EmojiCat Mod is a fun, expressive, and i...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Pyramixed but Agents",
        "icon": "/images/new_mods/Sprunki Pyramixed but Agents.png",
        "url": "https://wowtbc.net/sprunkin/pyramixed-agent/index.html",
        "description": "Home Squidki Pyramixed but Agents Squidki Pyramixed but Agents 583 votes Squidki Pyramixed But Ag...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki deluxe!!",
        "icon": "/images/new_mods/Sprunki deluxe!!.png",
        "url": "https://wowtbc.net/sprunkin/sprunki-deluxe!/index.html",
        "description": "Home Squidki deluxe!! Squidki deluxe!! 583 votes Squidki Deluxe!! Mod is a premium, feature-packe...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Fiddlebops 56",
        "icon": "/images/new_mods/Sprunki Fiddlebops 56.png",
        "url": "https://wowtbc.net/sprunkin/fiddlebops56/index.html",
        "description": "Home Squidki Fiddlebops 56 Squidki Fiddlebops 56 583 votes Squidki Fiddlebops 56 Mod is a quirky,...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Definitive Phase 9 Fan-made",
        "icon": "/images/new_mods/Sprunki Definitive Phase 9 Fan-made.png",
        "url": "https://wowtbc.net/sprunkin/definitive-phase9-fanmade/index.html",
        "description": "Home Squidki Definitive Phase 9 Fan-made Squidki Definitive Phase 9 Fan-made 583 votes Squidki De...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki ParaRoblox",
        "icon": "/images/new_mods/Sprunki ParaRoblox.png",
        "url": "https://wowtbc.net/sprunkin/pararoblox/index.html",
        "description": "Home Squidki ParaRoblox Squidki ParaRoblox 583 votes Squidki Pararoblox Mod is a fusion of Sprunk...",
        "type": "New Mods"
      },
      {
        "name": "Sprunked Plus+",
        "icon": "/images/new_mods/Sprunked Plus+.png",
        "url": "https://wowtbc.net/sprunkin/sprunked-plus/index.html",
        "description": "Home Sprunked Plus+ Sprunked Plus+ 583 votes Sprunked Plus+ Mod is a power-packed expansion of th...",
        "type": "New Mods"
      },
      {
        "name": "Sprunksters But Sprunki",
        "icon": "/images/new_mods/Sprunksters But Sprunki.png",
        "url": "https://wowtbc.net/sprunkin/sprunksters-but-sprunki/index.html",
        "description": "Home Sprunksters But Squidki Sprunksters But Squidki 583 votes With Sprunksters but Squidki Mod i...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Chaotic Good Night Time",
        "icon": "/images/new_mods/Sprunki Chaotic Good Night Time.png",
        "url": "https://wowtbc.net/sprunkin/chaotic-good-night/index.html",
        "description": "Home Squidki Chaotic Good Night Time Squidki Chaotic Good Night Time 583 votes Squidki Chaotic Go...",
        "type": "New Mods"
      },
      {
        "name": "Cool As Ice with Abgerny",
        "icon": "/images/new_mods/Cool As Ice with Abgerny.png",
        "url": "https://wowtbc.net/sprunkin/coolasice-abgerney/index.html",
        "description": "Home Cool As Ice with Abgerny Cool As Ice with Abgerny 583 votes Cool As Ice with Abgerny Mod is ...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Phase 7 Original",
        "icon": "/images/new_mods/Sprunki Phase 7 Original.png",
        "url": "https://wowtbc.net/sprunkin/phase7-original/index.html",
        "description": "Home Squidki Phase 7 Original Squidki Phase 7 Original 583 votes Squidki Phase 7 Original Mod is ...",
        "type": "New Mods"
      },
      {
        "name": "Parodybox Remake",
        "icon": "/images/new_mods/Parodybox Remake.png",
        "url": "https://wowtbc.net/sprunkin/parodybox-remake/index.html",
        "description": "Home Parodybox Remake Parodybox Remake 583 votes Parodybox Remake Mod is a revamped and enhanced ...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki but Back to School Thailand",
        "icon": "/images/new_mods/Sprunki but Back to School Thailand.png",
        "url": "https://wowtbc.net/sprunkin/thailand-school/index.html",
        "description": "Home Squidki but Back to School Thailand Squidki but Back to School Thailand 583 votes Squidki Bu...",
        "type": "New Mods"
      },
      {
        "name": "Sprunked Remake 3.0",
        "icon": "/images/new_mods/Sprunked Remake 3.0.png",
        "url": "https://wowtbc.net/sprunkin/sprunked-remake3/index.html",
        "description": "Home Sprunked Remake 3.0 Sprunked Remake 3.0 583 votes Sprunked Remake 3.0 Mod is a fully upgrade...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Pyramixed but Jet & Emily joined",
        "icon": "/images/new_mods/Sprunki Pyramixed but Jet & Emily joined.png",
        "url": "https://wowtbc.net/sprunkin/pyramixed-emily/index.html",
        "description": "Home Squidki Pyramixed but Jet & Emily joined Squidki Pyramixed but Jet & Emily joined 583 votes ...",
        "type": "New Mods"
      },
      {
        "name": "Sprunki Phase 3.5v2",
        "icon": "/images/new_mods/Sprunki Phase 3.5v2.png",
        "url": "https://wowtbc.net/sprunkin/phase3.5v2/index.html",
        "description": "Home Squidki Phase 3.5v2 Squidki Phase 3.5v2 583 votes Squidki Phase 3.5v2 Mod is an enhanced, re...",
        "type": "New Mods"
      }
]

interface GameListProps {
  onSelect: (game: string) => void
  currentGame: string
  isDarkMode: boolean
}

export default function GameList({ onSelect, currentGame, isDarkMode }: GameListProps) {
  return (
    <div className="w-full lg:w-1/4">
      <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        Popular Games
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
        {games.map((game, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onSelect(game.name)}
          >
            <Image
              src={game.icon}
              alt={game.name}
              width={120}
              height={120}
              className="rounded-lg object-cover w-full h-auto"
            />
            <span className={`mt-2 text-sm text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {game.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
} 