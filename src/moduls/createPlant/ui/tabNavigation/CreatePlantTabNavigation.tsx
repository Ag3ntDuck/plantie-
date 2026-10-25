import styles from "@/moduls/catalog/ui/plantPageTabNavigation/PageTabNavigation.module.css";
import Button from "@/shared/ui/design-system/buttons/Button";
import Svg from "@/shared/ui/design-system/svg/svg";
import type {Dispatch, SetStateAction} from "react";
import type {ClickedButton} from "@/moduls/catalog/ui/plantPageCard/PageCard";

export default function CreatePlantTabNavigation({setClickedButton}:{setClickedButton: Dispatch<SetStateAction<ClickedButton>>}) {
    return (
        <div className={styles.tabNavigationWrapper}>
            
            <div className={styles.navigationList}>
                <Button buttonType={'withoutBg'} func={() => setClickedButton('Watering')}>
                    {'Watering'}
                    <Svg variants={'arrow'}/>
                </Button>
                <Button buttonType={'withoutBg'} func={() => setClickedButton('Light')}>
                    {'Light'}
                    <Svg variants={'arrow'}/>
                </Button>
                <Button buttonType={'withoutBg'} func={() => setClickedButton('Temperature')}>
                    {'Temperature'}
                    <Svg variants={'arrow'}/>
                </Button>
                <Button buttonType={'withoutBg'} func={() => setClickedButton('Repotting')} >
                    {'Repotting'}
                    <Svg variants={'arrow'}/>
                </Button>
                <Button buttonType={'withoutBg'} func={() => setClickedButton('Potting soil')}>
                    {'Potting soil'}
                    <Svg variants={'arrow'}/>
                </Button>
                <Button buttonType={'withoutBg'} func={() => setClickedButton('Fertilising')}>
                    {'Fertilising'}
                    <Svg variants={'arrow'}/>
                </Button>
            </div>


        </div>
    )
}