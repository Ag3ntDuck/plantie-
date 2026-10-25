"use client"

import {useEffect, useState} from "react";
import {makeRequest} from "@/mock/requests";
import type {Category} from "@/mock/catalog";


import Button from "../../../../shared/ui/design-system/buttons/Button";
import Svg from "../../../../shared/ui/design-system/svg/svg";
import styles from './CatalogList.module.css'
import Link from "next/link";

function TestCatalog() {
    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCatalog] = useState<Category[]>([]);
    const [categoryId, setCategoryId] = useState(0)

    const getCatalog = async () => {
        try {
            setIsLoading(true)
            const resp = await makeRequest('categories') as Category[]
            setCatalog(resp)
        } catch (err) {
            console.log(err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const init = async () => {
            await getCatalog()

        }
        init().then()

    }, [])

    useEffect(() => {
        console.log(categories)
    }, [categories])


    return (
        <div >
            {isLoading &&
                <p className={styles.categoriesWrapper}>Loading categories....</p>}
            {!isLoading &&
                <div className={styles.categoriesWrapper}>
                    <div className={styles.categoriesWrapperContent}>
                        <div className={styles.categoriesWrapperList}>
                            <p>Categories</p>
                            <div>
                                {categories.map(value => {
                                    if (!value.parentId) {
                                        return (
                                            <div onMouseEnter={() => setCategoryId(value.id)}
                                                 className={styles.categoriesBig}>
                                                <Link href={`/categories/${value.title}`}>
                                                    <Button buttonType={"withoutBg"}>{value.title}</Button>
                                                </Link>

                                                <Svg variants={'arrow'}/>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                            <div >
                                {categories.map(value => {
                                    if (value.parentId?.includes(categoryId)) {
                                        return <div className={styles.categoriesSmall}>
                                            <Link href={`/categories/${value.title}`}>
                                                <Button buttonType={"withoutBg"}>
                                                    {value.title}
                                                </Button>
                                            </Link>
                                        </div>
                                    }
                                })}
                            </div>

                        </div>
                        <div className={styles.popularPlantCard}>карточка cardComponent u know</div>
                    </div>

                </div>}

        </div>
    )
}

export default TestCatalog