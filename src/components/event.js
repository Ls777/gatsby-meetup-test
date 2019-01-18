import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 1rem auto;
  padding: 2rem;
  max-width: 800px;
  font-family: 'Roboto Mono';
`

const Red = styled.span`
  color: #ff4141;
`

const Green = styled.span`
  color: #8dfc91;
`

const Blue = styled.span`
  color: #15dcd1;
`

const Event = ({ event }) => {
  const eventDescription = { __html: event.description }

  const fakeFrontMatter = [
    { key: 'title', value: event.name },
    { key: 'date', value: `${event.local_date} at ${event.local_time}` },
    { key: 'venue', value: `${event.venue.address_1}, ${event.venue.city}` }
  ]

  return (
    <Container>
      <p>
        ---
        <br />
        {fakeFrontMatter.map(item => (
          <span key={item.key}>
            <Red>{item.key}</Red>
            <Blue>: "</Blue>
            <Green>{item.value}</Green>
            <Blue>"</Blue>
            <br />
          </span>
        ))}
        ---
      </p>
      <p>
        <Blue>{'# '}</Blue>
        <Green>Description</Green>
      </p>
      <span dangerouslySetInnerHTML={eventDescription} />
      <p>{event.yes_rsvp_count} people RSVP'd</p>
    </Container>
  )
}

export default Event
