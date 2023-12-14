import {useLoaderData } from "react-router-dom";
import styles from "./homes.module.css";
const HomeDetails = () => {
    const {title,price,category,image} = useLoaderData()
    return (
        <div>
        <div className={styles.productCard}>
            <div className={styles.productCardImg}>
            <img src={image} alt="Photo" />
            </div>
            <div className={styles.productDes}>
            <h3>{title}</h3>
            <li>{category}</li>
            <h5 style={{color:'red',fontSize:'18px'}}>৳{price}</h5>
            </div>
        </div>
        </div>
    );
};

export default HomeDetails;