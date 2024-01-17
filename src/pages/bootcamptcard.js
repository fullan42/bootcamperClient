// pages/Card.js
import React from 'react';

const Card = ({name, description, img_url}) => (
    <div className="card rounded-lg bg-white overflow-hidden ">
        <img src={img_url} alt={name} className=" object-cover "/>
        <div className="text-lg w-full mt-5 h-10">
            <h2 className=" bg-white 	 text-center">{name}</h2>
        </div>
        <div>
            <p className=" bg-white mt-5 p-1 w-full h-10 text-sm ">{description} </p>
        </div>
    </div>
);


export default Card;
