import React from "react";
import CameraComponent from "./CameraComponent"
import {Container, Row, Col} from "react-bootstrap"
import InfoComponent from "./InfoComponent";
import MusicComponent from "./MusicComponent";
import Header from "./Header";


const DisplayComponent = () => {

    return (
        <div style = {{"background-color":"#303030"}}>
            <Header/>
<<<<<<< Updated upstream
        <Container fluid>
            <Row >
=======
        <Container fluid style={{"opacity": 1}}>
            {/*<Row>*/}
            {/*    <Col><Header/></Col>*/}
            {/*</Row>*/}
            <Row style={{"opacity": 1}}>
>>>>>>> Stashed changes
                <Col><InfoComponent /></Col>
                <Col><CameraComponent /></Col>
                <Col><MusicComponent /></Col>
            </Row>
        </Container>
        </div>
    );
}

export default DisplayComponent;