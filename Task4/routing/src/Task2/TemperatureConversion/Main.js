import React, { Component } from 'react'
import './Main.css'
 

class Main extends Component {
    constructor(){
        super();

        this.state = {
            fahrenheitValue: 0,
            kelvinValue: 0
        }
    }

    fahrenheit(){
            var input = document.getElementById('input').value;
            if(input===""){
                alert('Enter valid Input')
            }
            else{
            this.setState({
                fahrenheitValue: (input*(9/5)) + 32
            })
            document.getElementById('fahoutput').style.visibility='visible';
            document.getElementById('keloutput').style.visibility='hidden';

        }
    }
    kelvin(){
        var input = document.getElementById('input').value;
        if(input===""){
            alert('Enter valid Input')
        }
        else{
        this.setState({
            kelvinValue: (input*1) + 273
        })
        document.getElementById('fahoutput').style.visibility='hidden';
        document.getElementById('keloutput').style.visibility='visible';

    }
}

    render() {
        return (
            <div className='main-temp'>
            <div className='container'>
                <form>
                    <div className='form-group'>
                        <label>Enter Temperature in Degree Celcius:</label>
                        <input required type='number' placeholder='Enter Temperature' className='form-control' id='input' />
                    </div>
                    <button onClick={() => this.fahrenheit()} className='btn btn-primary' type='button'>Convert in Degree Fahrenheit</button>
                    <button onClick={() => this.kelvin()} className='btn btn-primary' type='button'>Convert in Degree Kelvin</button>
                    <hr />
                    <p id='fahoutput'>Degree Fahrenheit = {this.state.fahrenheitValue}</p>
                    <p id='keloutput'>Degree Kelvin = {this.state.kelvinValue}</p>
                </form>
            </div>
            </div>
        )
    }
}

export default Main