import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blogs: []
        };
    }
    componentWillMount() {
        axios.get('/api/blogs').then(res => {
            console.log(res);
            this.setState({
                'blogs': res.data
            });
        }).catch(errors => {
            console.log(errors);
        });
    }

    render() {
        return (
            <div className="container">
                <ul>
                    {this.state.blogs.map(blog => <li key={blog.id}>{blog.body}</li>)}
                </ul>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Blog />, document.getElementById('root'));
}
