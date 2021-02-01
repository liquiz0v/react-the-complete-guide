import React, { Component } from 'react';

// import axios from "axios";

import axios from "../../axios";

import Post from '../../components/Post/Post';
import Posts from './Posts/Posts';

import './Blog.css';

class Blog extends Component {

    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">NEW POST</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;