import PageCardContent from "../plantPageCardContent/PageCardContent";
import PageCardTabs from "../plantPageCardTabs/PageCardTabs";
import type {Catalog} from "@/mock/catalog";
import type {Dispatch, SetStateAction} from "react";

export type ClickedButton =
        'Watering' |
        'Light' |
        'Temperature' |
        'Repotting' |
        'Fertilising' |
        'Care' |
        'Potting soil' |
        'Description' |
        'Growing tips' |
        'Propagation' |
        'Common problems'

export type Gender = 'male' | 'female'



function PageCard({plantItem, clickedButton, setClickedButton, gender}:{plantItem:Catalog[], clickedButton: ClickedButton, setClickedButton: Dispatch<SetStateAction<ClickedButton>> ,gender: Gender}) {

    return (
        <div>
            <PageCardTabs setClickedButton={setClickedButton} />
            <PageCardContent  plantItem={plantItem} clickedButton={clickedButton} gender={gender}/>
        </div>
    )
}

export default PageCard