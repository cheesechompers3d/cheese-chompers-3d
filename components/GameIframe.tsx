"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import {document} from "postcss";

const games = [
  {
    name: "Cheese Chompers 3D",
    icon: "/images/crazycattle/Cheese Chompers 3D.jpg",
    url: "https://html-classic.itch.zone/html/13490171/CheeseChompers3DWeb/index.html",
    info: {
      developer: "Cheese Chompers 3D",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Cheese Chompers 3D is a browser-based, animal-themed knockout game where you control a goofy rat in an intense free-for-all arena. Originally modded from Crazy Cattle 3D, this version replaces the sheep with comical rats, introduces an entirely new interface and sound design, and delivers a cheese-fueled challenge like no other. Built in Unity, it offers fast-paced gameplay with fun twists, like speed-boosting flips and unpredictable collisions.\n" +
          "\n" +
          "Though the game currently only includes one map and does not display the number of opponents, the chaotic fun is real and the energy never dips. It's a wild ride built for fans of funny animal physics and instant web play..",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Crazy Cattle 3D (Mobile Browser Version)",
    icon: "/images/crazycattle/crazy-cattle-3d-m160x96.jpg",
    url: "https://smash-karts.org/crazy-cattle-3d.embed",
    info: {
      developer: "Crazy Cattle 3D (Mobile Browser Version)",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Crazy Cattle 3D Mobile brings woolly chaos straight to your pocket! Based on the hilarious, physics-based battle royale Crazy Cattle 3D, this mobile version delivers the same absurd fun with smooth, touch-optimized controls. Join the chaos on Android, iOS, or web browser",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Crazy Cattle 3D Plus",
    icon: "/images/crazycattle/Crazy Cattle 3D Plus.jpg",
    url: "https://crazycattle-3d.io/crazy-cattle-3d-mobile-browser-version.embed",
    info: {
      developer: "Crazy Cattle 3D Plus Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Crazy Cattle 3D Plus is a chaotic browser-based ragdoll battle game where players control headbutting sheep in a physics-fueled arena. This fan-made mod brings new energy to the original with a snowy Poland map and a fresh music track that sets the tone for even more slapstick collisions.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Crazy Sprunki 3D",
    icon: "/images/crazycattle/Crazy Sprunki 3D.jpg",
    url: "https://crazycattle-3d.io/crazy-sprunki-3d.embed",
    info: {
      developer: "Crazy Sprunki 3D Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Crazy Sprunki 3D is an energetic 3D obstacle platformer that pushes your reflexes to their limits in a wacky, hyper-colorful world. This free-to-play chaos-fest is all about dodging traps, jumping gaps, and laughing your way through the mayhem.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Crazy Cattle 3D Deluxe",
    icon: "/images/crazycattle/crazy-cattle-3d-deluxe.jpg",
    url: "https://crazycattle-3d.io/crazy-cattle-3d-deluxe.embed",
    info: {
      developer: "Crazy Cattle 3D Deluxe",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Get ready for the next level of chaos with Crazy Cattle 3D Deluxe! Building on the viral success of the original, Crazy Cattle 3D Deluxe brings even more adrenaline-pumping action, hilarious physics, and epic sheep brawls that will have you hooked from the first slam.",
      controls: "Use a mouse to play the game.",
    },

  },
  {
    "name": "Crazy Cattle 3D",
    "icon": "/images/crazycattle/Crazy Cattle 3D.jpg",
    "url": "https://crazycattle-3d.io/crazy-cattle-3d.embed",
    info: {
      developer: "Crazy Cattle 3D",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Crazy Cattle 3D is not your average battle royale—this viral indie hit swaps out guns and grenades for sheep with attitude and physics-powered chaos! Released on April 12, 2025, by indie developer Anna (@4nn4t4t), this quirky gem has taken over TikTok and X (formerly Twitter) with meme-worthy clips and hilarious gameplay moments.\n" +
          "\n" +
          "Instead of cattle, you'll control a numbered sheep and compete to knock other sheep off the map using speed, momentum, and a bit of woolly luck. The more powerful your charge, the bigger the impact—timing is everything! Whether you're dodging on desert dunes or slipping across icy Swedish fields, each match is a wild, unpredictable brawl that’ll have you laughing out loud.\n" +
          "\n" +
          "With simple controls, a fun aesthetic, and three uniquely themed maps, Crazy Cattle 3D blends elements of Gang Beasts, Fall Guys, and Goat Simulator into one chaotic sheep showdown. Think you're ready to be the last woolly warrior standing? Let's dive in.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Crazy Cattle 3D Web Port",
    "icon": "/images/crazycattle/Crazy Cattle 3D Web Port.jpg",
    "url": "https://crazycattle-3d.io/crazy-cattle-3d-web-port.embed",
    info: {
      developer: "Crazy Cattle 3D Web Port",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "The chaos is back, sharper and smoother than ever! Crazy Cattle 3D Web Port brings the iconic cow combat game to your browser with enhanced graphics and classic controls.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Crazy Cattle 3D Unlimited",
    "icon": "/images/crazycattle/Crazy Cattle 3D Unlimited.jpg",
    "url": "https://wowtbc.net/sprunkin/revamped-2/index.html",
    info: {
      developer: "Squidki Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Get ready for the wildest and most thrilling sheep battle royale experience with Crazy Cattle 3D Unlimited! This highly anticipated release takes everything fans loved about the previous installments and cranks it up a notch, offering unlimited fun, intense physics, and a fresh new twist to the genre.",
      controls: "Use a mouse to play the game.",
    },
  },

  {
    "name": "Crazy Cattle 3D+",
    "icon": "/images/crazycattle/Crazy Cattle 3D+.jpg",
    "url": "https://crazycattle-3d.io/crazy-cattle-3d-.embed",
    info: {
      developer: "Crazy Cattle 3D+",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Get ready for a barnyard battle like no other! Crazy Cattle 3D+ cranks up the chaos with upgraded visuals, hilarious cow combat, and a ticking time challenge.",
      controls: "Use a mouse to play the game.",
    },
  },
];


interface GameIframeProps {
  currentGame: string
  onGameSelect: (game: string) => void
  isDarkMode: boolean
}

export default function GameIframe({ currentGame, onGameSelect, isDarkMode }: GameIframeProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const selectedGame = games.find((game) => game.name === currentGame) || games[0]

  // 强制声明为标准的 Document 类型
  const handleFullscreen = () => {

  }

  return (
    <section className="py-6">
      <div className="mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold tracking-wider mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Play {selectedGame.name}
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="lg:w-3/4 relative">
            {/* 全屏按钮 */}
            <button
              onClick={handleFullscreen}
              className="absolute top-4 right-4 z-10 bg-gray-800 bg-opacity-75 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L4 4m0 0l5 5m-5-5v5m16-5l-5 5m5-5v5m0 11l-5-5m5 5h-5m-11 0l5-5m-5 5v-5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0 0l-5-5m-7 11h4m0 0v4m0-4l-5 5m11-5h-4m4 0v4m0-4l-5 5" />
                </svg>
              )}
            </button>

            {/* iframe */}
            <div ref={containerRef} className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              <iframe
                ref={iframeRef}
                src={selectedGame.url}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {selectedGame.info && (
              <>
                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Game Information</h3>

                <div>
                    <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{selectedGame.info.description}</p>
                  </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Cheese Chompers 3D Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Immersive Gameplay Experience
                        Dive into the captivating world of cheesechompers3d, where the adventure goes beyond simple maze navigation. Our game combines strategic thinking with fast-paced action as you guide your chomper through increasingly complex cheese labyrinths.

                        Each level in cheesechompers3d presents unique challenges that test your problem-solving abilities while entertaining you with delightful cheese-themed obstacles and rewards.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Endless Character Customization
                        cheesechompers3d features an extensive character creation system, allowing players to personalize their chomper with hundreds of unique combinations.

                        Express yourself in cheesechompers3d with distinctive looks and abilities that match your playstyle.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Vibrant Multiplayer Ecosystem
                        cheesechompers3d brings players together with competitive and cooperative multiplayer modes that foster a thriving community.

                        Connect with fellow cheese enthusiasts in cheesechompers3d through tournaments, team events, and social features.</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="text-purple-500">✓</div>
                      <p className={`text-gray-300 ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Expansive Cheese Universe
                        cheesechompers3d takes place in a vast, interconnected world with diverse biomes and environments, each themed around different cheese varieties.

                        Explore the rich lore and fascinating locations of cheesechompers3d as you uncover the secrets of this dairy-based dimension.</p>
                    </div>

                </div>
              </div>
              </>
            )}
          </div>
          <div className="lg:w-1/4">
            <div className="grid grid-cols-2 gap-2">
              {games.map((game, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center cursor-pointer hover:scale-105 transition-transform`}
                  onClick={() => onGameSelect(game.name)}
                >
                  <Image
                    src={game.icon}
                    alt={game.name}
                    width={100}
                    height={56}
                    className="rounded-lg object-cover w-full"
                  />
                  <span className={`mt-2 text-sm text-center ${isDarkMode ?  'text-white' : 'text-black'}`} style={{ maxWidth: '300px' }}>

                  {game.name}

                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

