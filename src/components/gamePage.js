import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Container, Row, Col, Button, Progress } from 'reactstrap';
import Tile from './tile';
import boardStyle from './gamePage.module.css';
import { tileClick, nextLevel, gameOver, newGame, setGameOver } from '../actions';
 
class GamePage extends Component {

    renderBoard() {
        const tileArray = [];

        for (let i=0;i<this.props.boardSize[0];i++) {
            for (let j=0;j<this.props.boardSize[1];j++) {
                tileArray.push({x: i, y: j, z: this.props.boardZ[i][j], image: this.props.board[i][j]});  
            }
        }

        return tileArray.map((tile) => {
            return <Tile key={tile.x + " " + tile.y} image={tile.image} x={tile.x} y={tile.y} z={tile.z} tileClick={this.props.tileClick}>{tile.x + " " + tile.y}</Tile>
        })
    }

    componentDidUpdate() {
        if (this.props.clicksLeft < 0 || this.props.tiredness > 6 || this.props.annoyance > 6 || this.props.catsInvited > 11) {
            this.props.setGameOver();
            setTimeout(() => {
                this.props.gameOver(this.props)
            }, 4000);            
        }
    }

    componentDidMount() {
        this.props.newGame();
    }

    render() {
        if (this.props.gameOverReason) {
            return <Redirect to='/gameoverpage'/>
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <div className={boardStyle.boardcontainer}>{this.renderBoard()}</div>
                    </Col>
                    <Col>
                        <div>
                            <Button disabled={!(this.props.clicksLeft===0 || this.props.catFound===true) || this.props.gameOverInProgress} color={!(this.props.clicksLeft===0 || this.props.catFound===true) ? "secondary" : "success"} onClick={() => this.props.nextLevel(this.props)}>Next Level</Button>
                        </div>
                        <Row>
                            <div className={boardStyle.level}>
                                Level: {this.props.level}
                            </div>
                        </Row>
                        <Row>
                            <div className={boardStyle.clicksleft}>
                                Clicks left: {this.props.clicksLeft}
                            </div>
                            
                        </Row>
                        <Row>
                            <div className={boardStyle.progresscontainer}>
                                <div>Tiredness</div>
                                <Progress value={this.props.tiredness} max="6" color={(this.props.tiredness < 3) ? "success" : (this.props.tiredness < 5) ? "warning" : "danger"}/>
                            </div>
                        </Row>
                        <Row>
                            <div className={boardStyle.progresscontainer}>
                                <div>Annoyance</div>
                                <Progress value={this.props.annoyance} max="6" color={(this.props.annoyance < 3) ? "success" : (this.props.annoyance < 5) ? "warning" : "danger"}/>
                            </div>
                        </Row>
                        <Row>
                            <div className={boardStyle.progresscontainer}>
                                <div>Cats invited</div>
                                <label>{this.props.catsInvited + " / 12"}</label>
                                <Progress value={this.props.catsInvited} max="12" color={(this.props.catsInvited < 5) ? "danger" : (this.props.catsInvited < 9) ? "warning" : "success"}/>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        boardSize: state.boardSize,
        board: state.board,
        boardZ: state.boardZ,
        clicksLeft: state.clicksLeft,
        tiredness: state.tiredness,
        level: state.level,
        catFound: state.catFound,
        catsInvited: state.catsInvited,
        catGuests: state.catGuests,
        gameOverReason: state.gameOverReason,
        annoyance: state.annoyance,
        gameOverInProgress: state.gameOverInProgress
    }
}
 
export default withRouter(connect(mapStateToProps, { tileClick: tileClick, nextLevel: nextLevel, gameOver: gameOver, newGame: newGame, setGameOver: setGameOver })(GamePage));