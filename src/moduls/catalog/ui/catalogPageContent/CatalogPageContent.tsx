import {useEffect, useState} from "react";
import {makeRequest} from "@/mock/requests";
import type {Catalog} from "@/mock/catalog";
import PlantCard from "../plantCards/PlantCard";
import styles from './CatalogPageContent.module.css'
import Link from "next/link";
import {useParams} from "next/navigation";
// import {Link} from "react-router";
function CatalogPageContent({value}: {value: string[]}) {
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
            // el.genders.female.plantCare.soil.label,


            const filterFemale = [
                el.genders.female.plantCare.light.label,
                el.genders.female.plantCare.watering.label,
                el.genders.female.plantCare.humidity.label
            ]

            const filterMale = [
                el.genders.male.plantCare.light.label,
                el.genders.male.plantCare.watering.label,
                el.genders.male.plantCare.humidity.label
            ]


            return value.every((filter, index) => {
                if (filter === 'все') {
                    return true;
                }

                return filterFemale[index] === filter && filterMale[index] === filter;
                // return filterFemale.includes(filter);
            });

        })



    return (
        <div className={styles.cardsWrapper}>
            {responseFiltered.length === 0 && value.length !== 1 && <p>нет элементов</p>}
            {value.length === 1 && responce.map(el => {
                if (el.rating >= 4) {
                   return <Link href={`/plants/${el.id}`}>
                       <PlantCard cho={el}/>
                   </Link>
                }
            })}
            {responseFiltered.map(el => (
               <Link href={`/plants/${el.id}`}>
                   <PlantCard cho={el}/>
               </Link>
            ))}
        </div>
    )
}

export default  CatalogPageContent