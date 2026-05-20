"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer
      ref={ref}
      className="relative py-16 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-graphite/50 via-background to-background" />

      <div className="container mx-auto relative z-10">
        {/* Simple centered content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-wide">
            МАХАЧКАЛА — ЭТО
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Жемчужина Дагестана у берегов Каспийского моря
          </p>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"
          />
          
          <p className="text-muted-foreground/60 text-sm">
          разработано командой My Little Pony 
          </p>
          <p className="text-muted-foreground/60 text-sm">
            © 2026 все права защищены. 
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
