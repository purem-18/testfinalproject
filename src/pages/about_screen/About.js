import React from 'react';
import ownerImage from '../../assets/images/Mario and Adrian A.jpg';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. The restaurant
            features a locally-sourced menu with daily specials, bringing the flavors
            of the Mediterranean to the heart of Chicago.
          </p>
          <p>
            Our story began with two Italian brothers, Mario and Adrian, who moved
            to Chicago to pursue their shared dream of owning a restaurant. Little
            Lemon was born out of their passion for food, family recipes, and warm
            hospitality.
          </p>
          <p>
            Today, Little Lemon is a beloved part of the Chicago food scene, known
            for its delightful dishes, refreshing cocktails, and the warm, inviting
            atmosphere that makes every guest feel like family.
          </p>
        </div>
        <div className="about-image">
          <img src={ownerImage} alt="Little Lemon Owners" />
        </div>
      </div>
    </div>
  );
};

export default About;