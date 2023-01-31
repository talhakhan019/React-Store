import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <>
        <div className="header">
            <div className="left-nav">
                <img src="../images/logo.png" alt="logo"/>
            </div>
            <div className="mid-nav">
                <input type="text" placeholder='What are you looking for?'/>
                <SearchIcon/>
            </div>
            <div className="mid-nav-2">
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
            <div className="right-nav">
                <button className='signin'>Sign In/Up</button>
                <button className='cart-button'>
                    <ShoppingCartIcon/>
                    <span>0</span>
                </button>
            </div>
        </div>
        </>
    )
}

export default Header
