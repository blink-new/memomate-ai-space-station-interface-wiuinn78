import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CosmicBackground from './components/CosmicBackground'
import SpaceNavigation from './components/SpaceNavigation'
import Dashboard from './components/Dashboard'

function App() {
  const [currentRoom, setCurrentRoom] = useState('dashboard')

  const renderCurrentRoom = () => {
    switch (currentRoom) {
      case 'dashboard':
        return <Dashboard />
      case 'ai-chat':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-orbitron neon-cyan mb-4">AI Core Chamber</h2>
            <p className="text-white/60 exo">Coming Soon...</p>
          </div>
        )
      case 'timeline':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-orbitron neon-cyan mb-4">Star Orbit Map</h2>
            <p className="text-white/60 exo">Coming Soon...</p>
          </div>
        )
      case 'reminders':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-orbitron neon-cyan mb-4">Reminder Satellites</h2>
            <p className="text-white/60 exo">Coming Soon...</p>
          </div>
        )
      case 'analytics':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-orbitron neon-cyan mb-4">Cockpit Radar</h2>
            <p className="text-white/60 exo">Coming Soon...</p>
          </div>
        )
      case 'sharing':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-orbitron neon-cyan mb-4">Astronaut Nodes</h2>
            <p className="text-white/60 exo">Coming Soon...</p>
          </div>
        )
      case 'settings':
        return (
          <div className="text-center py-20">
            <h2 className="text-3xl font-orbitron neon-cyan mb-4">Power Room</h2>
            <p className="text-white/60 exo">Coming Soon...</p>
          </div>
        )
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-space-black text-white overflow-hidden relative">
      {/* Cosmic Background */}
      <CosmicBackground />
      
      {/* Main Interface */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Space Navigation */}
        <SpaceNavigation currentRoom={currentRoom} onRoomChange={setCurrentRoom} />
        
        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoom}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderCurrentRoom()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default App