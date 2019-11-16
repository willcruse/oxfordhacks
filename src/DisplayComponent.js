import React from "react";
import CameraComponent from "./CameraComponent"
import {Container, Row, Col} from "react-bootstrap"
import InfoComponent from "./InfoComponent";
import MusicComponent from "./MusicComponent";


const DisplayComponent = () => {

    return (
        <Container>
            <Row>
                <Col><h1>Mimic Me</h1></Col>
            </Row>
            <Row >
                <Col><InfoComponent /></Col>
                <Col><CameraComponent /></Col>
                <Col><MusicComponent currentSong="Hello World"/></Col>
            </Row>
        </Container>
    );
}

export default DisplayComponent;