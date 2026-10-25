import Button from "../../../../shared/ui/design-system/buttons/Button";
import styles from './PageCardTabs.module.css'
import type {Dispatch, SetStateAction} from "react";
import type {ClickedButton} from "../plantPageCard/PageCard.tsx";

function PageCardTabs({setClickedButton}:{setClickedButton: Dispatch<SetStateAction<ClickedButton>>}) {
    return (
        <div className={styles.pageCardTabsWrapper}>
            <Button buttonType={'active'} func={() => setClickedButton('Care')}>
                {'Care'}
            </Button>
            <Button buttonType={'withoutBg'} func={() => setClickedButton('Description')}>
                {'Description'}
            </Button>
            <Button buttonType={'withoutBg'} func={() => setClickedButton('Growing tips')}>
                {'Growing tips'}
            </Button>
            <Button buttonType={'withoutBg'} func={() => setClickedButton('Propagation')}>
                {'Propagation'}
            </Button>
            <Button buttonType={'withoutBg'} func={() => setClickedButton('Common problems')}>
                {'Common problems'}
            </Button>
        </div>
    )
}

export default PageCardTabs