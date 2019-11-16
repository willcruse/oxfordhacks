import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayComponent from './DisplayComponent';

const App = () => {
    return(
        <h1>HELLO</h1>
    )
}

ReactDOM.render(<DisplayComponent />, document.getElementById('root'));


