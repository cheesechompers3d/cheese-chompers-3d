"use client"

import { useState, useEffect } from "react"
import GameIframe from "@/components/GameIframe"
import GameplayGuide from "@/components/GameplayGuide"
import GameplaySteps from "@/components/GameplaySteps"
import GameFeatures from "@/components/GameFeatures"
import FAQ from "@/components/FAQ"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  const [currentGame, setCurrentGame] = useState<string>("Cheese Chompers 3D")
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const handleGameSelect = (gameName: string) => {
    setCurrentGame(gameName)
  }

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  useEffect(() => {
    // 根据主题状态更新页面背景颜色
    if (isDarkMode) {
      document.body.classList.add('bg-gray-900')
      document.body.classList.remove('bg-white')
    } else {
      document.body.classList.add('bg-white')
      document.body.classList.remove('bg-gray-900')
    }
  }, [isDarkMode])
  return (
    <main>
      <Navbar onGameSelect={handleGameSelect} onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <GameIframe
        currentGame={currentGame}
        onGameSelect={handleGameSelect}
        isDarkMode={isDarkMode}
      />
      <GameplayGuide />
      <GameplaySteps />

      <GameFeatures />
      <FAQ />
      <Footer />
    </main>
  )
}

