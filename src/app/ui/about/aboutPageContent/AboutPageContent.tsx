import styles from './aboutPageContent.module.css'
import imageAbout from '../../../../shared/assets/img/pictures/aboutPlant.png'

function AboutPageContent() {
    return (
        <div className={styles.wrapperAbout}>
            <div className={styles.test}>
                <h1 className={styles.wrapperHeader}>Tired of not understanding why your plant died again? </h1>
                <p className={styles.wrapperParagraph}>Then try this site</p>
            </div>
            <div className={styles.test2}>
                <img src={imageAbout.src}/>
            </div>
        </div>
    )
}

export default AboutPageContent