import React, { useState, useEffect } from 'react'
import Committee from '../../components/Committee'
import Socials from '../../components/shared/Socials'

const AboutUs = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div className={`fade-in ${fadeIn ? 'show' : ''}`}>
      <div className="h-[80] lg:h-screen flex flex-col lg:flex-row">
        <div className="mb-16 lg:w-2/5">
          <div className="flex flex-col sm:flex-row">
            <h1 className="flex-none page-header-font pr-3 z-40">Come meet</h1>
            <h1 className="flex-none page-header-font z-40 header-underline">
              our team
            </h1>
          </div>
          <p className="text-font text-left mt-12 lg:w-4/5">
            Our club is home to all of the University of Melbourne&apos;s
            competitive programming endeavours! We aim to impart a strong
            understanding of algorithms and data structures that are both fun
            and key to a successful future in the tech industry!
          </p>
          <p className="text-font text-left mt-8 lg:w-4/5">
            Come talk to us on <span className="highlighted-font">Discord</span>
            , <span className="highlighted-font">Facebook</span> or checkout our
            new <span className="highlighted-font">UMSU</span> page!
          </p>
          <div className="mt-8">
            <Socials />
          </div>
          <p className="text-font mt-8 lg:w-5/6">
            Scroll through our committee members and hover/click over each to
            get to know them better!
          </p>
        </div>
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-scroll">
            <Committee />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
