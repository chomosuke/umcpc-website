import React from 'react'

const Header = () => {
  return (
    <div class="grid grid-cols-2 pt-8 px-16">
      <div class="shrink-0">
        <img class="h-14 w-14" src="/club-logo.svg" alt="UMCPC Logo" />
        <p class="font-raleway font-bold text-white">umcpc.</p>
      </div>
      <div class="grid justify-items-end">
        <div class="flex flex-row items-center">
          <button class="header-btn">About Us</button>
          <button class="header-btn">Events</button>
          <button class="header-btn">Resources</button>
          <button class="rounded-btn">Join us</button>
        </div>
      </div>
    </div>
  )
}

export default Header
