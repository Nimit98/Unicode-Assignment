import React, { Component } from 'react'
import './Display.css'

class Display extends Component {

    render() {
        return (
           
            <div className='info'>
                <p>Your Name is <span>{this.props.firstName} {this.props.lastName}</span> </p>
                <p>Your Email ID is <span> {this.props.email} </span> </p>
                <p>Your Contact Number is <span> {this.props.num}</span> </p>
            </div>
             
        )
    }
}

export default Display
