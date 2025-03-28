import styles from './navbar.module.scss'


const Navbar = ({children, classname}) =>{
    return (
        <div className={styles[classname]}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Navbar