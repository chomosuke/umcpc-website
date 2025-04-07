import React from 'react'
import events from './events.json'

function convertDate(dateString) {}

function getEvents(allEvents, getUpcoming) {
  return allEvents.filter(
    (event) => new Date(event.date) < new Date() != getUpcoming
  )
}

const Events = () => {
  return (
    <div className="h-screen">
      <div className="my-48">
        <h1 className="subheader-font text-center">Upcoming Events</h1>
        <div className="grid grid-cols-3 gap-4">
          {getEvents(events, true).map((event, i) => (
            <div className="card">
              <div className="container">
                <h2 className="font-bold text-center">{event.name}</h2>
                <p>{event.description}</p>
                <p>🗓️ {new Date(event.date).toString().slice(0, 15)}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="subheader-font text-center">Past Events</h1>
        <div className="grid grid-cols-3 grid-rows-5 gap-4">
          {getEvents(events, false).map((event, i) => (
            <div className="card">
              <div className="container">
                <h1 className="font-bold text-center">{event.name}</h1>
                <p>{event.description}</p>
                <p>🗓️ {new Date(event.date).toString().slice(0, 15)}</p>
                <p>⏰ {event.time}</p>
                <p>📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
