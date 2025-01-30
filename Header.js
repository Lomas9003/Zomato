import React, { useState } from 'react'
import { Link } from 'react-router'

const Header = () => { 

    const[loginBtn , setloginBtn] = useState("Login")

  return (
    <div className='main'>
        <div id='logo'>
            <img id='img' src='https://swiggy-clone-food.netlify.app/assets/swiggy-dc653fcd.svg' alt='food-logo' />
            <p>Food Express</p>
        </div>
        <div id='nav-items'>
            <ul>
                <li>
                    <Link to = '/home'>
                    Home
                    </Link>
                    </li>
                <li>
                    <Link to='/offer'>
                    Offer
                    </Link>
                    </li>
                <li>
                    <Link to= '/about'>
                    About
                    </Link>
                    </li>
                <li>
                    <Link to='cart'>
                    Cart
                    </Link>
                    </li>
            </ul> 
        </div>
        <div id='login'>
            <button
            onClick={() => {
               
               loginBtn == "Login" ? setloginBtn("Logout") : setloginBtn("Login")
                
            }}
            >
                
            {loginBtn}</button> 
        </div>
    </div>
  )
}

export default Header;
