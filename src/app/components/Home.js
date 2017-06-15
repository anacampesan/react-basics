import React from 'react';

export class Home extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h1>Hello World!</h1>
            <p>I'm { this.props.user.name }. I am { this.props.user.age } years old, and I like:</p>
            <ul>
              { this.props.user.hobbies.map((hobby)=> <li>{ hobby }</li>) }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
