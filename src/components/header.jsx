import React from 'react'
import Logo from "../assets/Logo.jpg"
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className='img-box'>
            <img src={Logo} alt="Logo img" />
            <span className='logo-s'>Bravo</span>
          </div>
          <ul className='head-list'>
            <li className='head-items'><i className="fa-solid fa-location-dot"></i><a href="#locations">Manzilimiz</a></li>
            <li className='head-items'><i className="fa-brands fa-telegram"></i><a href="https://t.me/Bravo7270">Bizning Telegram Kanal</a></li>
            <li className='head-items'><i className="fa-brands fa-telegram"></i><a href="https://t.me/bravo_adminn" target="_blank" rel="noopener noreferrer">Admin bilan bog‘lanish</a></li>
            <li className='head-items'><i className="fa-solid fa-computer"></i><a href="https://t.me/the_prime_o6">Dasturchi</a></li>
            <li className='head-items'><i className="fa-solid fa-phone"></i><a href="tel:+998905547270">Aloqa uchun</a></li>
     
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header