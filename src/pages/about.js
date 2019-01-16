import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Description = styled.p`
  font-family: 'Roboto';
`

const NotFoundPage = ({ data }) => {
  const groupDescription = { __html: data.meetupGroup.description }

  return (
    <Layout>
      <SEO title='About' />
      <h1>ABOUT</h1>
      <Description dangerouslySetInnerHTML={groupDescription} />
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
