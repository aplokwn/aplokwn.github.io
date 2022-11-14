import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import LogoS from '../../../assets/images/aplogo.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {

    gsap.fromTo(
      outlineLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d=
            "M2621.28,3543l524.87-1528.45H2096.32Zm496.78-1508.4L2621.28,3481.21,2124.41,2034.57Zm553.57-1620.7h-4.07l-289.22,839.36H1860.13L1570.86,413.87H201L1742.1,4586.13H3261.63l2.4-6.55L4795.17,424.33l3.86-10.46Zm-3194,20.06L2003.94,4566.07H1756.06L229.76,433.93Zm1361.29,819.3h-248l-282.36-819.3h248Zm1553.71,20.06h4.06l289.24-839.36h1084.3l-3.82,10.37L3243.93,4566.07H2025.32L499,433.93h788.3l289.27,839.36H3392.63Z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo