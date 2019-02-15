import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import startPageStyle from './startPage.module.css';
import startBackground from '../assets/startBackground.jpg';
 
const StartPage = () => {
    return (
        <div>
            <img className={startPageStyle.background} src={startBackground} alt="background"/>
            <Container>
                <Row>
                    <h1>Party Cat</h1>
                    <p className={startPageStyle.text}>It is the time of year your Birthday is around corner. You have decided to invite neighborhood cats to your party. The problem is can you find them...</p>
                </Row>
                <Row>
                    <Button href="/gamepage" color="success">Play</Button>
                </Row>
            </Container>
        </div>
    );
}
 
export default StartPage;