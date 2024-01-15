// pages/Card.js
import React from 'react';

const carouselimgcard = ({img_url, name}) => (
    <div className="bg-auto bg-no-repeat bg-center card rounded-lg 	border-solid border overflow-hidden bg-none "
         >
        <img src={img_url} alt={name} className="w-full  h-auto object-cover "/>
    </div>
);


export default carouselimgcard;

