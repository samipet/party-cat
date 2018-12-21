import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'reactstrap';
import { newGame } from '../actions';
import gameOverTired from '../assets/gameOverTired.jpg';
import gameOverAnnoyed from '../assets/gameOverAnnoyed.jpg';
import gameOverDog from '../assets/gameOverDog.jpg';
import partyBackground from '../assets/partyBackground.jpg';

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
            <img src={partyBackground} alt="background" style={ {position: "fixed", width: "100%", height: "100%", display: "inline-block", zIndex: "-1", visibility: this.state.party ? "visible" : "hidden"} }/>    
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