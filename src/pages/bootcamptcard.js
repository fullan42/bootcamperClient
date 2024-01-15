// pages/Card.js
import React from 'react';

const Card = ({name, description, img_url}) => (
    <div className="card rounded-lg bg-teal-500	 overflow-hidden ">
        <img src={img_url} alt={name} className="w-full h-auto object-cover "/>
        <div className="text-lg">
            <h2 className=" bg-teal-300	 text-center">{name}</h2>
            <p className=" bg-teal-500 p-4 text-sm ">{description}</p>
        </div>
    </div>
);


export default Card;

