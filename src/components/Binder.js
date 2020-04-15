import React, { Component } from 'react';

class Binder extends Component {
  constructor() {
    super();
    this.state = {
      text: 'Hello state',
      somethingText: 'Did Not Click handle something',
    };
  }

  onClickMe = () => {
    console.log(this);
  };

  handleSomething = () => {
    this.setState({
      somethingText: 'Clicked on HandleSomething',
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.somethingText}</h1>
        <button
          className="ui primary button"
          style={{ margin: '10px 15px' }}
          onClick={this.onClickMe}
        >
          Click Me
        </button>
        <button
          className="ui black button"
          style={{ margin: '10px 15px' }}
          onClick={(this.handleSomething)}
        >
          Do Something
        </button>
      </div>
    );
  }
}
export default Binder;
