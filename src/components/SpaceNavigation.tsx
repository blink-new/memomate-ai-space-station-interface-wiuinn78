import { motion } from 'framer-motion'
import { 
  Home, 
  Brain, 
  Clock, 
  Bell, 
  BarChart3, 
  Users, 
  Settings,
  Zap
} from 'lucide-react'

interface SpaceNavigationProps {
  currentRoom: string
  onRoomChange: (room: string) => void
}

const SpaceNavigation = ({ currentRoom, onRoomChange }: SpaceNavigationProps) => {
  const rooms = [
    { id: 'dashboard', label: 'Command Center', icon: Home },
    { id: 'ai-chat', label: 'AI Core', icon: Brain },
    { id: 'timeline', label: 'Orbit Map', icon: Clock },
    { id: 'reminders', label: 'Satellites', icon: Bell },
    { id: 'analytics', label: 'Radar', icon: BarChart3 },
    { id: 'sharing', label: 'Crew', icon: Users },
    { id: 'settings', label: 'Power Room', icon: Settings },
  ]

  return (
    <motion.nav
      className="glass-panel m-4 rounded-2xl p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-space-red to-space-cyan flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <h1 className="text-xl font-orbitron font-bold neon-red">MemoMate</h1>
            <p className="text-xs text-white/60 exo">Space Station</p>
          </div>
        </motion.div>

        {/* Navigation Rooms */}
        <div className="hidden md:flex items-center space-x-2">
          {rooms.map((room, index) => {
            const Icon = room.icon
            const isActive = currentRoom === room.id
            
            return (
              <motion.button
                key={room.id}
                onClick={() => onRoomChange(room.id)}
                className={`
                  relative px-4 py-2 rounded-xl transition-all duration-300 group
                  ${isActive 
                    ? 'bg-gradient-to-r from-space-red/20 to-space-cyan/20 border border-space-cyan/50' 
                    : 'hover:bg-white/5 border border-transparent hover:border-white/20'
                  }
                `}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-space-red/10 to-space-cyan/10"
                    layoutId="activeRoom"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <div className="relative flex items-center space-x-2">
                  <motion.div
                    className={`
                      ${isActive ? 'neon-cyan' : 'text-white/70 group-hover:text-white'}
                    `}
                    animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  <span className={`
                    text-sm font-medium exo
                    ${isActive ? 'neon-cyan' : 'text-white/70 group-hover:text-white'}
                  `}>
                    {room.label}
                  </span>
                </div>

                {/* Scan Line Effect */}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-space-cyan to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <motion.button
            className="glass-panel p-2 rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-5 h-5 neon-cyan" />
          </motion.button>
        </div>

        {/* Status Indicators */}
        <div className="hidden lg:flex items-center space-x-4">
          <motion.div
            className="flex items-center space-x-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-xs text-white/60 exo">Systems Online</span>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-2"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-space-cyan rounded-full" />
            <span className="text-xs text-white/60 exo">AI Active</span>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden mt-4 grid grid-cols-4 gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {rooms.slice(0, 4).map((room) => {
          const Icon = room.icon
          const isActive = currentRoom === room.id
          
          return (
            <motion.button
              key={room.id}
              onClick={() => onRoomChange(room.id)}
              className={`
                p-3 rounded-xl transition-all duration-300 text-center
                ${isActive 
                  ? 'bg-gradient-to-r from-space-red/20 to-space-cyan/20 border border-space-cyan/50' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
                }
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className={`w-5 h-5 mx-auto mb-1 ${isActive ? 'neon-cyan' : 'text-white/70'}`} />
              <p className={`text-xs exo ${isActive ? 'neon-cyan' : 'text-white/70'}`}>
                {room.label}
              </p>
            </motion.button>
          )
        })}
      </motion.div>
    </motion.nav>
  )
}

export default SpaceNavigation