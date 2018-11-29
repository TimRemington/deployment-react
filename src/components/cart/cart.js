import React, { Component } from 'react'
import { SideNav, Button, SideNavItem } from 'react-materialize'
import BookCart from "../book-cart/book-cart"

class Cart extends Component {
  render(){
    const { books } = this.props
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return(
      <SideNav trigger={<Button className='red' waves='light'>Cart</Button>} options={{ closeOnClick: true }}>
          {books.filter((book)=>(book.inCart === true)).map((book, idx)=>(
            <BookCart book={book} key={idx}/>
          ))}
          <SideNavItem href={null}>${books.filter((book)=>(book.inCart===true)).map((book)=>(book=book.price)).reduce(reducer, 0)}.00</SideNavItem>
      </SideNav>
    )

  }
}

export default Cart
