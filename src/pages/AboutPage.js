import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <div className="cover-heading">              
                    <p className="text-muted h4 text-justify"> I am currently a student at Centennial College and I am in my
                    forth and last semester of the Software Engineering Technician program. I am originally from Rio de Janeiro, Brazil.</p>
                    <p className="text-muted h4 text-justify">I seek to improve my programming language skills and become a good 
                    programmer. My focus is to try to always search for opportunities to grow and learn the trending new technologies as much as possible. 
                    I would like to learn more about Python and Machine Learning in the future. Also, I want to create reliable and 
                    meaningful software applications.</p>
                </div>
            </Content>
        </div>
    );
}

export default AboutPage;