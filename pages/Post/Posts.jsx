import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import './Post.css'
const Posts = () => {
    const posts = useLoaderData()
    return (
        <div className="post-content">
            {
                posts && posts.map((post)=><Post key={post.id} post ={post}/>)
            }
        </div>
    );
};

export default Posts;