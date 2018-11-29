import React, { Component } from 'react'
import { CollectionItem, Row, Col, Button } from 'react-materialize'

class Book extends Component {
  render() {
    const { book, addRemoveCart } = this.props
    return (
      <CollectionItem className="container">
        <Row>
          <h5>{book.title}: {book.subtitle}</h5>
        </Row>
        <Row>
          <Col><b>By </b>{book.author}</Col>
          <Col><b>Price: </b>${book.price}</Col>
          <Col>Button</Col>
        </Row>
        <Row>
          <Col><b>Description: </b>{book.description}</Col>
          <br></br>
          <Col className='valign center-align'><Button onClick={()=>addRemoveCart(book.id, true)} waves='light'><i className="material-icons">ADD</i></Button></Col>
          <Col className='valign center-align'><Button onClick={()=>addRemoveCart(book.id, false)} waves='light'><i className="material-icons">REMOVE</i></Button></Col>
        </Row>
        <br></br>
      </CollectionItem>
    )
  }
}

export default Book
