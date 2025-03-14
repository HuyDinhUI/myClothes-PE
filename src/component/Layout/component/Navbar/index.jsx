import styles from './navbar.module.scss'


const Navbar = ({children}) =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Navbar