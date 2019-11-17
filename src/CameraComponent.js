import React from "react";
import Webcam from "react-webcam";
import { Button, Container, Row, Col } from "react-bootstrap";
import ServerDetails from "./ServerDetails"
import Songs from "./Songs";
import Cookies from "universal-cookie";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
}


const CameraComponent = () => {

    const webcamRef = React.useRef(null);

    var audio = new Audio(Songs["Wii Theme Song"]);
    audio.loop = true;
    
    const capture = React.useCallback(
        () => {
            audio.play();
            var imgArr = [];
            var timesRun = 0;
            var interval = setInterval(function () {
                if (timesRun === 100) {
                    clearInterval(interval);
                    var data = {
                        "images": imgArr
                    }
                    fetch("http://" + ServerDetails.TOGETHER + "/getResponse", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify(data)
                    }).then((resp) => {
                        audio.pause()
                        return resp;
                    }).then((json) => {
                        console.log(json);
                    }).catch((error) => {
                        console.log(error);
                    })
                }
                timesRun++;
                imgArr.push(webcamRef.current.getScreenshot());
            }, 50);
        },
        [webcamRef]
    );

    return (
        <Container>
            <Col><Row><Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={window.width}
                videoConstraints={videoConstraints}
                capture={capture}
            />
                <Button variant="dark" onClick={capture}>Dance, Dance</Button>
                </Row></Col>
            {/* <Col><Row><MusicComponent play={false} /></Row></Col> */}
        </Container>

    );
}

export default CameraComponent;