import React, { Component } from 'react'
import axios from 'axios'
import './Main.css'
require('dotenv').config();

class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            dishes: [],
            error:[],
            value : false
        }
    }

    componentDidMount(){
       
        axios.get('https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624&apikey=' + process.env.REACT_APP_API_KEY )
        // ENTER YOUR API KEY IN .env FILE AS REACT_APP_API_KEY
        .then(res => {
            this.setState({dishes: res.data.daily_menus[1].daily_menu.dishes})
            this.setState({value: true})
        })
        .catch(err => {
            this.setState({error: 'Enter Valid API Key'})
        })
        }
        

    render() {
        return(
            <div id='items'>
                <div className='contain'>
                    <div className='row'>
                        <div className='col-md-6'>
                             <h1>Dishes</h1>
                             <hr />
                        </div>
                        <div className='col-md-4'>
                             <h2>Price</h2>
                             <hr />
                        </div>
                         
                    </div>
             {
                this.state.value ? 
                
                this.state.dishes.map((item) =>
                <div class='row'>
                    <div className='col-md-6'>
                         <p>{item.dish.name}</p>
                         <hr />  
                    </div>
                    <div className='col-md-4'>
                        {item.dish.price}
                        <hr />  
                    </div>
                </div>     
                                       
                )
                :
                <p >Loading.... <br />Wait while dishes are being prepared</p>
                
             }  
             </div>
             {
                 this.state.error ? <div className='alert'>{this.state.error}</div> : null
             }                
             </div>
        )
        
       
    }
}

export default Main
