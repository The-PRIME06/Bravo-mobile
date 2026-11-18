import React from 'react'
import "./hsearch.css"

const Hsearch = () => {
  return (
    <div className='container'>
        <div className="search-box">
            <button className='ent'><i class="fa-regular fa-user  ic"></i>Kirish</button>
            <div className='search'>
                <select className='searching1' name="" id="">
                    <option value="">Barchasi</option>
                    <option value="">Quloqchinlar</option>
                    <option value="">G'iloflar</option>
                    <option value="">Quvvatlagichlar</option>
                    <option value="">Karnaylar</option>
                    <option value="">Himoya shishalari</option>
                </select>
                <input className='searching' type="text" placeholder='Mahsulotni qidirish' />
                <button className='qidir'><i class="fa-solid fa-magnifying-glass"></i> Qidirish</button>
            </div>
                 <div id='icons'>  <i class="fa-regular fa-heart black"></i><i class="fa-solid fa-cart-shopping black"></i></div>
        </div>
        
    </div>
  )
}

export default Hsearch