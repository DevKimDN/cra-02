import './Course.css'
import React, { PureComponent } from 'react'

export default class Course extends PureComponent {
    state = {NumberStudent : this.props.NumberStudent}

    Increase = ()=> {
        this.setState({ NumberStudent: parseInt(this.state.NumberStudent) +1})
    }
        
    

    render() {
        return (
            <div className = "Course">
            <p>COURSE: {this.props.CourseName}</p>  
              <p>Number student: {this.state.NumberStudent}</p> 
              <button onClick = {this.Increase}>Increse Student</button>
          </div>
        )
    }
}

