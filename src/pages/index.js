import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Event from '../components/event'

import Typing from 'react-typist'
import 'react-typist/dist/typist.css'
import Numberline from '../components/numberline'

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
  user-select: none;
`

const Blue = styled.span`
  color: #15dcd1;
`

const Lead = styled.h1`
  font-size: 48px;
  font-weight: 400;
  max-width: 600px;
  min-width: 600px;
  margin: 0;
  min-height: 104px;

  @media screen and (max-width: 800px) {
    margin: 15px;
    min-width: 0px;
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
        <Lead>
          <Typing avgTypingDelay={60} stdTypingDelay={15}>
            Meet other Javascript Developers on Long Island.
          </Typing>
        </Lead>
      </Header>
      <Upcoming>{event ? `next event:` : `no upcoming event`}</Upcoming>
      {event ? (
        <>
          <Numberline />
          <Event event={event} />
        </>
      ) : (
        <Spacer />
      )}
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
