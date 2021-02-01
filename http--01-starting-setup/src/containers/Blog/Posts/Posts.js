import Post from "../../../components/Post/Post";
import './Posts.css';

import React, {Component} from 'react';
import axios from "../../../axios";

class Posts extends Component {
    state = {
        posts: [],
        error: false
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
                console.log(err)
                this.setState({error: true})
            }
        );
    }

    postSelectedHandler = (postId) => {
        this.setState({selectedPostId: postId})
    }

    render() {
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

            return <section className="Posts">
                {posts}
            </section>
    }

}

export default Posts;