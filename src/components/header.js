import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav`
  background: #363945;
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
`

const Title = styled.h1`
  font: italic bold 36px 'Roboto Mono';
  color: #ff4141;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Navbar>
    <Container>
      <Title>
        <Link
          to='/'
          style={{
            color: `#ff4141`,
            textDecoration: `none`
          }}
        >
          {siteTitle.toUpperCase()}
        </Link>
      </Title>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
