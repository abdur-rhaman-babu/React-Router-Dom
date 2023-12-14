/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const User = ({user}) => {
    const {name,username,address:{street,city}} = user;
    // console.log(user);
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>UserName: {username}</h3>
            <p>Street: {street}</p>
            <p> City: {city}</p>
            <Link to={`/users/${user.id}`}>
            <button>See details</button>
          </Link>
        </div>
    );
};

export default User;