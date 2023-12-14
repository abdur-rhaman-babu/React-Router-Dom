/* eslint-disable react/prop-types */
import styles from "./homes.module.css";
import { Link } from "react-router-dom";
const Home = ({home}) => {
   const {title,price,category,image} = home;
    return (
            <div className={styles.productCard}>
            <div className={styles.productCardImg}>
            <img src={image} alt="Photo" />
            </div>
            <div className={styles.productDes}>
            <Link to = {`/home/${home.id}`}><h3>{title}</h3></Link>
            <li>{category}</li>
            <h5 style={{color:'red',fontSize:'18px'}}>৳{price}</h5>
            </div>
        </div>
    );
};

export default Home;