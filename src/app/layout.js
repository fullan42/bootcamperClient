// pages/index.js
import React from 'react';
import Card from '../pages/bootcamptcard.js';
import styles from '../pages/bootcampcardstyle.jsx';
import BootcampCardList from "@/pages/bootcampcardlist";
import Navbar from "@/pages/navbar";
import Carouselbootcamp from "@/pages/carouselbootcamp";
import Gallery from "@/pages/carouselbootcamp";
import Head from "next/head";



const Home = () => {
    return (
        <div>


            <Navbar/>
            <Carouselbootcamp> </Carouselbootcamp>
            <BootcampCardList></BootcampCardList>


        </div>
    );
};

export default Home;