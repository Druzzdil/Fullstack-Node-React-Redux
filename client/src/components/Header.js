import React, { Component } from 'react';

 export default class Header extends Component {

  constructor(props){
    super(props);

  }

  render() {
    return (
      <nav style={{backgroundColor: '#AB8ECD'}}>
        <div className="nav-wrapper">
          <a href="" style={{marginLeft: '20px'}} className="brand-logo">Emaily</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="" style={{marginRight: '20px'}}>Login with Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
