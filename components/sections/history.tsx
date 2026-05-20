"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const historyEvents = [
  {
    year: "1722",
    title: "Персидский поход Петра I",
    description:
      "Отправной точкой стал визит Петра I. Оценив удобную бухту, он повелел заложить укрепление. Есть легенда, что именно здесь император разбил свой лагерь.",
    era: "Российская империя",
  },
  {
    year: "1844",
    title: "Основание крепости",
    description:
      "Официальная дата основания поселения — построено Петровское укрепление для укрепления позиций Российской империи на Кавказе.",
    era: "Российская империя",
  },
  {
    year: "1857",
    title: "Статус города",
    description:
      "Крепость получает статус города под именем Петровск, становясь важным торговым узлом на Каспии.",
    era: "Российская империя",
  },
  {
    year: "Конец XIX в.",
    title: "Судьбоносный момент",
    description:
      "Строительство морского порта и железной дороги — самый крутой поворот в судьбе города, превративший его из захолустного укрепления в крупный промышленный и торговый центр.",
    era: "Российская империя",
  },
  {
    year: "1921",
    title: "Переименование",
    description:
      "Город переименован в Махачкалу в честь революционера Магомед-Али Дахадаева (Махача), одного из организаторов советской власти в Дагестане.",
    era: "СССР",
  },
  {
    year: "1970",
    title: "Город-феникс",
    description:
      "Мощнейшее землетрясение почти полностью разрушило Махачкалу. Но город отстроили заново силами всей страны.",
    era: "СССР",
  },
  {
    year: "1991",
    title: "Новая эра",
    description:
      "Махачкала становится столицей Республики Дагестан в составе Российской Федерации.",
    era: "Россия",
  },
  {
    year: "Наши дни",
    title: "Современность",
    description:
      "Махачкала — самый крупный город Северного Кавказа. Через порт идут грузопотоки в Иран, Турцию и Среднюю Азию, навигация длится круглый год.",
    era: "Россия",
  },
]

const architecturalHeritage = [
  {
    name: "Дом Барятинского",
    description: "Ныне музей — одно из главных культурных учреждений города",
    link: "https://dagmuzey.ru/",
  },
  {
    name: "Махачкалинский маяк",
    description: "Историческая достопримечательность, символ морского города",
    link: "https://ru.wikipedia.org/wiki/Махачкалинский_маяк",
  },
  {
    name: "Старая гимназия",
    description: "Памятник архитектуры XIX века в историческом центре",
    link: "https://ru.wikipedia.org/wiki/Махачкала",
  },
  {
    name: "Гостиница «Дагестан»",
    description: "Здание бывшей гостиницы — образец архитектуры прошлых эпох",
    link: "https://ru.wikipedia.org/wiki/Махачкала",
  },
]

export function HistorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section
      ref={ref}
      id="history"
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
            От основания до современности
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            История города
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            От крепости до современного мегаполиса — путешествие сквозь эпохи
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold via-emerald to-gold"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Events */}
          {historyEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                }`}
              >
                <motion.div
                  className="glass rounded-2xl p-6 group hover:border-gold/30 transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Era badge */}
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      event.era === "Российская империя"
                        ? "bg-gold/20 text-gold"
                        : event.era === "СССР"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-emerald/20 text-emerald"
                    }`}
                  >
                    {event.era}
                  </span>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Year marker */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center">
                <motion.div
                  className="w-16 h-16 rounded-full glass glow-gold flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-gold font-bold text-xs text-center leading-tight px-1">
                    {event.year}
                  </span>
                </motion.div>
              </div>

              {/* Empty space for layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Architectural Heritage */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Архитектурный облик
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            В городе насчитывается около <span className="text-gold font-medium">60 объектов культурного наследия</span>, 
            в основном в историческом центре. Среди них:
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {architecturalHeritage.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass rounded-xl p-5 hover:border-gold/30 transition-all duration-500 group"
              >
                <h4 className="text-foreground font-medium mb-2 group-hover:text-gold transition-colors">
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:underline"
                  >
                    {item.name}
                    <ExternalLink size={14} className="opacity-70" />
                  </a>
                </h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Museum effect footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 glass rounded-full px-8 py-4">
            <div className="w-3 h-3 rounded-full bg-emerald animate-pulse" />
            <span className="text-muted-foreground">
              История продолжается...
            </span>
            <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
