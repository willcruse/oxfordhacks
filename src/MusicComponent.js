import React from "react";
import song from "./music.mp3"

class MusicComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "currentSong": "Ohio is for emo kids"
        }
    }

    render() {
        return (
            <div id="audio">
                <text>{"Current Song: " + this.state.currentSong}</text>
                <audio src={song} controls></audio>
            </div>
        );
    }
}

export default MusicComponent;