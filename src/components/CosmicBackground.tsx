import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CosmicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Star field
    const stars: Array<{ x: number; y: number; size: number; opacity: number; twinkle: number }> = []
    
    // Generate stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02 + 0.01
      })
    }

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01
      
      // Clear canvas
      ctx.fillStyle = '#0a0a0a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star, index) => {
        const twinkleOffset = Math.sin(time * 60 + index) * star.twinkle
        const currentOpacity = Math.max(0.1, Math.min(1, star.opacity + twinkleOffset))
        
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        ctx.fill()

        // Add glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(0, 255, 224, ${currentOpacity * 0.3})`
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0">
      {/* Animated Canvas Stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Earth View */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #4ade80 0%, #22c55e 25%, #16a34a 50%, #15803d 75%, #166534 100%)',
          transform: 'translate(30%, 30%)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Cosmic Nebula */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #ff003c 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Space Dust */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(0, 255, 224, 0.2), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255, 0, 60, 0.3), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255, 255, 255, 0.2), transparent),
            radial-gradient(2px 2px at 160px 30px, rgba(0, 255, 224, 0.3), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 100px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '200px 100px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default CosmicBackground