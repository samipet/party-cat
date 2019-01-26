import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap';
import { newGame } from '../actions';
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
        if (this.props.catsInvited === 12) {
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
                    <h1 style={ {textAlign: "center", width: "100%"} }>I HATE those %#?@& SQUIRRELS!</h1>
                    <h3 style={ {textAlign: "center", width: "100%"} }>I'm out of here. I know what I hope for as presents...</h3>
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
                    <h1 style={ {textAlign: "center", color: "white", width: "100%"} }>Wake me up when it's my Birthday zzZZZ</h1>
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
                <Row style={ {textAlign: "center", color: "white"} }>
                    <h1>I quess I'll have to wait my Birthday in my next life</h1>
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
                <h3 style={ {textAlign: "center", color: "white", width: "100%"} }>Cats invited: {catsInvited} / 12</h3>
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
            <img src={imageType} alt="background" style={ {position: "fixed", width: "100%", height: "100%", display: "inline-block", zIndex: "-1", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={partyBackground} alt="partybackground" style={ {position: "fixed", width: "100%", height: "100%", display: "inline-block", zIndex: "-1", visibility: this.state.party ? "visible" : "hidden"} }/>
            <img src={day_hero} alt="day_hero" style={ {position: "absolute", top: "72%", right: "50%", width: "20%", height: "25%", zIndex: "1", visibility: this.state.party ? "visible" : "hidden"} }/>
            <img src={guest1} alt="guest1" style={ {position: "absolute", top: "65%", right: "2%", width: "20%", height: "30%", zIndex: "1", visibility: this.state.party && this.props.catGuests[0] ? "visible" : "hidden"} }/>
            <img src={guest2} alt="guest2" style={ {position: "absolute", top: "79%", right: "61%", width: "18%", height: "21%", zIndex: "2", visibility: this.state.party && this.props.catGuests[1] ? "visible" : "hidden"} }/>
            <img src={guest3} alt="guest3" style={ {position: "absolute", top: "87%", right: "92%", width: "8%", height: "13%", zIndex: "2", visibility: this.state.party && this.props.catGuests[2] ? "visible" : "hidden"} }/>
            <img src={guest4} alt="guest4" style={ {position: "absolute", top: "20%", right: "80%", width: "20%", height: "45%", zIndex: "1", visibility: this.state.party && this.props.catGuests[3] ? "visible" : "hidden"} }/>
            <img src={guest5} alt="guest5" style={ {position: "absolute", top: "38%", right: "65%", width: "15%", height: "60%", zIndex: "1", visibility: this.state.party && this.props.catGuests[4] ? "visible" : "hidden"} }/>
            <img src={guest6} alt="guest6" style={ {position: "absolute", top: "60%", right: "40%", width: "13%", height: "35%", zIndex: "0", visibility: this.state.party && this.props.catGuests[5] ? "visible" : "hidden"} }/>
            <img src={guest7} alt="guest7" style={ {position: "absolute", top: "70%", right: "0%", width: "13%", height: "30%", zIndex: "2", visibility: this.state.party && this.props.catGuests[6] ? "visible" : "hidden"} }/>
            <img src={guest8} alt="guest8" style={ {position: "absolute", top: "78%", right: "87%", width: "8%", height: "22%", zIndex: "1", visibility: this.state.party && this.props.catGuests[7] ? "visible" : "hidden"} }/>
            <img src={guest9} alt="guest9" style={ {position: "absolute", top: "0%", right: "4%", width: "13%", height: "50%", zIndex: "1", visibility: this.state.party && this.props.catGuests[8] ? "visible" : "hidden"} }/>    
            <img src={guest10} alt="guest10" style={ {position: "absolute", top: "57%", right: "24%", width: "13%", height: "40%", zIndex: "2", visibility: this.state.party && this.props.catGuests[9] ? "visible" : "hidden"} }/>
            <img src={guest11} alt="guest11" style={ {position: "absolute", top: "75%", right: "32%", width: "14%", height: "24%", zIndex: "0", visibility: this.state.party && this.props.catGuests[10] ? "visible" : "hidden"} }/>
            <img src={guest12} alt="guest12" style={ {position: "absolute", top: "73%", right: "79%", width: "17%", height: "25%", zIndex: "0", visibility: this.state.party && this.props.catGuests[11] ? "visible" : "hidden"} }/>                        
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