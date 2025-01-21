import styles from "./AsteroidCardAction.module.css"

export const AsteroidCardAction = ({isDangerous}) =>{
    return (<div className={styles.actions}>
        <div className={styles.actionGrade}>{`Оценка: ${isDangerous ? 'Опасен' : 'Не опасен'}`} </div>
        <button className={styles.action}>
            <div className={styles.actionText}>На уничтожение</div>
        </button>
    </div>)
}