"use client"
import PlantCard from "../../../../moduls/catalog/ui/plantCards/PlantCard";
import styles from './aboutPageCards.module.css'
import {useEffect, useState} from "react";
import type {Catalog} from "@/mock/catalog";
import {makeRequest} from "@/mock/requests";
import Link from "next/link";



function AboutPageCards() {
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


    const kys = catalog?.filter(el => el.rating >= 4)

    useEffect(() => {
        const init = async () => {
            await getCatalog()
        }
        init().then()

    }, [])

    return (
        <div className={styles.hmmm}>
            <div className={styles.helpme}>
                <div className={styles.aboutHeader}>
                    <h1>Popular plants</h1>
                    <p>View all →</p>
                </div>
                {loading && <p>Loading...</p>}
                {!loading && <div className={styles.cardsWrapper}>
                    {kys.map(el => {

                        return <Link href={`/plants/${el.id}`} key={el.id + '123'} className={styles.asd}>
                            <PlantCard  cho={el}/>
                        </Link>
                    })}
                </div>}


            </div>

        </div>
    )
}

export default AboutPageCards