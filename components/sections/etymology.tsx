"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

const timelineData = [
  {
    year: "1844",
    name: "Петровское укрепление",
    description: "Военная крепость Российской империи, основанная для укрепления позиций на Кавказе",
    image: "https://dagpravda.ru/wp-content/uploads/oldbitrix/rubriki_files/iblock/611/611e76750cc48f09d66921d348385000.jpg",
  },
  {
    year: "1857",
    name: "Петровск",
    description: "Крепость получает статус города, становится важным торговым и портовым центром",
    image: "https://ndelo.ru/media/picture/contents/2017/09/23/scan20001.jpg",
  },
  {
    year: "1918-1919",
    name: "Шамиль-кала",
    description: "Кратковременное переименование в годы Гражданской войны в честь имама Шамиля",
    image: "https://ndelo.ru/media/picture/contents/2020/08/14/005_157_old-album_65c8luy5ff68e1s16e740f20.jpg",
    link: "https://ru.wikipedia.org/wiki/Шамиль",
  },
  {
    year: "1921",
    name: "Махачкала",
    description: "Город переименован в честь дагестанского революционера Магомед-Али Дахадаева (Махача)",
    image: "https://foto.papik.pro/uploads/posts/2025-05/28/1748459866613.jpg",
    link: "https://ru.wikipedia.org/wiki/Дахадаев,_Магомед-Али",
  },
]

export function EtymologySection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="etymology"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-graphite/20 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light mb-4 block">
            Визитная карточка
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Названия и этимология
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Официальное название — Махачкала. Неофициально местные жители часто используют название{" "}
            <span className="text-gold font-medium">Анжи</span> (от кумыкского «Анжи-кала» — «жемчужный город» или «крепость на глинистой земле»)
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-20 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <motion.div
                className="flex-1 glass rounded-2xl p-8 group hover:border-gold/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-gold/80">{item.year}</span>
                  <div className="w-12 h-px bg-gold/30" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                    >
                      {item.name}
                      <ExternalLink size={18} className="opacity-70" />
                    </a>
                  ) : (
                    item.name
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-8 h-px bg-gold/50" />
                  <div className="absolute top-4 right-4 w-px h-8 bg-gold/50" />
                </div>
              </motion.div>

              {/* Center dot */}
              <div className="hidden md:flex items-center justify-center w-12">
                <motion.div
                  className="w-4 h-4 rounded-full bg-gold glow-gold"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Image */}
              <motion.div
                className="flex-1 aspect-video rounded-2xl overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-deep-blue/30" />
                
                {/* Vintage overlay */}
                <div className="absolute inset-0 mix-blend-overlay opacity-30 bg-gradient-to-br from-gold/20 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Etymology explanation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 glass rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-emerald" />
              Происхождение названия
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Современное имя город получил в 1921 году в честь дагестанского революционера{" "}
              <a 
                href="https://ru.wikipedia.org/wiki/Дахадаев,_Магомед-Али"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors inline-flex items-center gap-1"
              >
                Магомед-Али Дахадаева
                <ExternalLink size={14} />
              </a>
              , известного как <span className="text-foreground font-medium">Махач</span>. Суффикс{" "}
              <span className="text-foreground font-medium">«-кала»</span> переводится с кумыкского как «крепость», 
              символизируя неприступность и силу духа народа Дагестана.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="glass rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gold mb-3">Альтер-эго города</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Махачкалу часто называют <span className="text-foreground">«жемчужиной Дагестана»</span> (Анжи) и{" "}
                  <span className="text-foreground">«морскими воротами Северного Кавказа»</span>. Последнее прозвище полностью оправдано: 
                  здесь находится единственный незамерзающий порт России на Каспии.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gold mb-3">Нулевой километр</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Историческим «нулевым километром» и сердцем города можно считать{" "}
                  <span className="text-foreground">исторический центр</span>, где сосредоточено большинство памятников архитектуры 
                  и кипит жизнь.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
