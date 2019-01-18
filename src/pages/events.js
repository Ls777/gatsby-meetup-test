import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Event from '../components/event'

const Header = styled.div`
  margin: 1rem auto -5rem;
  padding: 2rem;
  max-width: 800px;
`

const Events = ({ data }) => {
  const pastEvents = data.meetupGroup.childrenMeetupEvent.filter(
    event => event.status === 'past'
  )

  return (
    <Layout>
      <SEO title='Past Events' />
      <Header>
        <h1>PAST EVENTS</h1>
      </Header>
      {pastEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </Layout>
  )
}

export default Events

export const query = graphql`
  query {
    meetupGroup {
      name
      link
      description
      childrenMeetupEvent {
        id
        name
        duration
        status
        time
        local_date
        local_time
        yes_rsvp_count
        venue {
          name
          address_1
          city
          localized_country_name
          zip
          state
        }
        description
        link
      }
    }
  }
`
