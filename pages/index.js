import Hero3JS from '../components/Hero3JS'
import Socials from '../components/shared/Socials'
import { useSpring, animated } from 'react-spring'

export default function Home() {
  const fadeIn = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '400' },
  })

  return (
    <div className="h-screen relative z-0">
      <animated.div
        className="flex flex-col items-center text-center sm:items-baseline sm:text-left lg:w-1/4 z-50 absolute inset-0 "
        style={fadeIn}
      >
        <h2 className="subtitle-font pl-1">The University of Melbourne</h2>
        <h1 className="header-font">Competitive Programming</h1>
        <span className="header-font header-underline">Club</span>
        <p className="text-font w-5/6 lg:w-full mt-8 text-blue">
          Looking to sharpen your{' '}
          <span className="highlighted-font">programming</span> and{' '}
          <span className="highlighted-font">problem solving</span> skills!?
        </p>
        <a
          className="flex h-6 sm:h-9 mt-8 mb-4 w-40 sm:w-48 bg-club-blue-400 shadow shadow-club-blue-500 rounded-full"
          href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6517/"
        >
          <p className="btn-font py-1 sm:py-2 pl-6 pr-3">Join the club!</p>
          <p className="btn-font py-1 sm:py-2 w-0.5 bg-club-blue-500"></p>
          <p className="btn-font py-1 sm:py-2 pl-3 pr-3 sm:pr-6">$0</p>
        </a>
        <Socials />
      </animated.div>
      <div className="h-4/5 invisible lg:visible">
        <Hero3JS></Hero3JS>
      </div>
    </div>
  )
}
