import * as React from 'react';

import './App.css';

// import logo from './logo.svg';

// TODO
import './bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';

// STATELESS
// type AppProps = {message : string }
// const App: React.SFC<AppProps> = ({message}) => <div>{message}</div>;


interface IAppProps { message: string, message2: string}
interface IAppState { count: number, letter: any} 
// STATEFUL
class AuthorQuizClass extends React.Component <IAppProps, IAppState> {
  constructor(state) {
      super(state);
      this.state = {  
        count: 0 , 
        letter: 'A'
      }
      
  }

  public increment = () => {
    this.setState({
        count: this.state.count + 1
    })
  }

  public handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
  // public handleClick = (event: CustomEvent) => {
    
    const newLet = event.currentTarget.dataset.arg
    console.log(newLet)
    this.setState({
      letter: newLet
    })
    
  }

  public renderclickyButton = () => {
    return (
      <div>Here I am</div>
    )
  }

  public render() {
    // let author = {imageUrl: "string"}
    // let books = {imageUrl: "string"}
      return (
        <div className="container-fluid">
          <button data-arg="A" onClick={this.handleClick}>A was clicked {this.state.letter}</button>
          
        </div>
          
      );
  }

  
}

export default AuthorQuizClass;