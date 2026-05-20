"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function SoulSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      ref={ref}
      id="soul"
      className="relative min-h-screen py-32 px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-deep-blue/40" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="w-16 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
              Альтер эго
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            style={{ y, opacity }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-12 leading-tight"
          >
            Душа
            <span className="block text-gold text-glow-gold">Махачкалы</span>
          </motion.h2>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Left Column - Quote */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="text-8xl text-gold/20 absolute -top-8 -left-4 font-serif">
                "
              </div>
              <blockquote className="glass rounded-2xl p-8 relative">
                <p className="text-xl text-foreground leading-relaxed italic">
                  Здесь каждый камень помнит историю тысячелетий, каждый ветер
                  несёт аромат моря и гор, а каждый взгляд отражает гордость и
                  гостеприимство великого народа.
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="w-10 h-px bg-gold" />
                  <span className="text-muted-foreground text-sm">
                    О духе города
                  </span>
                </footer>
              </blockquote>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Махачкала — это не просто город. Это место, где пересекаются
                миры. Древние традиции горцев встречаются с морскими ветрами
                Каспия, создавая уникальную атмосферу, которую невозможно
                ощутить больше нигде на планете.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Многонациональный город, где звучат десятки языков, где
                гостеприимство возведено в ранг священной традиции, а уважение к
                старшим — основа жизненного уклада.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-gold mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">
                    Народностей
                  </div>
                </div>
                <div className="glass rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-emerald mb-2">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Лет истории
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Atmospheric text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-24 text-center"
          >
            <p className="text-2xl sm:text-3xl text-foreground/80 font-light max-w-3xl mx-auto leading-relaxed text-balance">
              Город, где{" "}
              <span className="text-gold font-medium">горы шепчут</span> истории
              предков, а <span className="text-emerald font-medium">море</span>{" "}
              хранит тайны древних цивилизаций
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  )
}
