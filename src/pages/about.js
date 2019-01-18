import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Description = styled.span`
  font-family: 'Roboto Mono';
  font-size: 18px;
`

const Container = styled.div`
  min-height: 300px;
  max-width: 800px;
  margin: 1rem auto;
  padding: 2rem;
  h1 {
    margin-bottom: 3rem;
  }
`

const NotFoundPage = ({ data }) => {
  const groupDescription = { __html: data.meetupGroup.description }

  return (
    <Layout>
      <SEO title='About' />
      <Container>
        <h1>ABOUT</h1>
        <Description dangerouslySetInnerHTML={groupDescription} />
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query {
    meetupGroup {
      name
      link
      description
    }
  }
`
