"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const famousPeople = [
  {
    id: 1,
    name: "Магомед-Али Дахадаев (Махач)",
    role: "Революционер",
    years: "1882–1918",
    description:
      "В честь него назвали город. Он был революционером и одним из организаторов советской власти в Дагестане. В городе установлен памятник Махачу Дахадаеву.",
    achievement: "Именем назван город",
    image: "https://midag.ru/wp-content/uploads/2017/03/9f3f7c800f9e7cfbcf4c881c3b64a1d3.jpg",
    link: "https://ru.wikipedia.org/wiki/Дахадаев,_Магомед-Али",
  },
  {
    id: 2,
    name: "Пётр I Великий",
    role: "Император",
    years: "1672–1725",
    description:
      "История города тесно связана с Петром I и его Персидским походом 1722 года. Оценив удобную бухту, он повелел заложить укрепление, ставшее началом города.",
    achievement: "Основатель города",
    image: "https://historyrussia.org/images/Novosti-img/petr1.jpg",
    link: "https://ru.wikipedia.org/wiki/Пётр_I",
  },
  {
    id: 3,
    name: "Расул Гамзатов",
    role: "Поэт",
    years: "1923–2003",
    description:
      "Народный поэт Дагестана, автор знаменитого стихотворения «Журавли». Его творчество стало символом дагестанской культуры и известно во всём мире.",
    achievement: "Герой Социалистического Труда",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08SaClG6lIcEazzlOEd8VYLsqsLpEqCkDJw&s",
    link: "https://ru.wikipedia.org/wiki/Гамзатов,_Расул_Гамзатович",
  },
  {
    id: 4,
    name: "Хабиб Нурмагомедов",
    role: "Спортсмен",
    years: "1988–",
    description:
      "Легенда смешанных единоборств, непобеждённый чемпион UFC в лёгком весе. Гордость Дагестана и всей России.",
    achievement: "29-0 без поражений",
    image: "https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/0a/1f/5ab67a25c21d945b0c13df36a0a3c1ca5bb9fd849ba70227555135.jpg",
    link: "https://ru.wikipedia.org/wiki/Нурмагомедов,_Хабиб_Абдулманапович",
  },
  {
    id: 5,
    name: "Али Алиев",
    role: "Борец",
    years: "1937–1995",
    description:
      "Пятикратный чемпион мира по вольной борьбе, легенда советского спорта и основатель дагестанской школы борьбы.",
    achievement: "5-кратный чемпион мира",
    image: "https://ss.sport-express.ru/userfiles/materials/170/1701844/large.jpg",
    link: "https://ru.wikipedia.org/wiki/Алиев,_Али_Зурканаевич",
  },
  {
    id: 6,
    name: "Сулейман Стальский",
    role: "Поэт",
    years: "1869–1937",
    description:
      "Народный поэт Дагестана, ашуг, творивший на лезгинском языке. Его называли «Гомером XX века».",
    achievement: "Гомер XX века",
    image: "https://77islam.ru/media/k2/items/cache/7be2009338f404d05799285c0a9c5ce9_XL.jpg",
    link: "https://ru.wikipedia.org/wiki/Сулейман_Стальский",
  },
  {
    id: 7,
    name: "Гамзат Цадаса",
    role: "Поэт",
    years: "1877–1951",
    description:
      "Народный поэт Дагестана, отец Расула Гамзатова. Классик аварской литературы.",
    achievement: "Народный поэт ДАССР",
    image: "https://dagpravda.ru/wp-content/uploads/2025/08/Cadasa-i-deti.jpg",
    link: "https://ru.wikipedia.org/wiki/Гамзат_Цадаса",
  },
]

export function PeopleSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      id="people"
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
            Гордость города
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Известные личности
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Люди, прославившие Махачкалу и Дагестан на весь мир
          </p>
        </motion.div>

        {/* People Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {famousPeople.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredId(person.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="glass rounded-2xl overflow-hidden h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${person.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute inset-0 bg-deep-blue/20" />

                  {/* Role badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass rounded-full text-xs font-medium text-gold">
                      {person.role}
                    </span>
                  </div>

                  {/* Years */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs text-muted-foreground font-mono bg-background/50 px-2 py-1 rounded">
                      {person.years}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                    <a 
                      href={person.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      {person.name}
                      <ExternalLink size={14} className="opacity-70 flex-shrink-0" />
                    </a>
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {person.description}
                  </p>

                  {/* Achievement */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <span className="w-2 h-2 rounded-full bg-emerald" />
                    <span className="text-sm text-emerald font-medium">
                      {person.achievement}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gold/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === person.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <blockquote className="glass rounded-2xl p-8 relative">
            <div className="text-6xl text-gold/20 absolute -top-4 left-4 font-serif">
              &ldquo;
            </div>
            <p className="text-xl text-foreground/90 italic leading-relaxed">
              Не тот счастлив, кто живёт долго, а тот, кто живёт хорошо.
            </p>
            <footer className="mt-4 text-muted-foreground">
              — Расул Гамзатов
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
