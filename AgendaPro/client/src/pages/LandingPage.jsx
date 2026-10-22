import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ProblemSolution } from '../components/ProblemSolution'
import { FeaturesShowcase } from '../components/FeaturesShowcase'
import { TargetAudience } from '../components/TargetAudience'
import { OperationalClarity } from '../components/OperationalClarity'
import { FAQ } from '../components/FAQ'
import { CTAFinal } from '../components/CTAFinal'
import { Footer } from '../components/Footer'

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <FeaturesShowcase />
        <TargetAudience />
        <OperationalClarity />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  )
}