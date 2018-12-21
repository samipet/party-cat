import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import Tile from './tile';
import boardStyle from './gamePage.module.css';
import { tileClick, nextLevel, gameOver, newGame } from '../actions';
 
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
            setTimeout(() => {
                this.props.gameOver(this.props)
            }, 2000);            
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
                            <Button disabled={!(this.props.clicksLeft===0 || this.props.catFound===true)} color={!(this.props.clicksLeft===0 || this.props.catFound===true) ? "secondary" : "success"} onClick={() => this.props.nextLevel(this.props)}>Next Level</Button>
                        </div>
                        <Row>
                            <h3>level: {this.props.level}</h3>
                        </Row>
                        <Row>
                            clicksLeft: {this.props.clicksLeft}
                        </Row>
                        <Row>
                            tiredness: {this.props.tiredness}
                        </Row>
                        <Row>
                            annoyance: {this.props.annoyance}
                        </Row>
                        <Row>
                            catsInvited: {this.props.catsInvited}
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
        gameOverReason: state.gameOverReason,
        annoyance: state.annoyance
    }
}
 
export default withRouter(connect(mapStateToProps, { tileClick: tileClick, nextLevel: nextLevel, gameOver: gameOver, newGame: newGame })(GamePage));