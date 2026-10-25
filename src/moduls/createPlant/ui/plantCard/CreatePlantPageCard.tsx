"use client"
import CreateCardTabs from "@/moduls/createPlant/ui/cardTabs/CreateCardTabs";
import CreateCardContent from "@/moduls/createPlant/ui/cardContent/CreateCardContent";
import {type Dispatch, type SetStateAction, useState} from "react";
import {ClickedButton} from "@/moduls/catalog/ui/plantPageCard/PageCard";
import Button from "@/shared/ui/design-system/buttons/Button";


function CreatePlantPageCard({clickedButton, setClickedButton}:{clickedButton: ClickedButton, setClickedButton: Dispatch<SetStateAction<ClickedButton>>}) {

    return (
        <div>
            <CreateCardTabs clickedButton={clickedButton} setClickedButton={setClickedButton}/>
            <CreateCardContent clickedButton={clickedButton}/>
            <Button buttonType={'primary'}>применить изменения</Button>
         </div>
)
}

export default CreatePlantPageCard