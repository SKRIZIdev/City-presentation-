"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Users, TrendingUp, Globe, Heart } from "lucide-react"

const populationStats = [
  { label: "Население города", value: 620000, suffix: "+", icon: Users },
  { label: "Рост за 10 лет", value: 15, suffix: "%", icon: TrendingUp },
  { label: "Народностей", value: 30, suffix: "+", icon: Globe },
  { label: "Средний возраст", value: 32, suffix: " лет", icon: Heart },
]

const nationalities = [
  { name: "Аварцы", percent: 28, color: "bg-gold" },
  { name: "Даргинцы", percent: 16, color: "bg-emerald" },
  { name: "Кумыки", percent: 14, color: "bg-blue-500" },
  { name: "Лезгины", percent: 13, color: "bg-purple-500" },
  { name: "Лакцы", percent: 5, color: "bg-orange-500" },
  { name: "Русские", percent: 4, color: "bg-red-400" },
  { name: "Другие", percent: 20, color: "bg-gray-500" },
]

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number
  suffix?: string
}) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.round(v)),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export function PopulationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="population"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-graphite/10 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light mb-4 block">
            Демография
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Население
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Многонациональный город, где мирно сосуществуют десятки народов
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {populationStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-gold/30 transition-all duration-500"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <stat.icon size={28} className="text-gold" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Nationalities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Chart */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Globe size={24} className="text-gold" />
              Национальный состав
            </h3>

            {/* Circular chart */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {nationalities.reduce(
                  (acc, nat, index) => {
                    const startAngle = acc.offset
                    const endAngle = startAngle + (nat.percent / 100) * 360
                    const largeArc = nat.percent > 50 ? 1 : 0

                    const startX =
                      50 + 40 * Math.cos((startAngle * Math.PI) / 180)
                    const startY =
                      50 + 40 * Math.sin((startAngle * Math.PI) / 180)
                    const endX = 50 + 40 * Math.cos((endAngle * Math.PI) / 180)
                    const endY = 50 + 40 * Math.sin((endAngle * Math.PI) / 180)

                    acc.paths.push(
                      <motion.path
                        key={nat.name}
                        d={`M 50 50 L ${startX} ${startY} A 40 40 0 ${largeArc} 1 ${endX} ${endY} Z`}
                        className={nat.color.replace("bg-", "fill-")}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        style={{ transformOrigin: "50% 50%" }}
                      />
                    )
                    acc.offset = endAngle
                    return acc
                  },
                  { paths: [] as JSX.Element[], offset: 0 }
                ).paths}
              </svg>

              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">
                    620K+
                  </div>
                  <div className="text-xs text-muted-foreground">человек</div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-3">
              {nationalities.map((nat, index) => (
                <motion.div
                  key={nat.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className={`w-3 h-3 rounded-full ${nat.color}`} />
                  <span className="text-sm text-muted-foreground">
                    {nat.name}
                  </span>
                  <span className="text-sm text-foreground font-medium ml-auto">
                    {nat.percent}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Многонациональное единство
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Махачкала — уникальный город, где представители более 30
                народностей живут в мире и согласии. Здесь звучат аварский,
                даргинский, кумыкский, лезгинский и многие другие языки.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Традиции гостеприимства
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Гостеприимство — священная традиция для всех народов Дагестана.
                Гость в доме — посланник Бога, говорят здесь. Эта традиция
                объединяет все народы и делает Махачкалу особенным городом.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Динамичный рост
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                За последние 10 лет население города выросло на 15%. Махачкала
                привлекает людей из горных районов Дагестана, становясь
                крупнейшим экономическим и культурным центром региона.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
