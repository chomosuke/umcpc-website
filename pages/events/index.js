import React, { useState, useEffect } from 'react'

// Safe filter function
const filterEvents = (events, upcoming = true) => {
  if (!Array.isArray(events)) return []
  return events.filter((event) => {
    if (!event.date) return false
    const isPast = new Date(event.date) < new Date()
    return upcoming ? !isPast : isPast
  })
}
const EventCard = ({ event }) => (
  <div className="relative w-full bg-club-blue-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl border-2 border-club-blue-100">
    {/* Event Image */}
    {event.image && (
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-72 object-cover opacity-80 transition-transform duration-300 group-hover:scale-110"
      />
    )}

    {/* Title overlay at bottom */}
    <div className="absolute bottom-0 w-full bg-club-blue-800 bg-opacity-90 text-white text-center py-3 text-lg font-bold">
      {event.name}
    </div>

    {/* Hidden details overlay */}
    <div className="absolute inset-0 bg-club-blue-800 bg-opacity-85 text-white p-6 flex flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
      <p className="mb-4">{event.description}</p>
      <div className="flex flex-col gap-1 font-medium text-sm">
        <p>🗓️ {event.date ? new Date(event.date).toDateString() : 'TBA'}</p>
        <p>⏰ {event.time || 'TBA'}</p>
        <p>📍 {event.location || 'TBA'}</p>
      </div>
    </div>
  </div>
)

const Events = () => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events')
        const data = await res.json()
        if (!Array.isArray(data)) {
          console.error('Expected array but got:', data)
          setEvents([])
        } else {
          setEvents(data)
        }
        setFadeIn(true)
      } catch (error) {
        console.error('Failed to fetch events:', error)
        setEvents([])
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  if (loading) return <p className="mx-10 mt-10">Loading events...</p>

  return (
    <div
      className={`h-screen flex-1 flex overflow-hidden fade-in ${
        fadeIn ? 'show' : ''
      }`}
    >
      <div className="flex-1 overflow-y-scroll px-10">
        {/* Upcoming Events */}
        <h1 className="page-header-font mb-6 h-20 header-underline">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {filterEvents(events, true).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Past Events */}
        <h1 className="page-header-font mb-6 h-20 header-underline">
          Past Events
        </h1>
        <div className="grid grid-cols-3 gap-6 mb-10">
          {filterEvents(events, false).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events
