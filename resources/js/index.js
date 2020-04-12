import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import Home from './components/Home';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Route path="/" exact component={Home}  />
                    <Route path="/blogs" exact component={Blog}  />
                </div>
            </Router>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
