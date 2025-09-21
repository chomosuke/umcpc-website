import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Header = () => {
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false)

  const styles = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '1500' },
  })

  const handleCloseMobileMenu = () => {
    setMobileMenuExpanded(false)
  }

  return (
    <div className="relative mb-16 sm:mb-24">
      <animated.div className="mx-auto" style={styles}>
        <div className="flex justify-between">
          <div className="shrink-0">
            <Link href="/" passHref>
              <button>
                <div className="flex flex-row items-center space-x-3 md:space-x-0 md:flex-col">
                  <div className="h-20 md:h-10 w-28 md:w-14 relative">
                    <Image
                      src="/terry-bd.png"
                      alt="UMCPC Logo"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="flex font-raleway font-bold text-white">
                    umcpc.
                  </p>
                </div>
              </button>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <div className="hidden md:flex items-center">
              <Link href="/about-us" passHref>
                <button className="header-btn">About Us</button>
              </Link>
              <Link href="/events" passHref>
                <button className="header-btn">Events</button>
              </Link>
              <a href="https://drive.google.com/drive/folders/1hrFqLIvPOfRXELWysU0PiBVvh8l-INL_?usp=sharing">
                <button className="header-btn pb-1">Resources</button>
              </a>
              <a href="https://aware-somersault-1ad.notion.site/umcpc">
                <button className="header-btn pb-1">Learning</button>
              </a>
            </div>
            <a
              className="rounded-btn ml-4"
              href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6517/"
            >
              Join us
            </a>
          </div>
          <div className="md:hidden">
            <div className="flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
              >
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-club-blue-200"
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </animated.div>

      <div className={mobileMenuExpanded ? '' : 'hidden'}>
        <div
          className="fixed top-0 right-4 z-40 w-full h-screen bg-club-blue-900/30 backdrop-blur-sm"
          onClick={() => setMobileMenuExpanded(false)}
        ></div>
        <div className="absolute top-0 right-0 z-50 w-44 h-fit pt-4 pb-6 pl-4 bg-[#162638] rounded-lg">
          <div className="flex flex-col space-y-4 items-baseline">
            <Link href="/about-us" passHref>
              <button className="menu-btn" onClick={handleCloseMobileMenu}>
                About Us
              </button>
            </Link>
            <Link href="/events" passHref>
              <button className="menu-btn" onClick={handleCloseMobileMenu}>
                Events
              </button>
            </Link>
            <a href="https://drive.google.com/drive/folders/1hrFqLIvPOfRXELWysU0PiBVvh8l-INL_?usp=sharing">
              <button className="menu-btn" onClick={handleCloseMobileMenu}>
                Resources
              </button>
            </a>
            <div className="w-36 border-2 border-t border-club-blue-700"></div>
            <a
              className="btn-font btn-bg h-6 py-1 px-3 mr-4 rounded-full "
              href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6517/"
            >
              Join us
            </a>
          </div>
          <button
            className="absolute top-3 right-4 w-6 h-6 flex items-center"
            onClick={() => setMobileMenuExpanded(false)}
          >
            <svg
              className="w-6 h-6 text-gray-300 hover:text-club-blue-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
