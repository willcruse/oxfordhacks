import React from "react";
import CameraComponent from "./CameraComponent"
import { Container, Row, Col } from "react-bootstrap"
import InfoComponent from "./InfoComponent";
import MusicComponent from "./MusicComponent";
import Header from "./Header";
import Cookies from "universal-cookie";



class DisplayComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ "background-color": "black" }}>
                <Header />
                <Container fluid style={{ "opacity": 1 }}>
                    <Row style={{ "opacity": 1 }}>
                        <Col xs lg="2"><InfoComponent /></Col>
                        <CameraComponent s/>
                        <Col><MusicComponent /></Col>
                    </Row>
                </Container>
            </div >
        );
    }

}

export default DisplayComponent;