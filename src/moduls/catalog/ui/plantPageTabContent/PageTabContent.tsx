import PlantComplexity from "../plantPagePlantComplexity/PlantComplexity";
import PageTabNavigation from "../plantPageTabNavigation/PageTabNavigation";
import styles from './PageTabContent.module.css'
import type {Dispatch, SetStateAction} from "react";
import type {ClickedButton} from "../plantPageCard/PageCard.tsx";

function PageTabContent({setClickedButton}:{setClickedButton: Dispatch<SetStateAction<ClickedButton>>}) {
    return (
        <div className={styles.tabContentWrapper}>
            <PlantComplexity />
            <PageTabNavigation setClickedButton={setClickedButton} />
        </div>
    )
}

export default PageTabContent