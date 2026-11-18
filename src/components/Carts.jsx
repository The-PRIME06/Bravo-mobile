import React from 'react'
import "./Carts.css"
import Logo from "../assets/Logo.jpg"

const Carts = () => {
  return (
    <section>
        <div className="container">
            <ul className='cart-list'>
        <li className='cart'>
            <img className='cart-img' src={Logo} alt="Logo" />
            <div className='cart-box'>
                <p className='about'>Samsung 33W zaryadlagich</p>
                <span className='price'>13000 so'm</span>
                <div className='icons'>
                    <i class="fa-regular fa-heart cart-i"></i>
                    <i class="fa-solid fa-cart-shopping cart-i"></i></div></div>
        </li>
        </ul>
        </div>
        </section>
  )
}

export default Carts