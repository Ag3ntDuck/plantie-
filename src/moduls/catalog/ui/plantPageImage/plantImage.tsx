import image from'../../../../shared/assets/img/pictures/plantPlaceholder.png'
import styles from '../plantPage/PlantPage.module.css'

function PlantImage() {
    return (
        <div>
            <div className={styles.imageBigWrapper}>
                <img src={image.src}/>
            </div>
            <div className={styles.imageSmallWrapper}>
                <img src={image.src}/>
                <img src={image.src}/>
                <img src={image.src}/>
                <img src={image.src}/>
                <img src={image.src}/>
                <img src={image.src}/>
            </div>

        </div>
    )
}

export default  PlantImage