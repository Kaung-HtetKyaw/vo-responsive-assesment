import { Favourite } from './components/FavouriteTopics'
import { Footer } from './components/Footer'
import Headers from './components/Headers/Headers'
import { Hero } from './components/Hero'
import { OurContent } from './components/OurContent'
import { Prices } from './components/Prices'
import { TalkAboutUs } from './components/TalkAboutUs'
import { motion, Variants } from 'framer-motion'

export const sectionVariants: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

const HomePage = () => {
  return (
    <div className=" px-[8.85%] pb-[16px] md:pb-[56px] bg-red-500 bg-milky">
      <Headers />
      <Hero />
      <OurContent />
      <Favourite />
      <TalkAboutUs />
      <Prices />
      <Footer />
    </div>
  )
}

export default HomePage
