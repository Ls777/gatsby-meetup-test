import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background: #363945;
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Title = styled.h1`
  font: italic bold 36px 'Roboto Mono';
  font-display: fallback;
  color: #ff4141;
  margin: 0;
  flex-grow: 1;
`

const HomeLink = styled(Link)`
  color: #ff4141;
  text-decoration: none;
`

const PageLink = styled(Link)`
  text-decoration: none;
  font: 24px 'Roboto Mono';
  font-display: fallback;
  margin-left: 30px;
  color: #ffa741;
  &.active {
    color: #15dcd1;
  }
`

const Navbar = ({ siteTitle }) => (
  <Nav>
    <Container>
      <Title>
        <HomeLink to='/'>{siteTitle.toUpperCase()}</HomeLink>
      </Title>
      <PageLink to='/about/' activeClassName='active'>
        about
      </PageLink>
      <PageLink to='/events/' activeClassName='active'>
        past_events
      </PageLink>
    </Container>
  </Nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string
}

Navbar.defaultProps = {
  siteTitle: ``
}

export default Navbar
