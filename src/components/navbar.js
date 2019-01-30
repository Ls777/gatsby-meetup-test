import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'
import Media from 'react-media'

const Nav = styled.nav`
  margin-bottom: 1.45rem;
  user-select: none;
`
const OuterCountainer = styled.div`
  background: #363945;
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    background-color: #aaa;
  }
`

const Title = styled.h1`
  font: italic bold 36px 'Roboto Mono';
  font-display: fallback;
  color: #ff4141;
  margin: 0;
  flex-grow: 1;

  @media screen and (max-width: 550px) {
    font-size: 28px;
    margin-left: -5px;
    letter-spacing: -1px;
  }
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

const MobileLinkMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  position: relative;
  text-align: center;
  width: 100%;
  height: 7em;
  background-color: #22232b;
  -webkit-animation: scale-in-ver-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-ver-top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

class Navbar extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  render () {
    const links = (
      <>
        <PageLink to='/about/' activeClassName='active'>
          about
        </PageLink>
        <PageLink to='/events/' activeClassName='active'>
          past_events
        </PageLink>
      </>
    )
    return (
      <Media query='(min-width: 800px)'>
        {matches => (
          <Nav>
            <OuterCountainer>
              <Container>
                <Title>
                  <HomeLink to='/'>
                    {this.props.siteTitle.toUpperCase()}
                  </HomeLink>
                </Title>
                {matches ? (
                  links
                ) : (
                  <Burger
                    isOpen={this.state.open}
                    onClick={this.handleClick.bind(this)}
                  />
                )}
              </Container>
            </OuterCountainer>
            {this.state.open && !matches && (
              <MobileLinkMenu>{links}</MobileLinkMenu>
            )}
          </Nav>
        )}
      </Media>
    )
  }
}

Navbar.propTypes = {
  siteTitle: PropTypes.string
}

Navbar.defaultProps = {
  siteTitle: ``
}

export default Navbar
