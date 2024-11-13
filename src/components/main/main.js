import React from 'react'
import restaurantpic from "../../assets/images/restauranfood.jpg"
import "./main.css"

const Main = () => {
  return (
    <main>
      <article className='promo-banner'>
        <div className='text-content'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem obcaecati corrupti ullam. Sunt iste quo nobis repudiandae totam consectetur error harum nulla quibusdam rem. A distinctio quaerat quam modi beatae?
          </p>
          <button className='neon-button'>Reserve a table</button>
        </div>
        <div className='banner-img'> 
          <img src={restaurantpic} alt="restaurant pic" width="300px"/>
        </div>
      </article>
      <article className='weeks-special'>
        <div className="above-cards">
          <h2>This weeks special!</h2>
          <button>Online Menu</button>
        </div>
        <div className='weeks-special-menu-card'>
          <section>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque reprehenderit ipsam modi iure id? Doloribus saepe ratione autem accusantium, earum consequuntur incidunt ex fugiat et, porro magnam error id?</p>
          </section>
          <section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque reprehenderit ipsam modi iure id? Doloribus saepe ratione autem accusantium, earum consequuntur incidunt ex fugiat et, porro magnam error id?</p>
          </section>
          <section>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque reprehenderit ipsam modi iure id? Doloribus saepe ratione autem accusantium, earum consequuntur incidunt ex fugiat et, porro magnam error id?</p>
          </section>
        </div>
      </article>
    </main>
  )
}

export default Main
