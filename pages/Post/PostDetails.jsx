import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const {id,userId,title,body} = useLoaderData()
    return (
        <div>
            <h1>{id}</h1>
            <p>{userId}</p>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;