
import styles from './CreatePlantTabContent.module.css'
import type {Dispatch, SetStateAction} from "react";
import {ClickedButton} from "@/moduls/catalog/ui/plantPageCard/PageCard";
import CreatePlantComplexity from "@/moduls/createPlant/ui/plantComplexity/CreatePlantComplexity";
import CreatePlantTabNavigation from "@/moduls/createPlant/ui/tabNavigation/CreatePlantTabNavigation";


function CreatePlantTabContent({setClickedButton}:{setClickedButton: Dispatch<SetStateAction<ClickedButton>>}) {
    return (
        <div className={styles.tabContentWrapper}>
            <CreatePlantComplexity />
            <CreatePlantTabNavigation setClickedButton={setClickedButton} />
        </div>
    )
}

export default CreatePlantTabContent