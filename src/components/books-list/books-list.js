import React, { Component } from 'react'
import Book from '../book/book.js'
import { Collection, CollectionItem } from 'react-materialize'

class BooksList extends Component {
  render() {
    const { books, addRemoveCart } = this.props
    return (
      <div>
        <Collection className="list-group">
          <CollectionItem></CollectionItem>
          { books.map((book, idx) => ( <Book addRemoveCart={addRemoveCart} key={ idx } book={ book } /> ))}
        </Collection>
      </div>
    )
  }
}

export default BooksList
