import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';



const props = { message: "hi there", message2:"you good?"}
ReactDOM.render(
  <AuthorQuiz {...props}/>,
  document.getElementById('root') as HTMLElement
);



