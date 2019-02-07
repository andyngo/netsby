import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'

const StyledLink = styled(Link)`
  color: #333;
  transition: color .15s ease-in;
  text-decoration: none;

  &:hover {
    color: #05f;
    background-color: rgba(0,85,255,.03);

  }
`

const UnorderedList = tachyons("ul")`
dib w-100 w-75-ns tr-ns tc mt3 mt0-ns
`
const List = tachyons("li")`
f5 dib mr4
`
const HeaderLogo = tachyons("h1")`
f5 mb0 mt3 dib w-100 w-25-ns tl-ns tc fw6
`
const Header = tachyons("header")`
w-100 fixed-ns left-0 ph4-ns left-0 top-0 right-0 z-2 bb b--light-gray bg-white o-90
`
const Nav = tachyons("nav")`
dt w-100 border-box pv1 wrap
`
// const ContainerLogo = tachyons("div")`

// `

const Navbar = class extends React.Component {

render() {
  return (
    <Header>
    <Nav role="navigation" aria-label="main-navigation">
      <HeaderLogo>
        <StyledLink
        to="/"
        title="Ajmal Afif">
          @ajmalafif
        </StyledLink>
      </HeaderLogo>
      <UnorderedList>
      <List>
          <StyledLink to="/about/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600,
            backgroundColor: 'rgba(0,85,255,.03)',
            borderBottom: '1px solid rgba(0,85,255, 0.1)'
          }}
          >
            About
          </StyledLink>
        </List>
      <List>
          <StyledLink to="/experience/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600,
            backgroundColor: 'rgba(0,85,255,.03)',
            borderBottom: '1px solid rgba(0,85,255, 0.1)'
          }}
          >
            Experience
          </StyledLink>
        </List>
        <List>
          <StyledLink to="/contact/examples/"
          activeStyle={{
            color: '#05f',
            fontWeight: 600,
            backgroundColor: 'rgba(0,85,255,.03)',
            borderBottom: '1px solid rgba(0,85,255, 0.1)'
          }}
          >
            Blog
          </StyledLink>
        </List>
      </UnorderedList>
    </Nav>
  </Header>
  )}
}

export default Navbar
