import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const {name,username,email,address:{street,suite,city,zipcode,geo:{lat,lng}}}= useLoaderData()   
    return (
        <div className="show-Details">
            <div className="main-part">
            <h3 style={{fontSize:'25px'}}><span style={{fontSize:'30px'}}>Name:</span> {name}</h3>
            <h3> <span style={{fontSize:'25px'}}>Username:</span> {username}</h3>
            <h3> <span style={{fontSize:'25px'}}>Email:</span> {email}</h3>
            </div>
        
            <img src="https://picsum.photos/400/400" alt="" />
            <div className="address-part">
            <ul>
            <h4 style={{fontSize:'18px',marginTop:'10px'}}>Address:</h4>
            <li> Street: {street}</li>
            <li>Suite: {suite}</li>
            <li>City: {city}</li>
            <li> Zipcode: {zipcode}</li>
            <h4 style={{fontSize:'18px',marginTop:'10px'}}>Geo</h4>
            <li>Lat: {lat}</li>
            <li> Lng: {lng}</li>
            </ul>
            </div>
        </div>
    );
};

export default UserDetails;