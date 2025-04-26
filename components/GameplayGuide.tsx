"use client"

const GameplayGuide = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-[1920px] mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features of Cheese Chompers 3D</h2>

        <div className="max-w-[1600px] mx-auto space-y-10">
          {/* Introduction */}
          <div className="bg-gray-800 rounded-lg p-12">
            <p className="text-gray-300 leading-relaxed text-lg max-w-[1400px] mx-auto">
              Cheese Chompers 3D delivers fast, energetic action with a unique twist. Instead of sheep, you control wobbly 3D rats as they clash and collide across a single, chaotic map. The game’s entire interface and sound design have been remastered to match the rodent rampage theme, giving it a totally fresh feel. One of the most exciting touches is the explosion effect when you successfully knock another rat off the arena—adding satisfying impact and visual flair to every takedown. Though it's still in alpha-beta and only includes one map (with no visible player counter), the core loop is full of fast-paced fun. Mid-air flips grant a temporary speed boost during jumps, letting you close in on rivals or escape danger with finesse.
            </p>
          </div>

        </div>

        {/* Gameplay Video */}
        <div className="container mx-auto rounded-lg p-12">
          <h3 className="text-2xl font-bold mb-8">Gameplay Video</h3>
          <div className="max-w-[1400px] mx-auto h-[800px]">
            <iframe
                src="https://www.youtube.com/embed/zU0L5ueGA3o?si=weRGQxlS3u9V1u3O"
                title="Official Gameplay Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-gray-300 text-lg text-center mt-6">
            Official Gameplay Trailer
          </p>
          <div className="max-w-[1400px] mx-auto h-[800px]">
            <iframe
                src="https://www.youtube.com/embed/zU0L5ueGA3o?si=weRGQxlS3u9V1u3O"
                title="Behind The Scenes: Making of Cheese Chompers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-gray-300 text-lg text-center mt-6">
            Behind The Scenes: Making of Cheese Chompers
          </p>
        </div>
      </div>
    </section>
  )
}

export default GameplayGuide
