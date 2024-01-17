

import React from 'react';
import Card from '@/pages/cardBootcamp.js';
import styles from '../styles/bootcampcardstyle.jsx';
import BootcampCardList from "@/pages/cardList";
import Navbar from "@/pages/navbar";
import Carouselbootcamp, {CarouselWithContent} from "@/pages/CarouselWithContent";
import Falanfilan from "@/pages/falanfilan";




const Home = () => {
    return (
        <div className="bg-gray-200">


            <Navbar/>
            <Falanfilan> </Falanfilan>
            <BootcampCardList></BootcampCardList>


        </div>
    );
};

export default Home;