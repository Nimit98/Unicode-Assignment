import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div id="nav">
            <h1 id="task">Nimit's Tasks</h1>
            <ul className='task-list'>
                <li className='Mains'>Task 1</li>

                <Link to='/resume'>
                    <li className='tasks'>Resume</li>
                </Link>

                <li className='Mains'>Task 2</li>

                <Link to='/signup'>
                    <li className='tasks'>SignUp</li>
                </Link>

                <Link to='/temperature-conversion'>
                    <li className='tasks'>Temperature Conversion</li>
                </Link>

                <li className='Mains'>Task 3</li>

                <Link to='/zomatoAPI'>
                    <li className='tasks'>Zomato API</li>
                </Link>
                
            </ul>
        </div>
    )
}

export default Nav
