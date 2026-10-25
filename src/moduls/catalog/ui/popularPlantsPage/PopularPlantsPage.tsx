"use client"
import {useEffect, useState} from "react";
import {makeRequest} from "@/mock/requests";
import type {Catalog} from "@/mock/catalog";
import PlantCard from "../plantCards/PlantCard";
import styles from './PopularPlantsPage.module.css'
import Link from "next/link";
import {useParams} from "next/navigation";
// import {Link} from "react-router";

function PopularPlantsPage() {
    const [responce, setResp] = useState<Catalog[]>([]);
    const {id} = useParams()
    const getCatalog =  async ()  => {
        try  {
            const resp = await makeRequest('catalog') as Catalog[];
            setResp(resp)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const init = async () => {
            await getCatalog()
        }
        init().then()

    }, [])

    const responseFiltered =

        responce?.filter(el => {
            return el.rating >= 4
        })



    return (
        <div className={styles.popularWrapper}>
            <h1>Popular plants</h1>
            <div className={styles.cardsWrapper}>

                {responseFiltered.map(el => (
                    <Link href={`/plants/${el.id}`}>
                        <PlantCard cho={el}/>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default  PopularPlantsPage