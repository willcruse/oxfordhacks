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
            titleText: "Hello",
            bodyText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultrices iaculis massa, ut finibus velit euismod eu. Sed vehicula tortor auctor ultrices bibendum. Pellentesque a ligula aliquet, euismod augue congue, blandit leo. Donec sit amet nulla ac urna mollis ullamcorper. Cras nisl diam, tincidunt ut arcu vitae, posuere commodo urna. Morbi ac blandit tellus. Maecenas porttitor finibus mollis. Sed iaculis pellentesque augue, id dignissim risus semper quis. Vivamus et rutrum tellus. Integer ut ipsum lacus. Cras laoreet, arcu nec dictum scelerisque, dolor lorem semper nisl, a mollis tortor augue ac nulla. Nunc lacus lectus, tempus quis ex sit amet, condimentum dictum felis. Sed ultrices iaculis purus, at ornare leo iaculis eu. Nullam suscipit tincidunt purus vitae convallis. Nam condimentum mi sit amet enim semper, quis porttitor est placerat. Vestibulum pharetra lacinia elit, consequat suscipit dolor interdum ut.',
            info: true
        };

        this.clickHandler = this.clickHandler.bind(this);
    }



    clickHandler(event) {
        event.preventDefault();
        this.setState({info: false});
    }
    render() {
        if (this.state.info) {
            return (
                <p style={styles.baseText}>
                    <p style={styles.titleText} onPress={this.onPressTitle}>
                        {this.state.titleText}{'\n'}{'\n'}
                    </p>
                    <p numberOfLines={5}>
                        {this.state.bodyText}
                    </p>
                    <button onClick={this.clickHandler}>Click Me</button>
                </p>
            );
        } else {
            return(<h1>header</h1>)
        }
    }
}
const styles = {
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
};
