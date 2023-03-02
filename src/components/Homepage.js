// import PostCard from "./PostCard"
import axios from 'axios'
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
export default function Homepage() {
    const [post, setPost] = useState();

    function getPosts() {
        axios({
            method: 'get',
            url: 'http://latestwp.local/wp-json/wp/v2/posts?order=asc',
        }).then(function (response) {
            setPost(response.data);
        });
    }

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-5">
                        <h2 className="pt-4 pb-4">WordPress Posts Using ReactJS</h2>
                        {post && post.map((val) => {
                            return (
                                <div>
                                    <h2>{val.title.rendered}</h2>
                                    {parse(val.content.rendered)}
                                </div>
                            )
                        })}
                        <button className="btn btn-primary" onClick={getPosts}>GET ALL POSTS</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
