import React from 'react'

const Event = ({ event }) => {
  const eventDescription = { __html: event.description }

  return (
    <div
      style={{
        margin: `1rem auto`,
        padding: `2rem`,
        maxWidth: 800,
        border: `2px purple solid`,
        borderRadius: `2em`
      }}
    >
      <h4>{event.name}</h4>
      <em>
        on {event.local_date} at {event.local_time}
      </em>
      <p dangerouslySetInnerHTML={eventDescription} />
      <p>{event.yes_rsvp_count} people RSVPd</p>
    </div>
  )
}

export default Event
