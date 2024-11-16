import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const FadeIn = ({ children, delay, className = '' }: any) => {
  const ref = useRef(null)
  const isInview = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInview) {
      controls.start('visible')
    }
  }, [isInview])

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      transition={{
        type: 'spring',
        duration: 0.2,
        damping: 8,
        delay: delay ?? 0.2,
        stiffness: 100
      }}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
