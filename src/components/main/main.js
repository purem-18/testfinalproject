import React from 'react'
import { useNavigate } from 'react-router-dom'
import restaurantpic from "../../assets/images/restauranfood.jpg"
import greeksalad from "../../assets/images/greek salad.jpg"
import bruchetta from "../../assets/images/bruchetta.svg"
import lemondessert from "../../assets/images/lemon dessert.jpg"
import "./main.css"

const Main = () => {
  const navigate = useNavigate();

  const handleOnlineMenuClick = ()=>{
    navigate('/menu');
  };
  const handleReservationButtonClick =()=>{
    navigate('/reservations')
  }
  return (
    <main>
        {/*First article*/}
      <article className='promo-banner'>
        <div className="section-container">
          <div className='text-content'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className='neon-button' onClick={handleReservationButtonClick}>Reserve a table</button>
          </div>
          <div className='banner-img'>
            <img src={restaurantpic} alt="restaurant pic" width="300px"/>
          </div>
        </div>
      </article>
      {/*Second article */}
      <article className='weeks-special'>
        <div className="section-container">
          <div className="above-cards">
            <h2>This weeks special!</h2>
            <button className='neon-button' onClick={handleOnlineMenuClick}>Online Menu</button>
          </div>
          <div className='weeks-special-menu-card'>
            <section>
              <img src={greeksalad} alt="greek salad pic" width="264px" height="184px"/>
              <div className="menu-card-textbox">
                <h1>Greek Salad</h1>
                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                <a href="./#">Order a delivery</a>
              </div>
            </section>
            <section>
            <img src={bruchetta} alt="Bruchetta pic" width="264px" height="184px"/>
            <div className="menu-card-textbox">
              <h1>Bruchetta</h1>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</p>
              <a href="./#">Order a delivery</a>
            </div>
            </section>
            <section>
            <img src={lemondessert} alt="Lemon Dessert pic" width="264px" height="184px"/>
            <div className="menu-card-textbox">
              <h1>Lemon dessert</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque reprehenderit ipsam modi iure id? Doloribus saepe ratione autem accusantium, earum consequuntur incidunt ex fugiat et, porro magnam error id?</p>
            <a href="./#">Order a delivery</a>
            </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Main
