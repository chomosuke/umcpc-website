import React, { useEffect } from 'react'

const NewMember = () => {
  useEffect(() => {
    window.location.replace(
      'https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6517/'
    )
  }, [])
  return (
    <div className="h-screen relative z-0">
      <span className="text-white">
        Click
        <a
          className="font-bold underline"
          href="https://umsu.unimelb.edu.au/buddy-up/clubs/clubs-listing/join/6517/"
        >
          here
        </a>
        if the redirect is not automatic
      </span>
    </div>
  )
}

export default NewMember
