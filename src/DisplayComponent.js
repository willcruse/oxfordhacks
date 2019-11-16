import React from "react";
import CameraComponent from "./CameraComponent"
import {Container, Row, Col} from "react-bootstrap"


const DisplayComponent = () => {

    return (
        <Container>
            <Row>
                <Col><CameraComponent /></Col>
            </Row>
        </Container>
    );
}

export default DisplayComponent;