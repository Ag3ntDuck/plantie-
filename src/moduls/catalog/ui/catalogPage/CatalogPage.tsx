"use client"
import PageFilters from "../../../../shared/ui/filters/pageFilters";
import CatalogPageContent from "../catalogPageContent/CatalogPageContent";
import styles from './CatalogPage.module.css'
import {useState} from "react";
import CategoriesFilters from "@/shared/ui/filters/categoriesFilter/categoriesFilter";
import {useParams} from "next/navigation";


function CatalogPage() {
    const [value, setValue] = useState([''])
    const {id} = useParams()

    return (
        <div>
            <div className={styles.pageWrapper}>
                <h1>Categories/{id}</h1>
                <div className={styles.catalogWrapper}>
                    <div className={styles.rest}>
                        <CategoriesFilters />
                        <PageFilters value={value} setValue={setValue}/>
                    </div>

                    <CatalogPageContent value={value}/>
                </div>

            </div>
        </div>
    )
}

export  default  CatalogPage