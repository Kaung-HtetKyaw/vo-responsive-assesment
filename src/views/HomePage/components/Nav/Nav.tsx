import { Cycle, motion, sync, useCycle } from 'framer-motion'
import { MutableRefObject, useRef } from 'react'
import { Navigation } from './Navigation'
import { MenuToggle } from './MenuToggle'
import { useDimensions } from 'hooks/useDimensions'
import { CloseIcon } from 'components/Icons'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
}

const Nav = ({
  isOpen,
  toggleOpen
}: {
  isOpen: boolean
  toggleOpen: Cycle
}) => {
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      {' '}
      <motion.div className="background relative" variants={sidebar}>
        <motion.div
          className="absolute right-[32px] top-[32px] cursor-pointer"
          onClick={() => toggleOpen()}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, animationDelay: '0.5s' }}
        >
          <CloseIcon />
        </motion.div>
      </motion.div>
      <Navigation />
    </motion.nav>
  )
}

export default Nav
