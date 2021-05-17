import React, { Component } from "react";

function fc(mess) {
  alert(mess);
};

export default class ButtonChin extends Component {



  render() {
    return (
      <div>
        <button onClick={()=> fc(this.props.children + "XONG ") }> 
          {this.props.children}
        </button>
      </div>
    );
  }
}
