import React, { Component } from "react";

class ToggleTab extends Component {
  render() {
    return (
      <div className="Toggle-bar">
        <div
          className={this.props.showtodo ? "toggle currenttab" : "toggle"}
          onClick={() => this.props.toggletab()}
        >
          To-Do
        </div>
        <div
          className={this.props.showtodo ? "toggle" : "toggle currenttab"}
          onClick={() => this.props.toggletab()}
        >
          Completed
        </div>
      </div>
    );
  }
}

export default ToggleTab;
