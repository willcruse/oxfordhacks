import React from "react";
import songs from "./Songs.js"
import {Container, Row, Col, ListGroup, Button} from "react-bootstrap"

class MusicComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "currentSong": "Ohio is for emo kids"
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key) {
        this.setState({"currentSong": key})
        console.log(this.state.currentSong);
    }

    render() {
        var keys = Object.keys(songs);
        console.log(this.state.currentSong);
        return (
            <Container>
                <Row><Col><ListGroup>
                {
                    keys.map(item => {
                        return (<Button onClick={() => this.handleClick(item)}>{item}</Button>)
                    })
                }
                </ListGroup></Col></Row>
                <Row><Col><p>{"Current Song: " + this.state.currentSong}</p></Col></Row>
                <Row><Col><audio src={songs.key} controls></audio></Col></Row>
            </Container>
        );
    }
}

export default MusicComponent;