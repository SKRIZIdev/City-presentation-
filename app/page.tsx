import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { EtymologySection } from "@/components/sections/etymology"
import { EmblemSection } from "@/components/sections/emblem"
import { SoulSection } from "@/components/sections/soul"
import { LandmarksSection } from "@/components/sections/landmarks"
import { HistorySection } from "@/components/sections/history"
import { LegendsSection } from "@/components/sections/legends"
import { PeopleSection } from "@/components/sections/people"
import { CultureSection } from "@/components/sections/culture"
import { GeographySection } from "@/components/sections/geography"
import { PopulationSection } from "@/components/sections/population"
import { FactsSection } from "@/components/sections/facts"
import { Footer } from "@/components/footer"

export default function MakhachkalaPage() {
  return (
    <main className="relative">
      {/* Navigation */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Etymology Section */}
      <EtymologySection />

      {/* 3. Emblem Section */}
      <EmblemSection />

      {/* 4. Soul/Alter Ego Section */}
      <SoulSection />

      {/* 5. Landmarks Section */}
      <LandmarksSection />

      {/* 6. History Section */}
      <HistorySection />

      {/* 7. Legends Section */}
      <LegendsSection />

      {/* 8. Famous People Section */}
      <PeopleSection />

      {/* 9. Culture Section */}
      <CultureSection />

      {/* 10. Geography Section */}
      <GeographySection />

      {/* 11. Population Section */}
      <PopulationSection />

      {/* 12. Facts Section */}
      <FactsSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
