import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'; 
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import {authors} from './authors';


import './index.css';

import {shuffle, sample} from 'underscore';

// import registerServiceWorker from './registerServiceWorker';

const getTurnData = (authors:Array<any>) => {
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

const onAnswerSelected = (answer) => {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

interface state { turnData: any, highlight: string, onAnswerSelected: any; text: string, onContinue: Function}
const state = {
  turnData: getTurnData(authors),
  highlight: 'correct',
  onAnswerSelected: onAnswerSelected,
  onContinue: resetState
}



function App() {
  return <AuthorQuiz {...state}/>  
}

function onAddAuthor(author) {
  
    console.log('hello');
    authors.push(author)
}

function resetState() {
  resetState();
  render();
}


const AddAuthorProps = { onAddAuthor: onAddAuthor }


function AuthorWrapper() {
  return <AddAuthorForm {...AddAuthorProps}/>

}

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route  path="/add" component={AuthorWrapper} />
      </React.Fragment>
      
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
  );
}
render();




