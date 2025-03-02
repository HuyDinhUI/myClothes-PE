import styles from './defaultlayout.module.scss'
import Header from '../component/Header/index'
import Footer from '../component/Footer/index'

const DefaultLayout = ({children}) =>{

    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout