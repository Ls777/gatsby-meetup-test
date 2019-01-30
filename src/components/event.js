import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 21px auto;
  padding: 42px;
  max-width: 800px;
  font-family: 'Roboto Mono';
  position: relative;

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit;
  }

  a:before {
    position: absolute;
    content: '';
    display: block;
    height: 10px;
    width: 10px;
    border-radius: 10px;
    top: 48px;
    left: -20px;
  }

  a:hover:before {
    background-color: #ff4141;
  }
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
      <a href={event.link}>
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
      </a>
    </Container>
  )
}

export default Event
