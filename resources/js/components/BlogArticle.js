import React, { Component } from 'react';
import axios from 'axios';

class BlogArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: {}
        };
    }
    componentDidMount() {
        axios.get('/api/blogs/' + this.props.match.params.id).then(res => {
            console.log(res);
            this.setState({
                blog: res.data
            });
        }).catch(error => console.log(error));
    }

    render() {
        console.log(this.state);
        let { name, body } = this.state.blog;
        return (
            <div className="container">
                <h1>{name}</h1>
                <p>{body}</p>
            </div>
        );
    }
}

export default BlogArticle;
