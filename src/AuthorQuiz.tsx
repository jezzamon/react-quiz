import * as React from 'react';

import './App.css';

// import logo from './logo.svg';

// TODO
import './bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';

// STATELESS
// type AppProps = {message : string }
// const App: React.SFC<AppProps> = ({message}) => <div>{message}</div>;

// STATEFUL
interface IAppProps { message: string, message2: string}

interface IAppState { count: number, letter: any} 

class AuthorQuiz extends React.Component <IAppProps, IAppState> {
  constructor(props) {
      super(props);
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
    
    const newLet = event.currentTarget.dataset.arg
    console.log(newLet)
    this.setState({
      letter: newLet
    })
    
  }

  
  public render() {

      

      return (
        <div>
          <div className="container" onClick={ this.increment } >Author Quiz { this.props.message}, has been clicked { this.state.count} times, {this.props.message2}</div>
          <button data-arg="B" onClick={this.handleClick}>A was clicked {this.state.letter}</button>
        </div>
          
      );
  }

  
}

export default AuthorQuiz;






