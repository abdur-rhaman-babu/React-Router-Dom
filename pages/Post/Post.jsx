/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const Post = ({post}) => {
    const {userId,id,title,body} = post;
    return (
        <div className="post-card">
            <h1>{userId}</h1>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <Link to = {`/post/${post.id}`}><button>Details</button></Link>
        </div>
    );
};

export default Post;