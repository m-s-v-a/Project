import styles from "./Asteroids.module.css"
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";
import {useEffect, useState} from "react";
import {Header} from "../components/header/Header";

export const Asteroids = () => {

    const [asteroids, setAsteroids] = useState([]);

    const [onlyDangerous, setOnlyDangerous] = useState(false);

    const [distanceMode, setDistanceMode] = useState(false)

    useEffect(() => {
        const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY").then((res) => {
            return res.json()
        }).then((response) => {
            let rawAsteroids = []
            for (const data in response.near_earth_objects) {
                rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data])
            }
            const asteroids = rawAsteroids.map(item => {
                const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2);
                const close = item.close_approach_data[0]

                return {
                    name: item.name,
                    date: close.close_approach_date,
                    size,
                    distance: {kilometers: Math.trunc(close.miss_distance.kilometers), lunar: Math.trunc(close.miss_distance.lunar)},
                    isDangerous: item.is_potentially_hazardous_asteroid,
                    id: item.id
                }
            })
            setAsteroids(asteroids)
        })
    }, [])

    return <div>
        <Header/>

        <div className={styles.showDangerousOnly}>
            <input type="checkbox" value={onlyDangerous} onChange={() => setOnlyDangerous(!onlyDangerous)}>
            </input> Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние <button onClick={() => setDistanceMode(true)}
                               className={styles.distanceChooser}>
            в километрах </button>
            , <button onClick={() => setDistanceMode(false)}
                      className={styles.distanceChooser}>
            в дистанциях до луны </button></div>
        {
            onlyDangerous ?
                asteroids.filter((item) => item.isDangerous).map((item) =>
                    <AsteroidCard key={item.id} {...item} distanceMode={distanceMode} />) : asteroids.map((item) =>
                    <AsteroidCard key={item.id} {...item} distanceMode={distanceMode} />)
        }
    </div>
}

const generateAsteroids = () => {
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

        result.push({name, date, size, distance, isDangerous, id: name});
    }
    return result;
}