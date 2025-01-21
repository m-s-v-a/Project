import styles from "./Asteroids.module.css"
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";
import {useState} from "react";
import {Header} from "../components/header/Header";

export const Asteroids = () => {
    const [asteroids] = useState(generateAsteroids());

    const [onlyDangerous, setOnlyDangerous] = useState(false);

    return <div>
        <Header/>

        <div className={styles.showDangerousOnly}>
            <input type="checkbox" value={onlyDangerous} onChange={()=>setOnlyDangerous(!onlyDangerous)}>
        </input> Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние <button className={styles.distanceChooser}>
            в километрах </button>
            , <button
            className={styles.distanceChooser}>
            в дистанциях до луны </button></div>
        {
            onlyDangerous ?
            asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard {...item} />) :
            asteroids.map((item)=><AsteroidCard {...item} />)
        }
    </div>
}

const generateAsteroids = ()=>{
    const months = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря",];
    const characters = "ABCDEFGHIJGKLMNOPQRSTYVWXYZ"
    const result = [];

    for (let i = 0; i < 10; i++) {

        const name = characters[(
            Math.random() * 25).toFixed(0)] + characters[(
            Math.random() * 25).toFixed(0)];
        const date = `${(
            Math.random() * characters.length + 1).toFixed(0)} ${months[(
            Math.random() * 11).toFixed(0)]} 2024`;
        const size = (
            Math.random() * 100 + 10).toFixed(0);
        const distance = (
            Math.random() * 9000000 + 10).toFixed(0);
        const isDangerous = Math.random() >= 0.5;

        result.push({name, date, size, distance, isDangerous});
    }
    return result;
}