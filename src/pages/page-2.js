import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Event from '../components/event'

const SecondPage = ({ data }) => {
  const pastEvents = data.meetupGroup.childrenMeetupEvent.filter(
    event => event.status === 'past'
  )

  return (
    <Layout>
      <SEO title='Page two' />
      <h1>Past Events</h1>
      <Link to='/'>Go back to the homepage</Link>
      {pastEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </Layout>
  )
}

export default SecondPage

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
