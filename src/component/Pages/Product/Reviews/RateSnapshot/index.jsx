import styles from './RateSnapshot.module.scss'

const RateSnapshot = ({title, value, total}) =>{
    return (
        <div className={styles.container}>
            <p>{title}</p>
            <div className={styles["RateSnapshot-below"]}>
                <div style={{width:`${value}%`}} className={styles["RateSnapshot-above"]}></div>
            </div>
            <p>{total}</p>
        </div>
    )
}

export default RateSnapshot