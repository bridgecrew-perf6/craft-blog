import React from 'react'
import { motion, SVGMotionProps, useAnimation, Variant } from 'framer-motion'

export type SearchIconProps = Omit<SVGMotionProps<SVGSVGElement>, 'css'>

export default function SearchIcon({ ...props }: SearchIconProps): JSX.Element {
  const controls = useAnimation()

  const variant: Variant = {
    rotate: [0, 15, -15, 0],
    transition: {
      type: 'spring',
      duration: 0.5,
    },
  }

  return (
    <motion.svg
      fill="inherit"
      stroke="inherit"
      width="1rem"
      height="1rem"
      {...props}
      animate={controls}
      onTap={() => controls.start(variant)}
      viewBox="0 0 24 24"
    >
      <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
    </motion.svg>
  )
}
