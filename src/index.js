import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayComponent from './DisplayComponent';

// const App = () => {
//     return(
//         <h1>HELLO</h1>
//     )
// } #303030
document.body.style = 'background: black;';
ReactDOM.render(<DisplayComponent style={{"background-color": "black"}}/>, document.getElementById('root'));


