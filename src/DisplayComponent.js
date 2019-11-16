import React from "react";
import CameraComponent from "./CameraComponent"
import {Container, Row, Col} from "react-bootstrap"
import InfoComponent from "./InfoComponent";
import MusicComponent from "./MusicComponent";
import Header from "./Header";


const DisplayComponent = () => {

    return (
        <Container>
            <Row>
                <Col><Header/></Col>
            </Row>
            <Row >
                <Col><InfoComponent info={true}/></Col>
                <Col><CameraComponent /></Col>
                <Col><MusicComponent /></Col>
            </Row>
        </Container>
    );
}

export default DisplayComponent;