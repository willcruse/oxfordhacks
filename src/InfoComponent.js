import React from "react";

/*
    Classed Based component
    State info => true ? false
    true => {Help Info}
    false => {Results}
    results in props
*/

export default class InfoComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            titleText: "How to Play",
            bodyText: 'To play the game, select a song and player 1 stand in front of the camera ready to dance! Next player 1 should press the "Dance PlayerA" button to record their cool moves :). Next player 2 should stand in front of the camera and press the "Dance PlayerB" button to attempt to copy player 1s dance moves.',
            info: true,
            p1Score : 0,
            p2Score : 0
        };

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({info: false});
    }
//onPress={this.onPressTitle}
//numberOfLines={5}
    render() {
        if (this.state.info) {
            return (
                <p style={styles.baseText}>
                    <p style={styles.titleText} >
                        {this.state.titleText}{'\n'}{'\n'}
                    </p>
                    <p >
                        {this.state.bodyText}
                    </p>
                    <button onClick={this.clickHandler}>Scores</button>
                </p>
            );
        } else {
            return(<div><h1>Scores</h1>
                    <p style={styles.baseText}>
                        <p></p>
                        <p numberOfLines = {1}>
                            Player 1:   {this.state.p1Score}
                        </p>
                        <p style={styles.baseText}>
                            Player 2:   {this.state.p2Score}
                        </p>
                    </p>
                </div>
            );
        }
    }
}
const styles = {
    baseText: {
        fontFamily: 'Cochin',
        "color":"white",
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        "color":"white",
    },
};
