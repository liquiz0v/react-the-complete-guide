import React, { Component } from 'react';

// import axios from "axios";

import axios from "../../axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: null
    }


    componentDidMount() {
        axios.get('/posts')
            .then((response) => {
                // console.log(response)
                const posts = response.data.slice(0, 4);

                const updatedPosts = posts.map((post) => {
                    return {
                        ...posts,
                        author: "Max"
                    }
                });

                this.setState({
                    posts: updatedPosts
                });
            }).catch(
                err => {
                    this.setState({error: true})
                }
        );
    }

    postSelectedHandler = (postId) => {
        this.setState({selectedPostId: postId})
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}> Something went wrong!</p>

        if(!this.state.error){
            posts = this.state.posts
                .map((post, index) => {
                    return <Post title={post[index].title}
                                 key={post[index].id}
                                 author={post.author}
                                 onPostClick={() => this.postSelectedHandler(post[index].id)}/>
                });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;