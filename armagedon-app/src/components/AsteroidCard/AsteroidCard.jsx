import {AsteroidCardAction} from "./AsteroidCardAction/AsteroidCardAction"
import {AsteroidCardImage} from "./AsteroidCardImage/AsteroidCardImage"
import {AsteroidCardContent} from "./AsteroidCardContent/AsteroidCardContent"
import styles from "./Card.module.css";

export const AsteroidCard = (props) =>{
    const {name, date, distance, size, isDangerous, distanceMode} = props;
    return (
        <div className={isDangerous ? styles.redCard : styles.regularCard}>
            <div className={styles.card}>
                <AsteroidCardImage/>
                <AsteroidCardContent name={name} date={date} distance={distance} distanceMode={distanceMode} size={size}/>
                <AsteroidCardAction isDangerous={isDangerous}/>
            </div>
        </div>
    )
}