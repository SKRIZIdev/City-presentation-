"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowRight, MapPin, ExternalLink } from "lucide-react"

const landmarks = [
  {
    id: 1,
    title: "Джума-мечеть",
    subtitle: "Главная мечеть Дагестана",
    description:
      "Крупнейшая мечеть в Европе, вмещающая до 17 000 человек. Величественное сооружение, объединяющее традиционную исламскую архитектуру с современными технологиями.",
    image: "https://turistas.me/uploads/touristic_materials/big_webp/RuRrgqclvUDRgHIsY9d4.webp",
    stats: { year: "1997", capacity: "17000", area: "16000" },
    link: "https://ru.wikipedia.org/wiki/Центральная_джума-мечеть_(Махачкала)",
  },
  {
    id: 2,
    title: "Набережная Махачкалы",
    subtitle: "Сердце прибрежной жизни",
    description:
      "Живописная набережная Каспийского моря — любимое место отдыха горожан. Современная инфраструктура, парки и кафе с видом на бескрайнее море.",
    image: "https://dagpravda.ru/wp-content/uploads/2023/11/IMG_5267.jpeg",
    stats: { length: "3 км", parks: "5", restaurants: "20+" },
  },
  {
    id: 3,
    title: "Гора Тарки-Тау",
    subtitle: "Страж города",
    description:
      "Легендарная гора, возвышающаяся над городом на 725 метров. Отсюда открывается захватывающий вид на Махачкалу, море и окружающие горы.",
    image: "https://dagpravda.ru/wp-content/uploads/2017/11/tarki.jpg",
    stats: { height: "725 м", trails: "3", viewpoints: "7" },
    link: "https://ru.wikipedia.org/wiki/Тарки-Тау",
  },
]

export function LandmarksSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section
      ref={ref}
      id="landmarks"
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
            Достопримечательности
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Места притяжения
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Откройте для себя уникальные места, которые делают Махачкалу
            незабываемой
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
          >
            {landmarks.map((landmark, index) => (
              <motion.div
                key={landmark.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${landmark.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-deep-blue/20" />
              </motion.div>
            ))}

            {/* Floating card */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 glass rounded-xl p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-gold text-sm mb-2">
                <MapPin size={16} />
                <span>{landmarks[activeIndex].subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {landmarks[activeIndex].link ? (
                  <a 
                    href={landmarks[activeIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-gold transition-colors"
                  >
                    {landmarks[activeIndex].title}
                    <ExternalLink size={18} className="opacity-70" />
                  </a>
                ) : (
                  landmarks[activeIndex].title
                )}
              </h3>
            </motion.div>

            {/* Image counter */}
            <div className="absolute top-6 right-6 glass rounded-full px-4 py-2 text-sm text-foreground">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(landmarks.length).padStart(2, "0")}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            {/* Tabs */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {landmarks.map((landmark, index) => (
                <button
                  key={landmark.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-gold text-background font-medium"
                      : "glass text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {landmark.title}
                </button>
              ))}
            </div>

            {/* Description */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {landmarks[activeIndex].description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {Object.entries(landmarks[activeIndex].stats).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="glass rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-gold mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key === "year"
                          ? "Год"
                          : key === "capacity"
                          ? "Вместимость"
                          : key === "area"
                          ? "Площадь м²"
                          : key === "length"
                          ? "Длина"
                          : key === "parks"
                          ? "Парков"
                          : key === "restaurants"
                          ? "Ресторанов"
                          : key === "height"
                          ? "Высота"
                          : key === "trails"
                          ? "Троп"
                          : key === "viewpoints"
                          ? "Смотровых"
                          : key}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* CTA */}
              {landmarks[activeIndex].link && (
                <motion.a
                  href={landmarks[activeIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 glass rounded-full border border-gold/30 hover:border-gold transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-foreground font-medium">
                    Узнать больше
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-gold group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-12">
          {landmarks.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gold"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
