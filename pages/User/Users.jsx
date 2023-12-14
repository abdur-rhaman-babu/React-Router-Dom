import { useLoaderData } from "react-router-dom";
import './User.css'
import User from "./User";
const Users = () => {
    const users = useLoaderData()
    // console.log(users)

    return (
        <div className="user-content">
            {
                users && users.map((user)=><User key={user.id} user= {user}/>)
            }
        </div>
    );
};

export default Users;