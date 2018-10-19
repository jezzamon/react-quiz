import * as React from 'react';
import './AddAuthorForm.css';

//
// AUTHOR FORM COMPONENT
//
interface IAuthorFormProps {
  name: string, imageUrl: string, books: string[],[x:number]: any, bookTemp: string
}

class AuthorForm extends React.Component<{onAddAuthor: Function}, IAuthorFormProps> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Test',
      imageUrl: 'test',
      books: [],
      bookTemp: ''
    }
    
  }

  onFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddAuthor(this.state);
  }

  handleAddBook = (event) => {
    // this.props.onAddAuthor(this.state)
    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
              <div className="AddAuthorForm_input">
                <label htmlFor="name">Name</label>
                <input 
                      type='text' 
                      name="name" 
                      value={this.state.name}
                      onChange={this.onFieldChange}
                      />
              </div>

              <div className="AddAuthorForm_input">
                <label htmlFor="imageUrl">Name</label>
                <input 
                      id="imageUrl" 
                      type='text' 
                      name="imageUrl" 
                      value={this.state.imageUrl}
                      onChange={this.onFieldChange}/>
              </div>

              <div className="AddAuthorForm_input">
                {this.state.books.map((book) => <p key={book}>{book}</p>)}
                <label htmlFor="bookTemp">Books</label>
                <input
                      id="bookTemp"
                      type="text"
                      name="bookTemp"
                      value={this.state.bookTemp}
                      onChange={this.onFieldChange}
                      />
                <input type="button" value="+" onClick={this.handleAddBook}/>
              </div>
              <input type="submit" value="add"/>
            </form>
    )
  }

}
// 
// ADD AUTHOR FORM COMPONENT
// 

const AddAuthorForm = ({onAddAuthor}) => {

  // const text= 'hello';
  return (<div className="AddAuthorForm">
            <h1>Add Author</h1>
            <AuthorForm onAddAuthor={onAddAuthor}/>
            
          </div>)
}

export default AddAuthorForm;