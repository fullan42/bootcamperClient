// components/Card.js
import React from 'react';

const carouselimgcard = ({ img_url,name}) => (
    <div className="card rounded-lg bg-teal-500	border-solid border overflow-hidden ">
        <img src={img_url} alt={name} className="w-full h-auto object-cover "/>
    </div>
);


export default carouselimgcard;

