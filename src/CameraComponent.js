import React from "react";
import Webcam from "react-webcam";

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
                console.log("push")
                if (timesRun == 4000) {
                    clearInterval(interval);
                    console.log(imgArr);
                }
                timesRun++;
                imgArr.push(webcamRef.current.getScreenshot());
            }, 25);
        },
        [webcamRef]
    );


    return (
        <div>
        <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
            capture={capture}
        />
        <button onClick={capture}>Dance, Dance</button>
        </div>
    );
}

export default CameraComponent;