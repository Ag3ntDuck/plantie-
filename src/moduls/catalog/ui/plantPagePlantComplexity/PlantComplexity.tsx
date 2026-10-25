import Svg from "../../../../shared/ui/design-system/svg/svg";
import styles from './PlantComplexity.module.css'

function PlantComplexity() {
    return (
        <div className={styles.complexityWrapper}>
            <div className={styles.leafList}>
               <Svg variants={'leaf'}/>
                <Svg variants={'leaf'}/>
                <Svg variants={'leafEmpty'}/>
            </div>
            <p>complexity</p>
        </div>
    )
}

export default PlantComplexity