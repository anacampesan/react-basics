import React from 'react';
import { render } from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

var app = window.document.getElementById('app');

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
          <div className="col-xs-10 col-xs-offset-1">
            <Home/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, app);
