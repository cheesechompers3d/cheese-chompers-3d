"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

interface NavbarProps {
  onGameSelect?: (gameName: string) => void
  onToggleTheme: () => void
  isDarkMode: boolean
}

const recommendedGames = [
  {
    name: "Cheese Chompers 3D",
    url: "https://crazycattle-3d.io/cheese-chompers-3d.embed"
  },
  {
    name: "Crazy Cattle 3D",
    url: "https://crazycattle-3d.io/crazy-cattle-3d-mobile-browser-version.embed"
  },
  {
    name: "Crazy Cattle 3D Plus",
    url: "https://crazycattle-3d.io/crazy-cattle-3d-plus.embed"
  },
  {
    name: "Crazy Sprunki 3D",
    url: "https://crazycattle-3d.io/crazy-sprunki-3d.embed"
  }
]

export default function Navbar({ onGameSelect, onToggleTheme, isDarkMode }: NavbarProps) {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleGameClick = (gameName: string) => {
    if (typeof onGameSelect === "function") {
      onGameSelect(gameName)
      setIsMenuOpen(false) // 选择游戏后关闭菜单
      if (window.location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        router.push("/")
      }
    }
  }

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Cheese Chompers 3D Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-white">Cheese Chompers 3D</span>
          </Link>

          {/* 右侧导航和按钮 */}
          <div className="flex items-center space-x-6">
            {/* 导航链接 */}
            <div className="hidden md:flex items-center space-x-6">
              {recommendedGames.map((game, index) => (
                <button
                  key={index}
                  onClick={() => handleGameClick(game.name)}
                  className="text-white hover:text-purple-400 transition-colors text-sm"
                >
                  {game.name}
                </button>
              ))}
            </div>

            {/* More Cheese Chompers 3D 按钮 */}
            <Link
              href="/more-games"
              className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 text-white text-sm"
            >
              More Games
            </Link>

            {/* 主题切换按钮 */}
            <button
              onClick={onToggleTheme}
              className="bg-gray-700 p-2 rounded-lg text-white"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
            </button>
          </div>
        </div>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden fixed top-4 right-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* 移动端下拉菜单 */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 bg-gray-800 rounded-lg shadow-lg p-4 space-y-2">
            {recommendedGames.map((game, index) => (
              <button
                key={index}
                onClick={() => handleGameClick(game.name)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 rounded"
              >
                {game.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

