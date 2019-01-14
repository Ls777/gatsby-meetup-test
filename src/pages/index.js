import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Event from '../components/event'

const IndexPage = ({ data }) => {
  const event = data.meetupGroup.childrenMeetupEvent.filter(
    event => event.time === data.meetupGroup.next_event.time
  )[0]

  const groupDescription = { __html: data.meetupGroup.description }

  return (
    <Layout>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <Link to='/events/'>Past Events</Link>
      <p dangerouslySetInnerHTML={groupDescription} />

      <h2>Upcoming Event</h2>
      {event ? <Event event={event} /> : <h3>no current event scheduled.</h3>}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    meetupGroup {
      name
      link
      description
      next_event {
        id
        time
      }
      childrenMeetupEvent {
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
