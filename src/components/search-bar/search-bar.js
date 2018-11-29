import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'

class SearchBar extends Component {
  render() {
    //const { book } = this.props
    return (
      <Navbar>
        <NavItem><h5>Welcome to Tim's React Bookstore!</h5></NavItem>
      </Navbar>
    )
  }
}

export default SearchBar
