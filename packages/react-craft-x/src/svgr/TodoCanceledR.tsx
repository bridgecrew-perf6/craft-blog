import * as React from 'react'
import { SVGProps } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 0a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15ZM4.293 4.293a1 1 0 0 1 1.414 0L7.5 6.086l1.793-1.793a1 1 0 0 1 1.414 1.414L8.914 7.5l1.793 1.793a1 1 0 0 1-1.414 1.414L7.5 8.914l-1.793 1.793a1 1 0 0 1-1.414-1.414L6.086 7.5 4.293 5.707a1 1 0 0 1 0-1.414Z"
    />
  </svg>
)

export default SvgComponent
