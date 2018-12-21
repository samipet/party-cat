import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import startBackground from '../assets/startBackground.jpg';
 
const StartPage = () => {
    return (
        <div>
        <img src={startBackground} alt="background" style={ {position: "fixed", width: "100%", height: "100%", display: "inline-block", zIndex: "-1"} }/>
        <Container>
            <Row>
                <h1>Party Cat</h1>
                <h3 style={ {color: "white"} }>It is the time of year your Birthday is around corner. You have decided to invite neighborhood cats to your party. The problem is can you find them...</h3>
            </Row>
            <Row>
                <Button href="/gamepage" color="success">Play</Button>
            </Row>
        </Container>
        </div>
    );
}
 
export default StartPage;