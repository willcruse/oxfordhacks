import React from "react";
import CameraComponent from "./CameraComponent"
import {Container, Row, Col} from "react-bootstrap"
import InfoComponent from "./InfoComponent";
import MusicComponent from "./MusicComponent";
import Header from "./Header";


const DisplayComponent = () => {

    return (
        <div>
            <Header/>
        <Container>
            {/*<Row>*/}
            {/*    <Col><Header/></Col>*/}
            {/*</Row>*/}
            <Row >
                <Col><InfoComponent /></Col>
                <Col><CameraComponent /></Col>
                <Col><MusicComponent /></Col>
            </Row>
        </Container>
        </div>
    );
}

export default DisplayComponent;