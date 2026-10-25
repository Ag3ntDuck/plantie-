
import styles from './PlantCard.module.css'
import Svg from "../../../../shared/ui/design-system/svg/svg";
import type {Catalog} from "@/mock/catalog";
import image from '../../../../shared/assets/img/pictures/plantPlaceholder.png'



function  PlantCard({cho}:{cho: Catalog}) {
    console.log(cho)
    return <div className={styles.cardListWrapper}>
        <div className={styles.cardListImageWrapper}>
            <img src={image.src} className={styles.cardListImage}/>
            <Svg variants={'vetka'}/>
            <Svg variants={'vetkaRight'}/>
        </div>
        <div className={styles.cardListName}>
            <p>{cho.label}</p>
        </div>
    </div>
}

export default  PlantCard