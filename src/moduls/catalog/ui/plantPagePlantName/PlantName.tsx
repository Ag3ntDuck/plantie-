import styles from './PlantName.module.css'
import type {Catalog} from "@/mock/catalog";
import Button from "../../../../shared/ui/design-system/buttons/Button";
import type {Dispatch, SetStateAction} from "react";
import type {Gender} from "../plantPageCard/PageCard.tsx";

function PlantName({plantItem, setGender}:{plantItem:Catalog[], setGender: Dispatch<SetStateAction<Gender>>}) {
    return (
        <div className={styles.plantNameWrapper}>
            {plantItem.map(el => {
                return <div>
                    <h1 className={styles.plantName}>{el.label}</h1>
                    <p className={styles.plantLatinName}>sosalus bigus diccus</p>
                </div>
            })}
            <div className={styles.plantNameGenderWrapper}>
                <Button buttonType={'primary'} func={() => setGender('male')}>Male plant</Button>
                <p>/</p>
                <Button buttonType={'primary'} func={() => setGender('female')}>Female plant</Button>
            </div>
        </div>
    )
}

export default PlantName