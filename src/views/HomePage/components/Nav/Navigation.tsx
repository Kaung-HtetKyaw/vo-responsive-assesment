import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { CloseIcon, RoundedCloseIcon } from 'components/Icons'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const Navigation = () => {
  return (
    <div>
      <motion.ul variants={variants}>
        {itemIds.map((i) => (
          <MenuItem i={i} key={i} />
        ))}
      </motion.ul>
    </div>
  )
}

const itemIds = [0, 1, 2, 3, 4]
