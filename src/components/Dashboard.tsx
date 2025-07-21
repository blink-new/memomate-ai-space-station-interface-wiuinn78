import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  Target, 
  TrendingUp, 
  Zap,
  Brain,
  Rocket
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const stats = [
    { 
      label: 'Tasks Completed', 
      value: '12', 
      icon: CheckCircle, 
      color: 'from-green-400 to-emerald-500',
      glow: 'rgba(34, 197, 94, 0.3)'
    },
    { 
      label: 'Focus Time', 
      value: '4.2h', 
      icon: Clock, 
      color: 'from-space-cyan to-blue-400',
      glow: 'rgba(0, 255, 224, 0.3)'
    },
    { 
      label: 'Events Today', 
      value: '6', 
      icon: Calendar, 
      color: 'from-space-red to-pink-400',
      glow: 'rgba(255, 0, 60, 0.3)'
    },
    { 
      label: 'Goals Progress', 
      value: '85%', 
      icon: Target, 
      color: 'from-purple-400 to-violet-500',
      glow: 'rgba(147, 51, 234, 0.3)'
    }
  ]

  const upcomingEvents = [
    { time: '10:30', title: 'Team Standup', type: 'meeting', priority: 'high' },
    { time: '14:00', title: 'Project Review', type: 'work', priority: 'medium' },
    { time: '16:30', title: 'Client Call', type: 'call', priority: 'high' },
    { time: '18:00', title: 'Gym Session', type: 'personal', priority: 'low' }
  ]

  const productivityScore = 87

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
          <span className="neon-red">Command</span>{' '}
          <span className="neon-cyan">Center</span>
        </h1>
        <p className="text-white/70 text-lg exo">
          Mission Control for Your Productivity
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              className="glass-panel p-6 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${stat.glow} 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    whileHover={{ rotate: 10 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    className="w-2 h-2 bg-space-cyan rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                <div>
                  <motion.p
                    className="text-3xl font-orbitron font-bold text-white mb-1"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-white/60 text-sm exo">{stat.label}</p>
                </div>
              </div>

              {/* Scan Line Effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-space-cyan to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          )
        })}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Productivity Ring */}
        <motion.div
          className="lg:col-span-1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass-panel p-6 rounded-2xl text-center">
            <h3 className="text-xl font-orbitron font-semibold neon-cyan mb-6">
              Productivity Core
            </h3>

            {/* Circular Progress */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="8"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 45 * (1 - productivityScore / 100) }}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff003c" />
                    <stop offset="100%" stopColor="#00ffe0" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  className="text-4xl font-orbitron font-bold neon-red mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  {productivityScore}%
                </motion.div>
                <p className="text-white/60 text-sm exo">Efficiency</p>
              </div>

              {/* Floating Orbs */}
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-space-red rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-2 h-2 bg-space-cyan rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60 exo">Focus Level</span>
                <span className="neon-cyan font-medium">High</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/60 exo">Energy</span>
                <span className="text-green-400 font-medium">Optimal</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="glass-panel p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-orbitron font-semibold neon-cyan">
                Mission Schedule
              </h3>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-5 h-5 neon-red" />
                <span className="text-sm text-white/60 exo">Today</span>
              </motion.div>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-space-cyan/30 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      ${event.priority === 'high' ? 'bg-gradient-to-r from-space-red to-pink-400' :
                        event.priority === 'medium' ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                        'bg-gradient-to-r from-space-cyan to-blue-400'}
                    `}>
                      {event.type === 'meeting' && <Brain className="w-5 h-5 text-white" />}
                      {event.type === 'work' && <Target className="w-5 h-5 text-white" />}
                      {event.type === 'call' && <Zap className="w-5 h-5 text-white" />}
                      {event.type === 'personal' && <TrendingUp className="w-5 h-5 text-white" />}
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-white font-medium exo">{event.title}</p>
                    <p className="text-white/60 text-sm">{event.time}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <motion.div
                      className={`
                        w-3 h-3 rounded-full
                        ${event.priority === 'high' ? 'bg-space-red' :
                          event.priority === 'medium' ? 'bg-yellow-400' :
                          'bg-space-cyan'}
                      `}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              className="mt-6 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex space-x-3">
                <motion.button
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-space-red/20 to-space-cyan/20 border border-space-red/30 text-white font-medium exo hover:border-space-cyan/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add Mission
                </motion.button>
                <motion.button
                  className="flex-1 py-3 px-4 rounded-xl glass-panel text-white font-medium exo hover:border-space-cyan/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View All
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard