// pages/index.js
import React from 'react';
import Card from '../pages/bootcampCard.js';
import styles from '../pages/bootcampCard.jsx';
import Navbar from "@/pages/navbar";
import BootcampCardList from "@/pages/BootcampCardList";

const cards = [


    // ... (diğer kartlar)
];

const Home = () => {
  return (
    <div>
      <Navbar />
      {<BootcampCardList></BootcampCardList>}
    </div>
  );
};

export default Home;