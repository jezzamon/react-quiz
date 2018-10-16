import * as React from 'react';
import * as ReactDOM from 'react-dom';

const moment = new Date(2018, 11, 24, 10);

function Hello(props) {
  return <h1> Hello at {props.now}</h1>;
}

describe('when testing directly', () => {
 let result;
 beforeAll(() => {
  result = Hello({now : moment.toISOString()});
 })
 
  it("returns a value", () => {
    expect(result).not.toBeNull();
  })
  
  it('it is a h1', () => {
    expect(result.type).toBe("h1")  
  });

  it('has children', () => {
    expect(result.props.children).toBeTruthy();
  })
})

describe('when testing with ReactDom', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Hello now={moment.toISOString()} />, div)
  })
})