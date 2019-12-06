import React, {Component} from 'react'
import './SignUp.css'
import Display from './Display'

class  SignUp extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            first: 'Enter Valid Input',
            last: 'Enter Valid Input',
            email: 'Enter Valid Input',
            number:'Enter Valid Input'
             
        }
    }
    get =() => {
        var first = document.getElementById('first').value
        var lastN = document.getElementById('last').value
        var emailID = document.getElementById('email').value
        var num = document.getElementById('num').value
        this.setState({
            first : first,
            last: lastN,
            email: emailID,
            number: num
    })
       
    }
    form(){
        
        document.getElementById('info').style.visibility='visible'
        document.getElementById('form').style.visibility='hidden'
    }
    
    render(){
        return (
            <div className='contain'>
                <div className='main-sign' id='form'>
                <h1>Sign Up</h1>
                <hr />
                <form>
                <div className='form-group'>
                    <label>First Name:</label>
                    <input type='text' id='first' required  className='form-control' onChange={this.get} />
                </div>
                <div className='form-group'>
                    <label>Last Name:</label>
                    <input type='text' id='last' required className='form-control' onChange={this.get} />
                </div>          
               <div className='form-group'>
                    <label>Email ID:</label>
                    <input type='email' id='email' required className='form-control' onChange={this.get}/>
                </div>          
                <div className='form-group'>
                    <label>Contact No.:</label>
                    <input type='number' id='num' required className='form-control' onChange={this.get}/>
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input type='password' required className='form-control'/>
                </div>
                
                <button type='button' onClick={this.form} className='btn btn-primary'>Submit</button>
                </form>
                </div>
                < div id='info'>
                <Display  firstName={this.state.first} lastName={this.state.last} email={this.state.email} num={this.state.number} />
                </div>
            </div>
        )
    }
}

export default SignUp
