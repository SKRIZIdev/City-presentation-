"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Castle, Crown, Waves, Anchor } from "lucide-react"

const emblemElements = [
  {
    title: "Серебряная крепость",
    description: "Ключевой элемент герба — крепость с тремя башнями и аркой ворот. Это прямо отсылает к названию: «кала» переводится с кумыкского как «крепость»",
    icon: Castle,
  },
  {
    title: "Вензель Петра I",
    description: "В арке ворот изображён вензель Петра I, напоминающий о роли императора в истории города и его Персидском походе 1722 года",
    icon: Crown,
  },
  {
    title: "Морские волны",
    description: "Волны в основании герба символизируют приморское расположение города на берегу Каспийского моря",
    icon: Waves,
  },
  {
    title: "Морские ворота",
    description: "Махачкала — единственный незамерзающий порт России на Каспии, что делает город важнейшим транспортным узлом региона",
    icon: Anchor,
  },
]

export function EmblemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="emblem"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-blue/10 to-background" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/15 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light mb-4 block">
            Главный символ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Герб Махачкалы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ключевой элемент герба — серебряная крепость с тремя башнями, символизирующая само название города
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Emblem visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 via-emerald/10 to-deep-blue/20 blur-3xl animate-pulse-glow" />
            
            {/* Main emblem container */}
            <motion.div
              className="relative w-full h-full rounded-full glass glow-gold flex items-center justify-center"
              style={{ animationPlayState: "paused" }}
            >
              {/* Inner circle */}
              <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-deep-blue via-background to-graphite border border-gold/30 flex items-center justify-center relative overflow-hidden">
                {/* Emblem design - Fortress with waves */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-3/4 h-3/4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Fortress base */}
                    <rect x="50" y="80" width="100" height="60" fill="url(#silverGradient)" opacity="0.9" />
                    
                    {/* Left tower */}
                    <rect x="45" y="60" width="25" height="80" fill="url(#silverGradient)" />
                    <polygon points="45,60 57.5,45 70,60" fill="url(#silverGradient)" />
                    
                    {/* Center tower (taller) */}
                    <rect x="87" y="50" width="26" height="90" fill="url(#silverGradient)" />
                    <polygon points="87,50 100,30 113,50" fill="url(#silverGradient)" />
                    
                    {/* Right tower */}
                    <rect x="130" y="60" width="25" height="80" fill="url(#silverGradient)" />
                    <polygon points="130,60 142.5,45 155,60" fill="url(#silverGradient)" />
                    
                    {/* Gate arch */}
                    <path d="M 85 140 L 85 110 Q 100 95 115 110 L 115 140" fill="#1a1a24" />
                    
                    {/* Peter I monogram (simplified P) */}
                    <text x="100" y="130" textAnchor="middle" fill="url(#goldGradient)" fontSize="20" fontWeight="bold" fontFamily="serif">P</text>
                    
                    {/* Sea waves */}
                    <path
                      d="M20 165 Q40 155 60 165 Q80 175 100 165 Q120 155 140 165 Q160 175 180 165"
                      stroke="url(#emeraldGradient)"
                      strokeWidth="3"
                      fill="none"
                    />
                    <path
                      d="M25 175 Q45 165 65 175 Q85 185 105 175 Q125 165 145 175 Q165 185 175 175"
                      stroke="url(#emeraldGradient)"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.6"
                    />
                    
                    {/* Gradients */}
                    <defs>
                      <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C0C0C0" />
                        <stop offset="50%" stopColor="#E8E8E8" />
                        <stop offset="100%" stopColor="#A0A0A0" />
                      </linearGradient>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#B8860B" />
                      </linearGradient>
                      <linearGradient id="emeraldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#50C878" />
                        <stop offset="100%" stopColor="#2E8B57" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Glowing particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-gold rounded-full"
                    style={{
                      left: `${30 + Math.random() * 40}%`,
                      top: `${30 + Math.random() * 40}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Orbiting elements */}
            {[0, 90, 180, 270].map((angle, i) => (
              <motion.div
                key={angle}
                className="absolute w-3 h-3 rounded-full bg-gold/50"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${angle}deg) translateX(180px) translateY(-50%)`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>

          {/* Element descriptions */}
          <div className="space-y-6">
            {emblemElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                className="glass rounded-xl p-6 group hover:border-gold/30 transition-all duration-500 cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <element.icon size={24} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {element.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {element.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Semender reference */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 glass rounded-2xl p-8 max-w-3xl mx-auto text-center"
        >
          <h4 className="text-lg font-semibold text-gold mb-3">Связь с древним Семендером</h4>
          <p className="text-muted-foreground leading-relaxed">
            По одной из легенд, на месте современного города в VII веке находился{" "}
            <span className="text-foreground font-medium">Семендер</span> — одна из столиц Хазарского каганата. 
            Именно поэтому элемент герба отсылает к «древнему Семендеру».
          </p>
        </motion.div>

        {/* National ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex justify-center gap-2"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 rounded-full"
              animate={{ scaleX: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
