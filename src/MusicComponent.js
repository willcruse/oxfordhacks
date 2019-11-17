import React from "react";
import songs from "./Songs.js"
import {Container, Row, Col, ListGroup, Button} from "react-bootstrap"

class MusicComponent extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            "currentSong": "Ohio is for Emo Kids",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(key) {
        this.setState({["currentSong"]: key})
    }



    render() {
        var keys = Object.keys(songs);
        return (
            <Container style={{"opacity": 1}}>
                <Row><Col><ListGroup>   
                {
                    keys.map(item => {
                        return (<Button variant="dark" onClick={() => this.handleClick(item)}>{item}</Button>)
                    })
                }
                </ListGroup></Col></Row>
                <Row><Col><p style = {{"color":"white"}}>{"Current Song: " + this.state.currentSong}</p></Col></Row>

                <Row><Col><audio src={songs[this.state.currentSong]} controls></audio></Col></Row>
            </Container>
        );
    }
}

export default MusicComponent;