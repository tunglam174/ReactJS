import React, { Component } from 'react';

class Reset extends Component {

  onReset = () => {
    this.props.onResetDefault(true);
  }

  render(){
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.onReset}
      >
        Reset
      </button>
    );
  }
}

export default Reset;
