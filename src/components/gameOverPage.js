import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap';
import { newGame } from '../actions';
import gameOverTired from '../assets/gameOverTired.jpg';
import gameOverAnnoyed from '../assets/gameOverAnnoyed.jpg';
import gameOverDog from '../assets/gameOverDog.jpg';
import partyBackground from '../assets/partyBackground.jpg';
import day_hero from '../assets/day_hero.png';
import quest1 from '../assets/quest1.png';
import quest2 from '../assets/quest2.png';
import quest3 from '../assets/quest3.png';
import quest4 from '../assets/quest4.png';
import quest5 from '../assets/quest5.png';
import quest6 from '../assets/quest6.png';
import quest7 from '../assets/quest7.png';
import quest8 from '../assets/quest8.png';
import quest9 from '../assets/quest9.png';
import quest10 from '../assets/quest10.png';
import quest11 from '../assets/quest11.png';
import quest12 from '../assets/quest12.png';

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
            <img src={imageType} alt="background" style={ {position: "fixed", width: "100%", height: "100%", display: "inline-block", zIndex: "-1", visibility: this.state.party ? "visible" : "hidden"} }/>
            <img src={partyBackground} alt="background" style={ {position: "fixed", width: "100%", height: "100%", display: "inline-block", zIndex: "-1", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={day_hero} alt="day_hero" style={ {position: "absolute", top: "72%", right: "50%", width: "20%", height: "25%", zIndex: "1", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest1} alt="quest1" style={ {position: "absolute", top: "65%", right: "2%", width: "20%", height: "30%", zIndex: "1", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest2} alt="quest2" style={ {position: "absolute", top: "79%", right: "61%", width: "18%", height: "21%", zIndex: "2", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest3} alt="quest3" style={ {position: "absolute", top: "87%", right: "92%", width: "8%", height: "13%", zIndex: "2", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest4} alt="quest4" style={ {position: "absolute", top: "20%", right: "80%", width: "20%", height: "45%", zIndex: "1", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest5} alt="quest5" style={ {position: "absolute", top: "38%", right: "65%", width: "15%", height: "60%", zIndex: "1", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest6} alt="quest6" style={ {position: "absolute", top: "60%", right: "40%", width: "13%", height: "35%", zIndex: "0", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest7} alt="quest7" style={ {position: "absolute", top: "70%", right: "0%", width: "13%", height: "30%", zIndex: "2", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest8} alt="quest8" style={ {position: "absolute", top: "78%", right: "87%", width: "8%", height: "22%", zIndex: "1", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest9} alt="quest9" style={ {position: "absolute", top: "0%", right: "4%", width: "13%", height: "50%", zIndex: "1", visibility: !this.state.party ? "visible" : "hidden"} }/>    
            <img src={quest10} alt="quest10" style={ {position: "absolute", top: "57%", right: "24%", width: "13%", height: "40%", zIndex: "2", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest11} alt="quest11" style={ {position: "absolute", top: "75%", right: "32%", width: "14%", height: "24%", zIndex: "0", visibility: !this.state.party ? "visible" : "hidden"} }/>
            <img src={quest12} alt="quest12" style={ {position: "absolute", top: "73%", right: "79%", width: "17%", height: "25%", zIndex: "0", visibility: !this.state.party ? "visible" : "hidden"} }/>
            
            
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
        catsInvited: state.catsInvited
    }
}

export default connect(mapStateToProps, { newGame: newGame })(GameOverPage);