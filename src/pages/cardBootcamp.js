import React from 'react';
import Link from 'next/link';

const Card = ({ link, name, img_url, date,place }) => (
  <div className="card rounded-lg bg-white overflow-hidden">
    <img src={img_url} alt={name} className="object-cover" />
    <div className="text-lg w-full mt-5 h-10">
      <h2 className="bg-white text-center">{name}</h2>
    </div>
    <div className="border-t border-gray-300 mt-5 pt-3 text-center">
      <Link href={link} className="text-white bg-purple-500 hover:bg-purple-700 border border-purple-500 rounded-md py-2 px-4 inline-block">
          More
      </Link>
    </div>
  </div>
);

export default Card;
