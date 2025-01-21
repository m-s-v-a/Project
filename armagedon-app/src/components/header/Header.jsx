import {Link} from "react-router-dom";
import styles from "./Header.module.css";

export const Header = ()=> {
    return <div className={styles.headPage}>
            <div className={styles.headTitle}><h1>ARMAGEDON V</h1>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</div>
        </div>
        <div className={styles.Links}>
            <Link to={"/asteroids"}><b>Астероиды </b></Link>
            <Link to={"/destroyment"}>Уничтожение</Link>
            </div>
        </div>
}