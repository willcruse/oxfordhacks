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

    const capture = React.useCallback(
        () => {
            var imgArr = [];
            var timesRun = 0;
            var interval = setInterval(function(){
                if (timesRun === 210) {
                    clearInterval(interval);
                    var data = {
                        "images": imgArr
                    }
                    fetch("http://"+ServerDetails.TOGETHER+"/getResponse", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Access-Control-Allow-Origin': '*'
                        },
                        body: JSON.stringify(data)
                    }).then((resp) => {
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