import React from 'react'
import "./categ.css"

const Categ = () => {
  return (
    <section>
      <div className="container">
        <ul className='cat-list'>
          <li><button className='cat-btns'><h3>Barchasi</h3></button></li>
          <li><button className='cat-btns'><h3>Quloqchinlar</h3></button></li>
          <li><button className='cat-btns'><h3>G'iloflar</h3></button></li>
          <li><button className='cat-btns'><h3>Quvvatlagichlar</h3></button></li>
          <li><button className='cat-btns'><h3>Karnaylar</h3></button></li>
          <li><button className='cat-btns'><h3>Himoya Shishalari</h3></button></li>
        </ul>
      </div>
    </section>
  )
}

export default Categ