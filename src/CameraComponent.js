import React from "react";
import Webcam from "react-webcam";
import { Button } from "react-bootstrap";
import ServerDetails from "./ServerDetails"

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

    var capt = false;

    const capturePlayerA = React.useCallback(
        () => {

            var imgArr = [];
            var timesRun = 0;
            var interval = setInterval(function(){
                if (timesRun === 210) {
                    clearInterval(interval);
                    imgArrMaster.push(imgArr);
                    audio.pause()
                    capt = true;
                }
                timesRun++;
                imgArr.push(webcamRef.current.getScreenshot());
            }, 50);

        },
        [webcamRef]
    );

    const capturePlayerB = React.useCallback(() => {
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
            timesRunB++;
            imgArrB.push(webcamRef.current.getScreenshot());
        }, 50);
    }, [webcamRef]);


    // const capture = React.useCallback(
    //     () => {
    //         audio.play();
    //         imgArrMaster = [];
    //         var imgArrA = [];
    //         var timesRun = 0;
    //         var cunt_muffin = false;
    //         var interval = setInterval(function () {
    //             if (timesRun === 100) {
    //                 clearInterval(interval);
    //                 imgArrMaster.push(imgArrA);
    //                 audio.pause()
    //                 cunt_muffin = true;
    //             }
    //             timesRun++;
    //             imgArrA.push(webcamRef.current.getScreenshot());
    //         }, 50);
    //         while (!cunt_muffin) {
    //             sleep(50).then(() => {})
    //         }
    //         sleep(5000).then(() => {
    //             console.log("partB");
    //             audio.play();
    //             var imgArrB = [];
    //             var timesRunB = 0;
    //             var interval = setInterval(function () {
    //                 if (timesRunB === 100) {
    //                     clearInterval(interval);
    //                     audio.pause()
    //                     imgArrMaster.push(imgArrB);
    //                     var data = {
    //                         "images": imgArrMaster
    //                     }
    //                     console.log(data)
    //                     fetch("http://" + ServerDetails.TOGETHER + "/getResponse", {
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                             // 'Access-Control-Allow-Origin': '*'
    //                         },
    //                         body: JSON.stringify(data)
    //                     }).then((resp) => {
    //                         audio.pause()
    //                         return resp;
    //                     }).then((json) => {
    //                         console.log(json);
    //                     }).catch((error) => {
    //                         console.log(error);
    //                     })
    //                 }
    //                 timesRunB++;
    //                 imgArrB.push(webcamRef.current.getScreenshot());
    //             }, 50);
    //         });
    //     },
    //     [webcamRef]
    // );

<<<<<<< HEAD
=======
    return (
        <Container>
            <Col><Row><Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={window.width}
                videoConstraints={videoConstraints}
                capture={capt ? capturePlayerB : capturePlayerA}
            />
                <Button variant="dark" onClick={capturePlayerA}>Dance PlayerA</Button>
                <Button variant="dark" onClick={capturePlayerB}>Dance PlayerB</Button>
            </Row></Col>
            {/* <Col><Row><MusicComponent play={false} /></Row></Col> */}
        </Container>

    return (
        <div>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={window.width}
            videoConstraints={videoConstraints}
            capture={capture}
        />
        <Button onClick={capture}>Dance, Dance</Button>
        </div>
    );
}

export default CameraComponent;