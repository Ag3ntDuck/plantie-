"use client"
import styles from '../PageFilters.module.css'
import {Catalog, Category} from "@/mock/catalog";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {makeRequest} from "@/mock/requests";
import Link from "next/link";



function CategoriesFilters() {
const [categories, setCategories] = useState<Category[]>()

const getCategories = async () => {
    try {
        const resp = await makeRequest('categories') as Category[]
        setCategories(resp)
        console.log(categories)
    }
    catch (err) {
        console.log(err)
    }

}

    useEffect(() => {
         getCategories().then()
    }, []);

    return (
        <div className={styles.filtersWrapper}>
            {categories?.map(el => {
                console.log(el)
                if (el.parentId === undefined) {
                    return <div key={el.id}>
                        <Link href={`/categories/${el.title}`}>{el.title}</Link>
                    </div>
                }

            })}
            {categories?.map(el => {
                console.log(el)
                if (el.parentId !== undefined) {
                    return <div key={el.id}>
                        <Link href={`/categories/${el.title}`}>{el.title}</Link>
                    </div>
                }

            })}
        </div>
    )
}

export default  CategoriesFilters