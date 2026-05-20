"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Shirt, UtensilsCrossed, MessageCircle, Palette, ChevronDown, ChevronUp } from "lucide-react"

const cultureSections = [
  {
    icon: Shirt,
    title: "Культурные традиции и фестивали",
    description: "Бережное отношение к национальному костюму",
    content: `Одна из главных культурных традиций Махачкалы и всего Дагестана — это бережное отношение к национальному костюму. На ежегодном Международном фестивале «Горцы» проходит показ «Поэзия народного костюма», где можно увидеть аварские, даргинские, кумыкские, лезгинские и многие другие наряды. Это не просто модное шоу, а способ сохранить семейные традиции и обряды, зашифрованные в деталях одежды.

Также здесь проводят фестиваль «Хранители традиций» — масштабную ярмарку народных промыслов с этно-квестами, мастер-классами по коже и парфюмерии, дегустациями и выступлениями фольклорных коллективов.`,
  },
  {
    icon: UtensilsCrossed,
    title: "Кулинарные «фишки»",
    description: "Дагестанская кухня — это отдельный мир",
    content: `Дагестанская кухня — это отдельный мир, и вот что обязательно советуют попробовать:

• Хинкал (не путать с грузинскими хинкали!) — В Дагестане у каждого народа он свой, существует как минимум четыре вида этого блюда.

• Чуду — тонкие лепешки с самыми разнообразными начинками.

• Урбеч — густая паста из перетёртых орехов или семечек, которую едят и как десерт, и как добавку к другим блюдам.

• Шашлык — фирменный рецепт которого, как шутят местные, есть у каждой семьи.`,
  },
  {
    icon: MessageCircle,
    title: "Местный язык и уличная культура",
    description: "Уникальный локальный сленг",
    content: `В Махачкале сложился уникальный локальный сленг, понятный только местным. Художник Мурад Халилов даже перенёс его в уличное искусство. На его работах можно встретить типичные дагестанские фразы-жаргонизмы вроде «сам как?», «потеряйся» или «на связи».

Кстати, о стрит-арте: во дворе Театра поэзии есть целая стена, расписанная этим художником, которая стала местной достопримечательностью. Стрит-арт в городе развивается, и художники не боятся делать его смелым, добавляя в городской пейзаж яркие и необычные образы.`,
  },
]

const dishes = [
  { name: "Хинкал", description: "У каждого народа свой, минимум 4 вида" },
  { name: "Чуду", description: "Тонкие лепёшки с разными начинками" },
  { name: "Урбеч", description: "Паста из орехов или семечек" },
  { name: "Шашлык", description: "У каждой семьи свой рецепт" },
]

function ExpandableCard({ item, index, isInView }: { item: typeof cultureSections[0], index: number, isInView: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div 
        className="p-6 cursor-pointer hover:bg-white/5 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
            <item.icon size={28} className="text-gold" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-muted-foreground" />
              </motion.div>
            </div>
            <p className="text-muted-foreground mt-1">{item.description}</p>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 border-t border-border">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {item.content}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function CultureSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      id="culture"
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
            Душа города
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Культура и традиции
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Фестивали, кухня, язык и уличное искусство — всё, что делает Махачкалу уникальной
          </p>
        </motion.div>

        {/* Culture Cards */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {cultureSections.map((item, index) => (
            <ExpandableCard
              key={item.title}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Dishes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed size={24} className="text-gold" />
              <h3 className="text-xl font-semibold text-foreground">
                Что попробовать в Махачкале
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {dishes.map((dish, index) => (
                <motion.div
                  key={dish.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover:border-gold/30 transition-all duration-500 group"
                  whileHover={{ y: -5 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {dish.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {dish.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Street Art Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            <Palette size={32} className="text-gold mx-auto mb-4" />
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Стрит-арт</span> в городе развивается — художники не боятся делать его смелым, 
              добавляя в городской пейзаж яркие и необычные образы. Во дворе Театра поэзии есть целая стена, 
              расписанная художником Мурадом Халиловым, которая стала местной достопримечательностью.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
