import Button from "../../../../shared/ui/design-system/buttons/Button";
import styles from './PageTabNavigation.module.css'
import Svg from "../../../../shared/ui/design-system/svg/svg";
import type {Dispatch, SetStateAction} from "react";
import type {ClickedButton} from "../plantPageCard/PageCard.tsx";

function PageTabNavigation({setClickedButton}:{setClickedButton: Dispatch<SetStateAction<ClickedButton>>}) {
    return (
        <div className={styles.tabNavigationWrapper}>
            <div className={styles.tabFavorite}>
                <Button buttonType={'primary'} >
                    {'Favorite'}
                    <Svg variants={'favorite'}/>
                </Button>

            </div>

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

export default PageTabNavigation