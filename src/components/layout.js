import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from './navbar'
import './layout.css' // styles for default starter

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Roboto", sans-serif;
  background-color: #2A2E38;
  color: #DDD;
}

a {
  color: #15dcd1;
}

`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Footer = styled.footer`
  font-family: 'Roboto Mono';
  text-align: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        meetupGroup {
          name
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Navbar siteTitle={data.meetupGroup.name} />
        <Container>
          {children}
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </Footer>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
