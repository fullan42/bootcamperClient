

import React from 'react';
import Card from '@/pages/bootcamptcard.js';
import styles from '../styles/bootcampcardstyle.jsx';
import BootcampCardList from "@/pages/bootcampcardlist";
import Navbar from "@/pages/navbar";
import Carouselbootcamp, {CarouselWithContent} from "@/pages/CarouselWithContent";




const Home = () => {
    return (
        <div>


            <Navbar/>
            <CarouselWithContent> </CarouselWithContent>
            <BootcampCardList></BootcampCardList>


        </div>
    );
};

export default Home;