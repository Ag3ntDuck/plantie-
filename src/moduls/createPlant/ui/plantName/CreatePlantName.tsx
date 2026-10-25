import styles from './CreatePlantName.module.css'
import Button from "../../../../shared/ui/design-system/buttons/Button";
import Input from "@/shared/ui/design-system/inputs/input";



function CreatePlantName() {
    return (
        <div className={styles.plantNameWrapper}>
               <div>
                   <Input placeholderText={'Plant name'} inputClass={styles.plantName} />
                   <Input placeholderText={'Latin plant name'} inputClass={styles.plantLatinName}/>
                </div>

            <div className={styles.plantNameGenderWrapper}>
                <Button buttonType={'primary'}> Change to male plant</Button>
                <p>/</p>
                <Button buttonType={'primary'}>Change to female plant</Button>
                <Button buttonType={'primary'}>no difference</Button>
            </div>
        </div>
    )
}

export default CreatePlantName