import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
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

export default Blog;
