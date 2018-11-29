// Imports
import React, { Component } from 'react';
import "./App.css"
import Navigator from '../navigator/navigator.js'
import BooksList from "../books-list/books-list.js"
import SearchBar from "../search-bar/search-bar.js"

class App extends Component {
// Constructor or intial state. Has books and filtered books so I only make 1 API call.
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      filteredBooks: []
    }
  }

  // API Call
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json, filteredBooks: json})
  }

  // Filter through the books the get the specific item desired
  filtering(prop){
    if(prop.value !== ""){
      const filteredBooks = this.state.books.filter((book)=>(book.title.includes(prop.value) || book.subtitle.includes(prop.value) || book.description.includes(prop.value) || book.author === prop.value || book.publisher === prop.value))
      console.log(filteredBooks);
      if(filteredBooks.length > 0){
        this.setState({
          ...this.state,
          filteredBooks: filteredBooks
        })
      }else{
        this.setState({
          ...this.state,
          filteredBooks: this.state.books
        })
        window.Materialize.toast('No Results', 1000)
      }
    }else{
      this.setState({
        ...this.state,
        filteredBooks: this.state.books
      })
      window.Materialize.toast('No Results', 1000)
    }
  }

  filterReset(prop){
    this.setState({
      ...this.state,
      filteredBooks: this.state.books
    })
  }

  // Remove an item form the cart
  addRemoveCart(id, prop){
    const changedBook = this.state.books.filter((book)=>(book.id === id))[0]
    const unchangedBooks = this.state.books.filter((book)=>(book.id !== id))
    changedBook.inCart = prop
    this.setState({
      ...this.state,
      books: [...unchangedBooks, changedBook],
      filteredBooks: [...unchangedBooks, changedBook]
    })
  }

  // Render function 
  render() {
    return (
      <div>
        <div>
          <SearchBar />
        </div>
        <div>
          <Navigator filterReset={this.filterReset.bind(this)} filtering={this.filtering.bind(this)} books={this.state.books}/>
          <BooksList addRemoveCart={this.addRemoveCart.bind(this)} books={this.state.filteredBooks} />
        </div>
      </div>
    );
  }
}

export default App;
