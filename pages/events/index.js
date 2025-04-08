import React, { useState, useEffect } from 'react'
import events from './events.json'

function getEvents(allEvents, getUpcoming) {
  return allEvents.filter(
    (event) => new Date(event.date) < new Date() != getUpcoming
  )
}

const Events = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div
      className={`h-screen flex-1 flex overflow-hidden fade-in ${
        fadeIn ? 'show' : ''
      }`}
    >
      <div className="flex-1 overflow-y-scroll">
        <h1 className="page-header-font text-center mb-10 h-20 header-underline mb-4">
          {' '}
          Upcoming Events
        </h1>
        <div className="grid grid-cols-3 gap-4 mx-10">
          {getEvents(events, true).map((event, i) => (
            <div className="card">
              <div className="container">
                <h2 className="text-xl font-bold text-center">{event.name}</h2>
                <hr />
                <br />
                <p className="italic">{event.description}</p>
                <p className="font-bold">
                  🗓️ {new Date(event.date).toString().slice(0, 15)}
                </p>
                <p className="font-bold">⏰ {event.time}</p>
                <p className="font-bold">📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="page-header-font header-underline text-center my-10 h-20 mb-4 text-align-middle">
          {' '}
          Past Events{' '}
        </h1>
        <div className="grid grid-cols-3 grid-rows-5 gap-4 mx-10">
          {getEvents(events, false).map((event, i) => (
            <div className="card">
              <div className="container">
                <h1 className="font-bold text-center text-xl">{event.name}</h1>
                <hr />
                <br />
                <p className="italic">{event.description}</p>
                <p className="font-bold">
                  🗓️ {new Date(event.date).toString().slice(0, 15)}
                </p>
                <p className="font-bold">⏰ {event.time}</p>
                <p className="font-bold">📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
