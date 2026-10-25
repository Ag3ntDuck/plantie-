"use client"
import styles from "@/moduls/catalog/ui/plantPage/PlantPage.module.css";
import PlantImage from "@/moduls/catalog/ui/plantPageImage/plantImage";
import Svg from "@/shared/ui/design-system/svg/svg";
import CreatePlantName from "@/moduls/createPlant/ui/plantName/CreatePlantName";
import CreatePlantTags from "@/moduls/createPlant/ui/tags/CreatePlantTags";
import CreatePlantPageCard from "@/moduls/createPlant/ui/plantCard/CreatePlantPageCard";
import CreatePlantTabContent from "@/moduls/createPlant/ui/tabContent/CreatePlantTabContent";
import {useState} from "react";
import {ClickedButton} from "@/moduls/catalog/ui/plantPageCard/PageCard";
import Button from "@/shared/ui/design-system/buttons/Button";
import CreatePlantImage from "@/moduls/createPlant/ui/createImage/CreatePlantImage";

export default function CreatePlant() {
    const [clickedButton, setClickedButton] = useState<ClickedButton>('Care')

    return <div>

        {<div className={styles.plantPageWrapper}>
            <div className={styles.imageWrapper}>
                <CreatePlantImage/>
            </div>
            <div className={styles.pagePlantAboutContentWrapper}>
                <Svg variants={'vetka'}/>
                <Svg variants={'vetkaRight'}/>
                <CreatePlantName/>
                <CreatePlantTags/>
                <CreatePlantPageCard clickedButton={clickedButton} setClickedButton={setClickedButton}/>

            </div>
            <div className={styles.plantPageTabContentWrapper}>
                <CreatePlantTabContent setClickedButton={setClickedButton}/>
            </div>
        </div>}
    </div>
}