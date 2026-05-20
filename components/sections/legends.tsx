"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Scroll, Crown, Ship } from "lucide-react"

const legends = [
  {
    icon: Crown,
    title: "Персидский поход Петра I",
    year: "1722",
    description:
      "По преданию, именно здесь, на берегу Каспия, император Пётр Великий разбил лагерь во время знаменитого Персидского похода. Легенда гласит, что царь был так очарован красотой этих мест, что повелел основать здесь крепость.",
    detail:
      "Историки до сих пор спорят о точном месте стоянки императорской армии, но местные жители уверены — это было именно здесь, на месте будущей Махачкалы.",
  },
  {
    icon: Ship,
    title: "Легенда о морских купцах",
    year: "XVIII век",
    description:
      "Древняя легенда рассказывает о караване морских купцов из Персии, которые нашли убежище в бухте во время страшного шторма. Спасённые местными рыбаками, они основали здесь торговую факторию.",
    detail:
      "С тех пор эти воды считаются благословенными, а гостеприимство стало священной традицией для жителей побережья.",
  },
  {
    icon: Scroll,
    title: "Тайна горы Тарки-Тау",
    year: "Древность",
    description:
      "Старинные предания говорят, что в недрах горы Тарки-Тау скрыты несметные сокровища древних правителей. Говорят, что пещеры горы хранят артефакты исчезнувших цивилизаций.",
    detail:
      "Местные старейшины передают из поколения в поколение карты, указывающие на входы в тайные подземелья.",
  },
]

export function LegendsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="legends"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background with map texture */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-graphite/20 to-background" />
        {/* Old map texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating particles - sand/dust effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-sand/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * -100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light mb-4 block">
            Народные предания
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Легенды и мифы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Древние истории, передающиеся из поколения в поколение
          </p>
        </motion.div>

        {/* Legends Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          {legends.map((legend, index) => (
            <motion.div
              key={legend.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col lg:flex-row gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon/Visual */}
              <motion.div
                className="flex-shrink-0 w-32 h-32 mx-auto lg:mx-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="w-full h-full rounded-full glass glow-gold flex items-center justify-center relative">
                  <legend.icon size={48} className="text-gold" />
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping opacity-30" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="flex-1 glass rounded-3xl p-8 relative overflow-hidden group"
                whileHover={{ scale: 1.01 }}
              >
                {/* Year badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-gold/60 font-mono text-sm">
                    {legend.year}
                  </span>
                </div>

                {/* Scroll decoration */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />

                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  {legend.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  {legend.description}
                </p>

                <p className="text-muted-foreground/80 leading-relaxed italic border-l-2 border-gold/30 pl-4">
                  {legend.detail}
                </p>

                {/* Ancient scroll effect corners */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-gold/10 rounded-bl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-gold/10 rounded-tr-3xl" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mystical footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground/60 text-sm italic">
            "Легенды — это память народа, облечённая в форму сказания..."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
