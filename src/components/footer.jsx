import React from 'react'
import Logo from "../assets/Logo.jpg"
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="footer-box">
              <div className="foot-box">
              <div className="log-box">
                <img src={Logo} alt="Logo image" />
                <span className='logo-s'>Bravo mobile</span>
              </div>
                <p>Zamonaviy Aksessuarlar do'koni bu yerdan arzon va sifatli mahsulotlardan sotib olishingiz mumkin</p>
            </div>
            <ul className='foot-list1'>
                <li className='foot-list__items'><span className='aloqa'>Biz haqimizda</span></li>
                <li className='foot-list__items'><p>Manzil: Namangan Shahar Sardoba bozori atrofi</p></li>
                <li className='foot-list__items'>
                 <button className="btns"><i class="fa-brands fa-telegram logos2"></i></button>
                 <button className='btns'><i class="fa-brands fa-square-instagram logos2"></i></button>
                 <button className='btns'><i class="fa-solid fa-computer  logos2"></i></button>
                 </li>
            </ul>
          </div>
                
                

        </div>
    </footer>
  )
}

export default Footer