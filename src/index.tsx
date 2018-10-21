import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';


import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';

import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import {authors} from './authors';


import './index.css';

import {shuffle, sample} from 'underscore';

// import registerServiceWorker from './registerServiceWorker';


let store = Redux.createStore(reducer);

function getTurnData(authors:Array<any>) {
  const allBooks = authors.reduce( (p, c, i)=> {
    return p.concat(c.books);
  }, [])
  // console.log('authors', authors)
  // console.log('all books', allBooks)
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  // console.log('fourRandom books', fourRandomBooks);
  const answer = sample(fourRandomBooks);
  // console.log('sample one of the four random books', answer)

  return {
    books: fourRandomBooks,
    author: authors.find( x => x.books.some( title => title === answer))  // very useful!
    }

  
}


function reducer(state = {authors, turnData: getTurnData(authors), highlight: ''}, action) {
  switch (action.type) {
    case 'ANSWER_SELECTED':
      const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
      return Object.assign(
        {}, 
        state, { 
          highlight: isCorrect ? 'correct' : 'wrong'
      });
    case 'CONTINUE':
      return Object.assign(
        {}, 
        state, { 
          highlight: '',
          turnData: getTurnData(state.authors) 
      });
    default: return state;
  }
  return state;
}



function App() {
  return  <ReactRedux.Provider  store={store}>
            <AuthorQuiz/>  
          </ReactRedux.Provider> 
}

function onAddAuthor(author) {
  
    console.log('hello');
    authors.push(author)
}



const AddAuthorProps = { onAddAuthor: onAddAuthor }


function AuthorWrapper() {
  return <AddAuthorForm {...AddAuthorProps}/>

}


ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route  path="/add" component={AuthorWrapper} />
    </React.Fragment>
    
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
  );




