import React, { Component } from 'react'
import './Body.css'
import Image from './nimit1.jpg'

class Body extends Component {
    render() {
        return (
            <div className='body'>
                
                <img className='pic' src={Image} alt='ProfileImage' />
                <h1 className='skill'>Skills</h1>
                <ul id='list1'>
                    <li className='items'>HTML </li>
                    <li className='items'>CSS </li>
                    <li className='items'>Javascript </li>
                </ul>
                <ul id='list2'>
                    <li className='items'>React JS </li>
                    <li className='items'>Java </li>
                    <li className='items'>C Language </li>
                </ul>
                <br /><br /><br /><br /><br /><br />
                <h1 id='educ'>Education</h1>
                <h2> School Name: HVB Academy </h2>
                <h2> 10th Percentage: 93% </h2>
                <br />
                <h2>Junior College Name: Pace Junior Science College </h2>
                <h2>12th Percentage: 94%</h2>
                <br />
                <h2>College Name: D J Sanghvi College of Engineering</h2>
                <h2>1st Sem Percentile: 9.67</h2>
                <h2>2nd Sem Percentile: 8.96</h2>
                <h2>In the Unicode Committee</h2>

                <h1 id='hobbies'>Hobbies</h1>
                <ul>
                    <li className='hobby'>Sports</li>
                    <li className='hobby'>Reading</li>
                    <li className='hobby'>Movies</li>
                </ul>


            </div>
        )
    }
}

export default Body
