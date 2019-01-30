import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Navbar from './navbar'
import './layout.css' // styles for default starter

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Roboto", sans-serif;
  font-display: fallback;
  color: #DDD;
  
}

html {
  background-color: #2A2E38;
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
  position: relative;
`

const Footer = styled.footer`
  font-family: 'Roboto Mono';
  text-align: center;
  position: relative;
  z-index: 10;

  &:after {
    z-index: 5;
    content: '';
    position: absolute;
    display: block;
    height: 200px;
    top: -150px;
    left: -15px;
    width: 110px;
    @media screen and (max-width: 500px) {
      width: 40px;
    }
    background: linear-gradient(to bottom, #2a2e3800 0%, #2a2e38ff 100%);
  }
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
