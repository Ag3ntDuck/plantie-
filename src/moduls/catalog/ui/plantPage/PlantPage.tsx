"use client"

import PlantName from "../plantPagePlantName/PlantName";
import PageTags from "../plantPageTags/PageTags";
import styles from './PlantPage.module.css'
import PageTabContent from "../plantPageTabContent/PageTabContent";
import PageCard, {type ClickedButton, type Gender} from "../plantPageCard/PageCard";
import Svg from "../../../../shared/ui/design-system/svg/svg";
import PlantImage from "../plantPageImage/plantImage";
// import {useParams} from "react-router";
import {useEffect, useState} from "react";
import type {Catalog} from "@/mock/catalog";
import {makeRequest} from "@/mock/requests";
import {useParams} from "next/navigation";

function PlantPage() {
    const { id } = useParams();
    const [catalog, setCatalog] = useState<Catalog[]>([]);
    const [loading, setLoading] = useState(true)
    const getCatalog = async  () => {
        try {
            setLoading(true)
            const resp  =  await makeRequest('catalog') as Catalog[]
            if (!resp) return
            setCatalog(resp)
        }
        catch(err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        const init = async () => {
            await getCatalog()
        }
        init().then()

    }, [])

    const plantById = catalog.filter(el => {
        const i = Number(el.id)
        const r = Number(id)
        return i === r
    })

    const [clickedButton, setClickedButton] = useState<ClickedButton>('Care')
    const [gender, setGender] = useState<Gender>('male')


    return (
        <div>
            {loading && <p>грузим......</p>}
            {!loading && <div className={styles.plantPageWrapper}>
                <div className={styles.imageWrapper}>
                    <PlantImage/>
                </div>
                <div className={styles.pagePlantAboutContentWrapper}>
                    <Svg variants={'vetka'}/>
                    <Svg variants={'vetkaRight'}/>
                    <PlantName plantItem={plantById} setGender={setGender}/>
                    <PageTags plantItem={plantById}/>
                    <PageCard plantItem={plantById} clickedButton={clickedButton} setClickedButton={setClickedButton} gender={gender}/>
                </div>
                <div className={styles.plantPageTabContentWrapper}>
                    <PageTabContent setClickedButton={setClickedButton}/>
                </div>
            </div>}
        </div>
    )
}

export default PlantPage