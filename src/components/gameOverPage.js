import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap';
import { newGame } from '../actions';
import { maxCatsInvited } from '../actions/types';
import gameOverStyle from './gameOverPage.module.css';
import gameOverTired from '../assets/gameOverTired.jpg';
import gameOverAnnoyed from '../assets/gameOverAnnoyed.jpg';
import gameOverDog from '../assets/gameOverDog.jpg';
import partyBackground from '../assets/partyBackground.jpg';
import day_hero from '../assets/day_hero.png';
import guest1 from '../assets/guest1.png';
import guest2 from '../assets/guest2.png';
import guest3 from '../assets/guest3.png';
import guest4 from '../assets/guest4.png';
import guest5 from '../assets/guest5.png';
import guest6 from '../assets/guest6.png';
import guest7 from '../assets/guest7.png';
import guest8 from '../assets/guest8.png';
import guest9 from '../assets/guest9.png';
import guest10 from '../assets/guest10.png';
import guest11 from '../assets/guest11.png';
import guest12 from '../assets/guest12.png';

const getImage = (image) => {
    switch(image) {        
        case "annoyed": return gameOverAnnoyed;
        case "tired": return gameOverTired;
        case "dog": return gameOverDog;
        case "allCatsInvited": return partyBackground;
        default: return '';
    }
};



class GameOverPage extends Component {

	constructor(props) {
		super(props);
		this.state = { party: false }
    }

    componentDidMount() {
        if (this.props.catsInvited === maxCatsInvited) {
            this.setState({
                party: true
            })
        }
    }

    gameOverTextRender = (reason) => {
        if (reason==="annoyed") {
            return (
                <div>
                    <Row>
                        <h1 className={gameOverStyle.headerannoyed}>I HATE those %#?@& SQUIRRELS!</h1>
                        <p className={gameOverStyle.textannoyed}>I'm out of here. I know what I hope for as presents...</p>
                    </Row>
                    <Row>
                        <Button onClick={() => this.setState({party: true})}>To the Party</Button>
                    </Row>
                </div>
            )
        }
        if (reason==="tired") {
            return (
                <div>
                    <Row>
                        <h1 className={gameOverStyle.headertired}>Wake me up when it's my Birthday zzZZZ</h1>
                    </Row>
                    <Row>
                        <Button onClick={() => this.setState({party: true})}>To the Party</Button>
                    </Row>
                </div>          
            )
        }
        if (reason==="dog") {
            return (
                <div>
                    <Row>
                        <h1 className={gameOverStyle.headerdog}>I quess I'll have to wait my Birthday in my next life</h1>
                    </Row>
                    <Row>
                        <Button href="/gamepage" onClick={() => this.props.newGame()} color="success">New Game</Button>
                    </Row>
                </div>            
            )
        }
    }

    partyRender = (catsInvited) => {
        return (
            <div>
                <Row>
                    <h3 className={gameOverStyle.catsinvited}>Cats invited: {catsInvited} / {maxCatsInvited}</h3>
                </Row>
                <Row>                
                    <Button href="/gamepage" onClick={() => this.props.newGame()} color="success">New Game</Button>
                </Row>
            </div>
        )
    }

    render() {
        let imageType = getImage(this.props.gameOverReason);
        return (
            <div>
                <img className={gameOverStyle.background + " " + (!this.state.party ? gameOverStyle.visible : gameOverStyle.hidden)} src={imageType} alt="background"/>
                <img className={gameOverStyle.background + " " + (this.state.party ? gameOverStyle.visible : gameOverStyle.hidden)} src={partyBackground} alt="partybackground"/>
                <img className={gameOverStyle.dayhero + " " + (this.state.party ? gameOverStyle.visible : gameOverStyle.hidden)} src={day_hero} alt="day_hero"/>
                <img className={gameOverStyle.guest1 + " " + (this.state.party && this.props.catGuests[0] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest1} alt="guest1"/>
                <img className={gameOverStyle.guest2 + " " + (this.state.party && this.props.catGuests[1] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest2} alt="guest2"/>
                <img className={gameOverStyle.guest3 + " " + (this.state.party && this.props.catGuests[2] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest3} alt="guest3"/>
                <img className={gameOverStyle.guest4 + " " + (this.state.party && this.props.catGuests[3] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest4} alt="guest4"/>
                <img className={gameOverStyle.guest5 + " " + (this.state.party && this.props.catGuests[4] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest5} alt="guest5"/>
                <img className={gameOverStyle.guest6 + " " + (this.state.party && this.props.catGuests[5] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest6} alt="guest6"/>
                <img className={gameOverStyle.guest7 + " " + (this.state.party && this.props.catGuests[6] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest7} alt="guest7"/>
                <img className={gameOverStyle.guest8 + " " + (this.state.party && this.props.catGuests[7] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest8} alt="guest8"/>
                <img className={gameOverStyle.guest9 + " " + (this.state.party && this.props.catGuests[8] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest9} alt="guest9"/>
                <img className={gameOverStyle.guest10 + " " + (this.state.party && this.props.catGuests[9] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest10} alt="guest10"/>
                <img className={gameOverStyle.guest11 + " " + (this.state.party && this.props.catGuests[10] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest11} alt="guest11"/>
                <img className={gameOverStyle.guest12 + " " + (this.state.party && this.props.catGuests[11] ? gameOverStyle.visible : gameOverStyle.hidden)} src={guest12} alt="guest12"/>
                <Container>
                    {(this.state.party) ? this.partyRender(this.props.catsInvited) : this.gameOverTextRender(this.props.gameOverReason)}
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gameOverReason: state.gameOverReason,
        catsInvited: state.catsInvited,
        catGuests: state.catGuests
    }
}

export default connect(mapStateToProps, { newGame: newGame })(GameOverPage);