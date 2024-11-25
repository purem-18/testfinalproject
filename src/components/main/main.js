import React from 'react';
import { useNavigate } from 'react-router-dom';
import restaurantpic from "../../assets/images/restauranfood.jpg";
import greeksalad from "../../assets/images/greek salad.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";
import lemondessert from "../../assets/images/lemon dessert.jpg";
import "./main.css";

const Main = () => {
  const navigate = useNavigate();

  const handleOnlineMenuClick = () => {
    navigate('/menu');
  };

  const handleReservationButtonClick = () => {
    navigate('/reservations');
  };

  return (
    <main>
      {/* First article */}
      <article className='promo-banner'>
        <div className="section-container">
          <div className='text-content'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button
              className='neon-button'
              onClick={handleReservationButtonClick}
              aria-label="Reserve a table"
            >
              Reserve a table
            </button>
          </div>
          <div className='banner-img'>
            <img src={restaurantpic} alt="Interior of Little Lemon restaurant" width="300px" />
          </div>
        </div>
      </article>

      {/* Second article */}
      <article className='weeks-special'>
        <div className="section-container">
          <header className="above-cards">
            <h2>This week's special!</h2>
            <button
              className='neon-button'
              onClick={handleOnlineMenuClick}
              aria-label="View online menu"
            >
              Online Menu
            </button>
          </header>
          <div className='weeks-special-menu-card'>
            <section aria-labelledby="greek-salad-title">
              <img src={greeksalad} alt="Greek salad" width="264px" height="184px" />
              <div className="menu-card-textbox">
                <h3 id="greek-salad-title">Greek Salad</h3>
                <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <a href="./#" aria-label="Order Greek Salad delivery">Order a delivery</a>
              </div>
            </section>

            <section aria-labelledby="bruschetta-title">
              <img src={bruchetta} alt="Bruschetta" width="264px" height="184px" />
              <div className="menu-card-textbox">
                <h3 id="bruschetta-title">Bruschetta</h3>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.</p>
                <a href="./#" aria-label="Order Bruschetta delivery">Order a delivery</a>
              </div>
            </section>

            <section aria-labelledby="lemon-dessert-title">
              <img src={lemondessert} alt="Lemon dessert" width="264px" height="184px" />
              <div className="menu-card-textbox">
                <h3 id="lemon-dessert-title">Lemon Dessert</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita itaque reprehenderit ipsam modi iure id? Doloribus saepe ratione autem accusantium, earum consequuntur incidunt ex fugiat et, porro magnam error id?</p>
                <a href="./#" aria-label="Order Lemon Dessert delivery">Order a delivery</a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Main;