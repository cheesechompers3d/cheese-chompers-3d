"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface Game {
  name: string;
  icon: string;
  url: string;
  previewImage?: string;
  info: {
    developer: string;
    rating: string;
    votes: string;
    released: string;
    lastUpdated: string;
    technology: string;
    platform: string;
    tags: string[];
    description: string;
    controls: string;
  };
}

const games: Game[] = [
  {
    name: "Cheese Chompers 3D",
    icon: "/images/crazycattle/Cheese Chompers 3D.jpg",
    url: "https://rawcdn.githack.com/gn-math/assets/main/165/index.html",
    previewImage: "/images/crazycattle/Cheese Chompers 3D.jpg",
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
    previewImage: "/images/crazycattle/crazy-cattle-3d-m160x96.jpg",
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
    "name": "Crazy Kitty 3D",
    "icon": "/images/crazycattle/Crazy Kitty 3D.jpg",
    "url": "https://html-classic.itch.zone/html/13447164/Website/index.html",
    previewImage: "/images/crazycattle/Crazy Kitty 3D.jpg",
    info: {
      developer: "Crazy Cattle 3D Web Port",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Crazy Kitty 3D is a chaotic battle royale rage game featuring feisty kittens. Claw your way through madness, survive the fur-fueled frenzy, and be the last...",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Crazy Chicken 3D",
    "icon": "/images/crazycattle/Crazy Chicken 3D.jpg",
    "url": "https://html-classic.itch.zone/html/13448030/crazychicken%20web%20port/index.html",
    previewImage: "/images/crazycattle/Crazy Chicken 3D.jpg",
    info: {
      developer: "Crazy Chicken 3D Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Crazy Chicken 3D is a chaotic chicken-themed battle royale rage game built in Godot. Fight, survive, and flap your way to the top in this fan-made frenzy!",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    name: "Crazy Cattle 3D Plus",
    icon: "/images/crazycattle/Crazy Cattle 3D Plus.jpg",
    url: "https://crazycattle-3d.io/crazy-cattle-3d-mobile-browser-version.embed",
    previewImage: "/images/crazycattle/Crazy Cattle 3D Plus.jpg",
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
    previewImage: "/images/crazycattle/Crazy Sprunki 3D.jpg",
    info: {
      developer: "Crazy Sprunki 3D Game",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 忡024",
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
    previewImage: "/images/crazycattle/crazy-cattle-3d-deluxe.jpg",
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
    previewImage: "/images/crazycattle/Crazy Cattle 3D.jpg",
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
          "Instead of cattle, you'll control a numbered sheep and compete to knock other sheep off the map using speed, momentum, and a bit of woolly luck. The more powerful your charge, the bigger the impact—timing is everything! Whether you're dodging on desert dunes or slipping across icy Swedish fields, each match is a wild, unpredictable brawl that'll have you laughing out loud.\n" +
          "\n" +
          "With simple controls, a fun aesthetic, and three uniquely themed maps, Crazy Cattle 3D blends elements of Gang Beasts, Fall Guys, and Goat Simulator into one chaotic sheep showdown. Think you're ready to be the last woolly warrior standing? Let's dive in.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Crazy Cattle 3D+",
    "icon": "/images/crazycattle/Crazy Cattle 3D+.jpg",
    "url": "https://crazycattle-3d.io/crazy-cattle-3d-.embed",
    previewImage: "/images/crazycattle/Crazy Cattle 3D+.jpg",
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
  {
    "name": "Fall Guys",
    "icon": "/images/crazycattle/Fall Guys.jpg",
    "url": "https://crazycattle-3d.io/crazy-cattle-3d-.embed",
    previewImage: "/images/crazycattle/Fall Guys.jpg",
    info: {
      developer: "Fall Guys",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Dive into the hilarious chaos of the Fall Guys game, where colorful bean-shaped characters compete in wild, wipeout-style obstacle courses. The cartoonish physics, unpredictable outcomes, and vibrant stages make Fall Guys a must-play experience for all ages.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Crazy Sheep 3D",
    "icon": "/images/crazycattle/Crazy Sheep 3D.jpg",
    "url": "https://play.gamepix.com/crazy-sheep/embed?sid=e4515",
    previewImage: "/images/crazycattle/Crazy Sheep 3D.jpg",
    info: {
      developer: "Crazy Sheep 3D",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Crazy Sheep 3D is a fast-paced, physics-powered animal battle game where fluffy sheep go head-to-head in chaotic arenas. Packed with bouncing bodies, ragdoll action, and hilarious knockouts, this game turns the barnyard into a battlefield. Whether you're charging foes or dodging danger, every round is a wild ride.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Smash Karts",
    "icon": "/images/crazycattle/data image game smash-karts-game.jpg.png",
    "url": "https://crazycattle-3d.io/smash-karts.embed",
    previewImage: "/images/crazycattle/data image game smash-karts-game.jpg.png",
    info: {
      developer: "Crazy Sheep 3D",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Whether you're racing for fun or blasting your way to the top, Smash Karts delivers non-stop action that keeps you coming back for more! Don't hesitate, click Start Play to enjoy.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Animal Rampage 3D",
    "icon": "/images/crazycattle/data image game animal-rampage-3d.jpg.png",
    "url": "https://chillguyclicker.io/animal-rampage-3d.embed",
    previewImage: "/images/crazycattle/data image game animal-rampage-3d.jpg.png",
    info: {
      developer: "Crazy Sheep 3D",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Unleash chaos in the Animal Rampage 3D game, an action-packed simulator where you control wild beasts to destroy a vibrant 3D city. Smash cars, topple buildings, and dodge SWAT teams to dominate!",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Stumble Guys",
    "icon": "/images/crazycattle/data image game stumble-guys-game.jpg.png",
    "url": "https://crazycattle-3d.io/stumble-guys.embed",
    previewImage: "/images/crazycattle/data image game stumble-guys-game.jpg.png",
    info: {
      developer: "Stumble Guys",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Stumble Guys is an exciting multiplayer party game where up to 32 players race through chaotic obstacle courses filled with hilarious challenges. Compete to be the last one standing and claim victory in this fast-paced, fun-filled adventure!",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Party Animals",
    "icon": "/images/crazycattle/data image game party-animals.jpg.png",
    "url": "https://chillguyclicker.io/animal-rampage-3d.embed",
    previewImage: "/images/crazycattle/data image game party-animals.jpg.png",
    info: {
      developer: "Party Animals",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Party Animals is a hilarious, physics-based multiplayer brawler game where players take control of plush-like animals—puppies, kittens, ducks, dinosaurs, and more—and engage in slapstick fights across dynamic arenas. Developed by Recreate Games and powered by ragdoll physics, this party title thrives on chaos, with every punch, toss, and fall bringing laughter and unpredictable fun. It's a party game favorite for casual gaming nights and online showdowns.",
      controls: "Use a mouse to play the game.",
    },
  },
  {
    "name": "Totally Accurate Battle Simulator",
    "icon": "/images/crazycattle/data image game totally-accurate-battle-simulator.jpg.png",
    "url": "https://crazycattle-3d.io/totally-accurate-battle-simulator.embed",
    previewImage: "/images/crazycattle/data image game totally-accurate-battle-simulator.jpg.png",
    info: {
      developer: "Crazy Sheep 3D",
      rating: "8.9 (338,606 votes)",
      votes: "476",
      released: "October 2024",
      lastUpdated: "Nov 20, 2024",
      technology: "HTML5",
      platform: "Browser (desktop, mobile, tablet)",
      tags: ["Casual 1,067", "Scratch 18", "Mobile 510", "Monster 198", "2D 798", "Music 21", "Mouse 1,366"],
      description: "Totally Accurate Battle Simulator (TABS) is a wildly entertaining physics-based strategy game where you create and watch hilarious battles unfold between absurd armies. From ancient warriors to bizarre creatures, every match is a blend of tactical planning and ragdoll chaos that delivers unpredictable fun every time.",
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
  const [isGameStarted, setIsGameStarted] = useState(false)
  const adContainerRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  const selectedGame = games.find((game) => game.name === currentGame) || games[0]

  // 处理游戏选择
  const handleGameSelect = (gameName: string) => {
    onGameSelect(gameName)
    setIsGameStarted(false)
    // 滚动到预览区域
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  // 处理游戏开始
  const handleStartGame = () => {
    setIsGameStarted(true)
  }

  // 处理全屏切换
  const handleFullscreenToggle = () => {
    if (!containerRef.current) return

    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  // 监听全屏状态变化
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  // 初始化弹窗广告（只在组件首次加载时执行一次）
  useEffect(() => {
    // 检查是否已经存在相同的脚本
    const existingScript = document.querySelector('script[src="//pl26499482.profitableratecpm.com/30/eb/06/30eb06cbe69c63cc1cdb9466d5023d8b.js"]')
    if (!existingScript) {
      // 创建新的脚本元素
      const popupScript = document.createElement('script')
      popupScript.type = 'text/javascript'
      popupScript.src = '//pl26499482.profitableratecpm.com/30/eb/06/30eb06cbe69c63cc1cdb9466d5023d8b.js'
      
      // 将脚本添加到 head 标签
      document.head.appendChild(popupScript)
    }
  }, [])

  // 初始化横幅广告（每次游戏切换时执行）
  useEffect(() => {
    // 清理旧的广告内容
    if (adContainerRef.current) {
      adContainerRef.current.innerHTML = ''
    }

    // 横幅广告
    const script1 = document.createElement('script')
    script1.type = 'text/javascript'
    script1.text = `
      window.atOptions = {
        'key' : '00333dcd1291853aa8155cd887693c73',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `
    
    const script2 = document.createElement('script')
    script2.type = 'text/javascript'
    script2.src = '//www.highperformanceformat.com/00333dcd1291853aa8155cd887693c73/invoke.js'
    
    // 添加横幅广告脚本到容器
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script1)
      adContainerRef.current.appendChild(script2)
    }

    // 清理函数
    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = ''
      }
    }
  }, [currentGame])

  return (
    <section className="py-6">
      <div className="mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold tracking-wider mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Play {selectedGame.name}
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 relative">
            {/* 广告容器 */}
            <div className="w-full flex justify-center items-center mb-4">
              <div 
                ref={adContainerRef} 
                className="min-h-[90px]"
              />
            </div>
            
            {/* 游戏区域 */}
            <div ref={containerRef} className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              {!isGameStarted ? (
                // 预览图片和遮罩层
                <div
                  ref={previewRef}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${selectedGame.previewImage || "/images/crazycattle/Cheese Chompers 3D.jpg"})`
                  }}
                >
                  <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 mb-6 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-500/50">
                      <img
                        src={selectedGame.previewImage || "/images/crazycattle/Cheese Chompers 3D.jpg"}
                        alt={`${selectedGame.name} Preview`}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
                      {selectedGame.name}
                    </h3>
                   
                    <button
                      onClick={handleStartGame}
                      className="group relative inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    >
                      <span className="relative flex items-center">
                        <span className="mr-2">Play Now</span>
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* 游戏 iframe */}
                  <iframe
                    ref={iframeRef}
                    src={selectedGame.url}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  {/* 全屏按钮 */}
                  <button
                    onClick={handleFullscreenToggle}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/75 rounded-full text-white transition-colors"
                    title={isFullscreen ? "退出全屏" : "进入全屏"}
                  >
                    {isFullscreen ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20H5V16M15 20H19V16M9 4H5V8M15 4H19V8" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4M4 4H8M4 4L9 9M20 8V4M20 4H16M20 4L15 9M4 16V20M4 20H8M4 20L9 15M20 16V20M20 20H16M20 20L15 15" />
                      </svg>
                    )}
                  </button>
                </>
              )}
            </div>

            {selectedGame.info && (
              <>
                <div className="bg-gray-800 p-6 rounded-lg mb-8 mt-8">
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
                  onClick={() => handleGameSelect(game.name)}
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

