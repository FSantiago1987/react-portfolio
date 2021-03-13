import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import gnomontalk from '../assets/images/wall1.jpg';
import portfolio from '../assets/images/wall2.jpg';
import drivebuddy from '../assets/images/wall3.jpg';
import Card from './Card';

class Carousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Gnomontalk',
                    subTitle: 'daaaaaaaaaaaaaaaa',
                    imgSrc: gnomontalk,
                    link: "http://gnomontalk.com/",
                    selected: false
                },
                {
                    id: 1,
                    title: 'Portfolio',
                    subTitle: 'My first Portfolio',
                    imgSrc: portfolio,
                    link: "http://gnomontalk.com/",
                    selected: false
                },
                {
                    id: 2,
                    title: 'DriveBuddy',
                    subTitle: 'daaaaaaaaaaaaaaaa',
                    imgSrc: drivebuddy,
                    link: "http://gnomontalk.com/",
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>        
            </Container>
        );
    }
}

export default Carousel;