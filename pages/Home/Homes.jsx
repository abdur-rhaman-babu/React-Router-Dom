import { useLoaderData } from "react-router-dom";
import Home from "./Home";
import styles from "./homes.module.css";


const Homes = () => {
    const homes = useLoaderData()
    // console.log(homes);
    return (
        <div className={styles.productContent}>
            {
                homes.slice(1,300).map((home)=><Home key={home.id} home={home}/>)
            }
        </div>
    );
};

export default Homes;