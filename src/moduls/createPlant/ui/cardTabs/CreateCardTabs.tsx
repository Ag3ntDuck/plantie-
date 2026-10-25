"use client"
import Button from "../../../../shared/ui/design-system/buttons/Button";
import styles from './CreateCardTabs.module.css'
import {ClickedButton} from "@/moduls/catalog/ui/plantPageCard/PageCard";
import type {Dispatch, SetStateAction} from "react";

function CreateCardTabs({clickedButton, setClickedButton}: {clickedButton: ClickedButton,  setClickedButton:Dispatch<SetStateAction<ClickedButton>>}) {
    return (
        <div className={styles.pageCardTabsWrapper}>
            <Button buttonType={'active'} func={() => setClickedButton('Care')}>
                {'Care'}
            </Button>
            <Button buttonType={'withoutBg'}  func={() => setClickedButton('Description')}>
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

export default CreateCardTabs