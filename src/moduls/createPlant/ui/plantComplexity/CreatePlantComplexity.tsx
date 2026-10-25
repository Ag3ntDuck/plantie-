import styles from "@/moduls/catalog/ui/plantPagePlantComplexity/PlantComplexity.module.css";
import Svg from "@/shared/ui/design-system/svg/svg";

export default function CreatePlantComplexity() {
    return (
        <div className={styles.complexityWrapper}>
            <p>сложность</p>
            <select>
                <option className={styles.leafList}>
                   easy
                </option>
                <option className={styles.leafList}>
                    medium
                </option>
                <option className={styles.leafList}>
                   hard
                </option>
            </select>
        </div>
    )

}