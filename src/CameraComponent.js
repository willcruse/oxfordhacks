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
    var imgArrMaster = [];
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const captureAAA = React.useCallback(
        () => {
            audio.play();
            var imgArr = [];
            var timesRun = 0;
            var interval = setInterval(function () {
                if (timesRun === 100) {
                    clearInterval(interval);
                    imgArrMaster.push(imgArr);
                    audio.pause()
                }
                timesRun++;
                imgArr.push(webcamRef.current.getScreenshot());
            }, 50);

        },
        [webcamRef]
    );

    const capture = React.useCallback(
        () => {
            audio.play();
            imgArrMaster = [];
            var imgArrA = [];
            var timesRun = 0;
            var interval = setInterval(function () {
                if (timesRun === 100) {
                    clearInterval(interval);
                    imgArrMaster.push(imgArrA);
                    audio.pause()
                }
                timesRun++;
                imgArrA.push(webcamRef.current.getScreenshot());
            }, 50);
            sleep(5000).then(() => {
                console.log("partB");
                audio.play();
                var imgArrB = [];
                var timesRunB = 0;
                var interval = setInterval(function () {
                    if (timesRunB === 100) {
                        clearInterval(interval);
                        audio.pause()
                        imgArrMaster.push(imgArrB);
                        var data = {
                            "images": imgArrMaster
                        }
                        console.log(data)
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
                    timesRunB   ++;
                    imgArrB.push(webcamRef.current.getScreenshot());
                }, 50);
            });
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
                <Button variant="dark" onClick={capture}>Dance PlayerA</Button>
                {/* <Button variant="dark" onClic={capturePlayerB}>Dance PlayerB</Button> */}
            </Row></Col>
            {/* <Col><Row><MusicComponent play={false} /></Row></Col> */}
        </Container>

    );
}

export default CameraComponent;