import Button from "../../../../shared/ui/design-system/buttons/Button";
import styles from './CreatePlantTag.module.css'
import Input from "@/shared/ui/design-system/inputs/input";



function CreatePlantTags() {

    return (

             <div className={styles.plantTagsList}>
                    <div className={styles.plantTagsListWrapper}>
                        <p>Add female tags:</p>
                        <Input placeholderText={'tags'} inputClass={styles.plantTagsListWrapper}/>
                    </div>
                    <div className={styles.plantTagsListWrapper}>
                        <p>Add male tags:</p>
                        <Input placeholderText={'tags'} inputClass={styles.plantTagsListWrapper}/>
                    </div>


                </div>

    )
}

export default CreatePlantTags

