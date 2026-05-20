"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import {
  Cloud,
  Sun,
  Thermometer,
  Droplets,
  Wind,
  Mountain,
  Waves,
  Ship,
  Factory,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react"

const climateData = [
  { month: "Янв", temp: 2, icon: Cloud },
  { month: "Фев", temp: 3, icon: Cloud },
  { month: "Мар", temp: 7, icon: Sun },
  { month: "Апр", temp: 13, icon: Sun },
  { month: "Май", temp: 18, icon: Sun },
  { month: "Июн", temp: 24, icon: Sun },
  { month: "Июл", temp: 27, icon: Sun },
  { month: "Авг", temp: 26, icon: Sun },
  { month: "Сен", temp: 21, icon: Sun },
  { month: "Окт", temp: 14, icon: Cloud },
  { month: "Ноя", temp: 8, icon: Cloud },
  { month: "Дек", temp: 4, icon: Cloud },
]

const geoStats = [
  {
    icon: Mountain,
    label: "Высота над уровнем моря",
    value: "-26 м",
    description: "Самая низкая точка в России",
  },
  {
    icon: Waves,
    label: "Береговая линия",
    value: "35 км",
    description: "Вдоль Каспийского моря",
  },
  {
    icon: Ship,
    label: "Навигация",
    value: "365 дней",
    description: "Единственный незамерзающий порт",
  },
  {
    icon: Factory,
    label: "Промышленность",
    value: "Крупный",
    description: "Машиностроение, нефте- и газодобыча",
  },
]

function ExpandableSection({ 
  title, 
  shortText, 
  longText,
  isInView 
}: { 
  title: string
  shortText: string
  longText: string
  isInView: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-500"
    >
      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gold" />
        {title}
      </h4>
      
      <p className="text-muted-foreground leading-relaxed mb-4">
        {shortText}
      </p>
      
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-muted-foreground leading-relaxed text-sm border-t border-border pt-4">
          {longText}
        </p>
      </motion.div>
      
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center gap-2 text-gold text-sm hover:text-gold/80 transition-colors"
      >
        {isExpanded ? (
          <>
            <span>Скрыть</span>
            <ChevronUp size={16} />
          </>
        ) : (
          <>
            <span>Подробнее</span>
            <ChevronDown size={16} />
          </>
        )}
      </button>
    </motion.div>
  )
}

export function GeographySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="geography"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-blue/10 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light mb-4 block">
            Природа и климат
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            География
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Город расположен на берегу Каспийского моря. С одной стороны — море, с другой — горы.
          </p>
        </motion.div>

        {/* Map visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            {/* 3D-like map visualization */}
            <div className="aspect-video relative">
              {/* Sea */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald/30 via-emerald/20 to-transparent rounded-b-2xl"
                animate={{
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Mountains */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 400"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Mountain range */}
                <path
                  d="M0 300 L100 200 L150 250 L200 150 L250 220 L300 120 L350 180 L400 100 L450 160 L500 80 L550 140 L600 110 L650 170 L700 130 L750 190 L800 150 L800 400 L0 400 Z"
                  fill="url(#mountainGradient)"
                  opacity="0.6"
                />
                <path
                  d="M0 320 L80 250 L130 280 L180 200 L230 260 L280 180 L330 230 L380 160 L430 210 L480 140 L530 190 L580 160 L630 200 L680 170 L730 220 L780 180 L800 200 L800 400 L0 400 Z"
                  fill="url(#mountainGradient2)"
                  opacity="0.8"
                />

                {/* Tarki-Tau label */}
                <text x="500" y="120" fill="#D4AF37" fontSize="14" fontWeight="bold" opacity="0.8">
                  Тарки-Тау
                </text>

                {/* City marker */}
                <circle cx="400" cy="280" r="8" fill="#D4AF37" />
                <circle
                  cx="400"
                  cy="280"
                  r="16"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    values="12;20;12"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0;0.5"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>

                <defs>
                  <linearGradient
                    id="mountainGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3a3a4a" />
                    <stop offset="100%" stopColor="#1a1a24" />
                  </linearGradient>
                  <linearGradient
                    id="mountainGradient2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#2a2a3a" />
                    <stop offset="100%" stopColor="#0a0a12" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Location label */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 glass rounded-lg px-4 py-2"
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <span className="text-gold font-medium">Махачкала</span>
                <span className="text-muted-foreground text-sm ml-2">
                  42.98°N, 47.50°E
                </span>
              </motion.div>
            </div>
            
            {/* Tarki-Tau link */}
            <div className="mt-4 text-center">
              <a 
                href="https://ru.wikipedia.org/wiki/Тарки-Тау"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors inline-flex items-center gap-1 text-sm"
              >
                Подробнее о горе Тарки-Тау
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {geoStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-gold/30 transition-all duration-500"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <stat.icon size={24} className="text-gold" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gold mb-2">{stat.label}</div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable sections */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <ExpandableSection
            title="Географическое положение и судьба"
            shortText="Город расположен на берегу Каспийского моря. С одной стороны — море, с другой — горы. Рядом находится гора Тарки-Тау."
            longText="Расположение определило судьбу города. Махачкала находится на узкой полосе Приморской низменности, и именно строительство здесь морского порта и железной дороги сделало её важнейшим транспортным узлом Северного Кавказа. Сейчас через порт идут грузопотоки в Иран, Турцию и Среднюю Азию, а навигация длится круглый год. Кроме того, город — крупный промышленный центр, где развиты машиностроение, нефте- и газодобыча, а также производство стройматериалов."
            isInView={isInView}
          />
          
          <ExpandableSection
            title="Влияние климата и уникальная природа"
            shortText="В Махачкале: жаркое лето, мягкая зима, много солнечных дней. Из-за этого здесь много санаториев и курортов."
            longText="Климат в прибрежной равнинной части, где стоит Махачкала, засушливый и ветреный. Это напрямую повлияло на тип жилья: здесь исторически строили малоэтажные дома из самана с плоскими крышами (дождей мало, скаты не нужны) и обязательно с внутренним двором, который защищал от ветра и солнца. Уникальность расположения в том, что город лежит прямо у подножия горы Тарки-Тау, а рядом начинаются предгорья Большого Кавказа. То есть тут море и горы сходятся практически в одной точке, создавая живописный природный рельеф."
            isInView={isInView}
          />
        </div>

        {/* Climate Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-3xl p-8 max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <Wind size={24} className="text-gold" />
            <h3 className="text-xl font-semibold text-foreground">
              Климат по месяцам
            </h3>
          </div>

          <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
            {climateData.map((data, index) => (
              <motion.div
                key={data.month}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="flex flex-col items-center"
              >
                <span className="text-xs text-muted-foreground mb-2">
                  {data.month}
                </span>
                <div className="relative w-full h-32 bg-secondary/30 rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold to-gold/50 rounded-lg"
                    initial={{ height: 0 }}
                    animate={
                      isInView
                        ? { height: `${((data.temp + 5) / 35) * 100}%` }
                        : {}
                    }
                    transition={{ duration: 0.8, delay: 1 + index * 0.05 }}
                  />
                </div>
                <span className="text-sm text-foreground mt-2 font-medium">
                  {data.temp}°
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
