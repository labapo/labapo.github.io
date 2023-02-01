import ReactDOM from 'react-dom';
import React from "react";
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import "./styles.css";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)