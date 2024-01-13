// components/Card.js
import React from 'react';

const Card = ({ name, description, imageUrl }) => (
  <div className="card">
    <img src={imageUrl} alt={name} />
    <div className="card-content">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default Card;
