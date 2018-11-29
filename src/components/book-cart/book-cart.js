import React, { Component } from 'react'
import { SideNavItem } from 'react-materialize'

class BookCart extends Component {
  render(){
    const { book } = this.props
    return(
      <SideNavItem style={{overflow: 'auto'}} className="removeOverflow" href={null} price={book.price}>{book.title}</SideNavItem>
    )
  }
}

export default BookCart
