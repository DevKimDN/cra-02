import React, { Component } from 'react'

export default class Course2 extends Component {
    constructor(props) {
        super(props);
        this.state = {NumberStudent : this.props.NumberStudent};
      }


    Increase = ()=> {
        this.setState({ NumberStudent: parseInt(this.state.NumberStudent) +1})
    }
       

    render() {
        return (
            <div>
                  <div className = "Course">
            <p>COURSE: {this.props.CourseName}</p>  
              <p>Number sv: {this.state.NumberStudent}</p> 
              <button onClick = {this.Increase}>+ Student</button>
          </div>
            </div>
        )
    }
}
