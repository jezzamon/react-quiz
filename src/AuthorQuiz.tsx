import * as React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import {ITurnProps} from './Interfaces'

// import logo from './logo.svg';

// TODO
import './bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';

// STATELESS
// type AppProps = {message : string }
// const App: React.SFC<AppProps> = ({message}) => <div>{message}</div>;

const Hero:React.SFC = () => (
  <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Author Quiz</h1> 
      <p>Select the book written by author shown</p>
    </div>
  </div> )

// BOOK COMPONENT
interface IBookProps { title: string, onClick: Function}
const Book:React.SFC<IBookProps> = ({title, onClick}) => {
    
    return (
      <div className="answer" onClick={() => {onClick(title);}}>
        <h4>{title}</h4> 
        </div>) 
        }


// TURN COMPONENT
const Turn: React.SFC<ITurnProps> = ({turnData, highlight, onAnswerSelected}) =>  {
  console.log('highlight', highlight)
  function highlightToBgColor(highlight) {
    console.log('highlight', highlight)
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    }
    return mapping[highlight];
  }
  console.log(turnData, highlight, 'answer selected function - ', onAnswerSelected)
  
  return (<div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
    <div className="col-md-4 offset-1">
      <img src={turnData.author.imageUrl} className="authorimage" alt="author"/>
    </div>
    <div className="col-md-6">
    {turnData.books.map( (title) => (<Book onClick={onAnswerSelected} title={title} key={title}>{title}</Book>)) }
    </div>
  </div>)
}
  
  

interface IContinueProps { show: boolean, onContinue: Function}
const Continue: React.SFC<IContinueProps> = ({show, onContinue}) => {
  return (
    <div className="row continue">
      { show 
        ? <div className="col-11">
            <button className="btn btn-primary btn-lg float-right"></button>
          </div> 
        : null 
      }
    </div>
  )
}

const Footer: React.SFC = () => (
  <div id="footer" className="row">
    <div className="col-md-12">
      <p className="text-muted credit">All images are from <a href="https://commons.wikimedia.org">Wikimedia</a></p>
    </div>

  </div>
)

const AuthorQuiz = ({turnData, highlight, onAnswerSelected, onContinue} ) => {
  
  return (<div className="container-fluid">
          {/* <button data-arg="A" onClick={this.handleClick}>A was clicked {this.state.letter}</button> */}
          <Hero/>
          <Turn turnData={turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
          <Continue show={highlight === 'correct'} onContinue={onContinue}/>
          <p><Link to="/add">Add an author</Link></p>
          <Footer/>
        </div>)

}

export default AuthorQuiz;








