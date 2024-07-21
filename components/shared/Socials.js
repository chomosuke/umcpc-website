import Image from 'next/image'
import React from 'react'

function Socials() {
  return (
    <div className="flex gap-3 sm:gap-2">
      <a href="https://discord.gg/R68WZcgSVp">
        <div className="social-icon bg-[#5865F2]">
          <div className="h-3 sm:h-6 w-4 sm:w-8 relative">
            <Image
              src="/branding/discord-white.svg"
              alt="Discord Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </a>
      <a href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6517/">
        <div className="social-icon bg-[#68217C]">
          <div className="h-4 sm:h-8 w-3 sm:w-7 relative">
            <Image
              src="/branding/umsu.png"
              alt="UMSU Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </a>
      <a href="https://instagram.com/unimelbcpc">
        <div className="social-icon bg-[#5865F2]">
          <div className="h-3 sm:h-6 w-4 sm:w-8 relative">
            <Image
              src="/branding/instagram.svg"
              alt="Instagram Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </a>
      <a href="https://www.facebook.com/umcpc/">
        <div className="social-icon bg-[#1778F2]">
          <div className="h-4 sm:h-8 w-4 sm:w-8 mb-[2px] sm:mb-1 relative">
            <Image
              src="/branding/facebook-white.svg"
              alt="Facebook Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default Socials
