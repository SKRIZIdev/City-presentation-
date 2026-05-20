"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Sparkles, Star, Zap, Trophy, Globe, Music, Flame, Castle, MapPin } from "lucide-react"

const facts = [
  {
    icon: Flame,
    title: "Город-феникс",
    front: "Возрождение из руин",
    back: "В 1970 году Махачкалу почти полностью разрушило мощнейшее землетрясение. Но город отстроили заново силами всей страны.",
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    icon: Castle,
    title: "Столица древней Хазарии",
    front: "Древний Семендер",
    back: "На месте современного города или рядом с ним, по одной из легенд, в VII веке находился Семендер — одна из столиц Хазарского каганата.",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Star,
    title: "Город с тремя именами",
    front: "Три эпохи — три названия",
    back: "За свою историю город успел побывать Петровском, Шамиль-Калой (в годы Гражданской войны) и, наконец, Махачкалой.",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: MapPin,
    title: "Крупнейший на Кавказе",
    front: "Столица региона",
    back: "Махачкала является самым крупным городом Северного Кавказа — экономический, культурный и транспортный центр всего региона.",
    color: "from-emerald/20 to-emerald/5",
  },
  {
    icon: Trophy,
    title: "Столица борьбы",
    front: "Мировой центр единоборств",
    back: "Дагестан подарил миру больше чемпионов по борьбе, чем любой другой регион планеты. Махачкала — сердце этой традиции.",
    color: "from-red-500/20 to-red-500/5",
  },
  {
    icon: Music,
    title: "Город языков",
    front: "Лингвистический рекорд",
    back: "В Махачкале говорят более чем на 30 языках — это один из самых многоязычных городов мира.",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Globe,
    title: "Самая низкая столица",
    front: "Уникальное расположение",
    back: "Махачкала расположена на 26 метров ниже уровня мирового океана — это самая низко расположенная столица субъекта РФ.",
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    icon: Zap,
    title: "Город солнца",
    front: "Климатический феномен",
    back: "В Махачкале более 300 солнечных дней в году — больше, чем в большинстве европейских курортов.",
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    icon: Sparkles,
    title: "Гостеприимство",
    front: "Священная традиция",
    back: "В Дагестане гость считается посланником Бога. Традиция гостеприимства передаётся из поколения в поколение уже тысячи лет.",
    color: "from-pink-500/20 to-pink-500/5",
  },
]

function FlipCard({
  fact,
  index,
  isInView,
}: {
  fact: (typeof facts)[0]
  index: number
  isInView: boolean
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000 h-64 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center backface-hidden bg-gradient-to-br ${fact.color}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-16 h-16 rounded-full bg-background/50 flex items-center justify-center mb-4">
            <fact.icon size={32} className="text-gold" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            {fact.title}
          </h3>
          <p className="text-muted-foreground text-sm">{fact.front}</p>
          <div className="absolute bottom-4 flex gap-1">
            <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Нажмите для подробностей
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-gold/10 to-background"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-foreground leading-relaxed">{fact.back}</p>
          <div className="absolute top-4 right-4">
            <Sparkles size={16} className="text-gold" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function FactsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="facts"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-blue/10 to-background" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles size={12} className="text-gold/30" />
          </motion.div>
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
            Удивительное рядом
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Интересные факты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Откройте для себя удивительные особенности Махачкалы
          </p>
        </motion.div>

        {/* Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <FlipCard
              key={fact.title}
              fact={fact}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* WOW finale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-emerald/10 to-gold/10 animate-gradient" />
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-20 h-20 mx-auto mb-6"
              >
                <Sparkles size={80} className="text-gold" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Откройте Махачкалу
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Город тысячи историй ждёт вас. Приезжайте и убедитесь сами в
                красоте и гостеприимстве столицы Дагестана.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
