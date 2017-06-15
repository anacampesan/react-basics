import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

var app = window.document.getElementById('app');

class App extends React.Component {
  user = {
    name: 'Ana',
    age: 23,
    hobbies: ['programming', 'music', 'vaporwave']
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
          <div className="col-xs-10 col-xs-offset-1">
            <Home user={this.user}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, app);
