import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  render() {
    console.log(this.state);
    
    return (
      <ul>
        <li>Nodejs</li>
        <li>React</li>
        <li>React Native</li>
      </ul>
    )
  }
}

export default TechList;
