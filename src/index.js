import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayComponent from './DisplayComponent';

// const App = () => {
//     return(
//         <h1>HELLO</h1>
//     )
// }
document.body.style = 'background: #303030;';
ReactDOM.render(<DisplayComponent style={{"background-color": "black"}}/>, document.getElementById('root'));


