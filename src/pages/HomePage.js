import React from 'react';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

function HomePage(props){
    return(
        <div className="HomePage">
            <Hero title={props.title} subTitle={props.subTitle} smallTitle={props.smallTitle} />
            <Carousel />
        </div>
    );
}

export default HomePage;
