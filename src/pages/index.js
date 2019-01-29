import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Event from '../components/event'

const Header = styled.div`
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`

const Icon = styled.div`
  font-size: 120px;
  color: #ff4141;
`

const Blue = styled.span`
  color: #15dcd1;
`

const Lead = styled.h1`
  font-size: 48px;
  font-weight: 400;
  max-width: 600px;
  margin: 0;

  @media screen and (max-width: 800px) {
    margin: 15px;
  }
`

const Upcoming = styled.h2`
  font-family: 'Roboto Mono';
  color: #666;
  margin: auto;
  text-align: center;
  font-weight: 400;
`

const Spacer = styled.div`
  height: 100px;
`

const IndexPage = ({ data }) => {
  const event = data.meetupGroup.childrenMeetupEvent.filter(
    event => event.time === data.meetupGroup.next_event.time
  )[0]

  console.log(event)

  return (
    <Layout>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <Header>
        <Icon>
          {'<'}
          <Blue>/</Blue>
          {'>'}
        </Icon>
        <Lead>Meet other Javascript Developers on Long Island.</Lead>
      </Header>
      <Upcoming>{event ? `next event:` : `no upcoming event`}</Upcoming>
      {event ? <Event event={event} /> : <Spacer />}
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
