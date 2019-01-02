import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as serviceWorker from './components/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './components/Login/Login';
import App from './components/App/App';
import General from './components/General/General';
import Resolved from './components/Resolved/Resolved';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Login}/>
            <Route path="/general" component={General} />
            <Route path="/detected" component={App} />
            <Route path="/resolved" component={Resolved} />
        </div>
    </Router>,
    document.getElementById('root'),
    
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
