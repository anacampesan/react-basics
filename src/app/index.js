import React from 'react';
import { render } from 'react-dom';

var app = window.document.getElementById('app');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

render(<App/>, app);
