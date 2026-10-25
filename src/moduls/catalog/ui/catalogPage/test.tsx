import {makeRequest} from "../../../../mock/requests.ts";
import {useEffect, useState} from "react";
import type {Catalog, Category} from "../../../../mock/catalog.ts";


function Test() {
    const [catalog, setCatalog] = useState<Catalog[]>([]);
    const [categories, setCategories] = useState< Category[]>([]);
    const [loadingCatalog, setLoadingCatalog] = useState(true)
    const [loadingCategories, setLoadingCategories] = useState(true)

    const getCatalog = async  () => {
        try {
            setLoadingCatalog(true)
            const resp  =  await makeRequest('catalog') as Catalog[]
            if (!resp) return
            setCatalog(resp)
        }
        catch(err) {
            console.log(err)
        }
        finally {
            setLoadingCatalog(false)
        }
    }

    const getCategories = async  () => {
        try {
            setLoadingCategories(true)
            const resp =  await makeRequest('categories') as Category[]
            setCategories(resp)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoadingCategories(false)
        }

    }


    useEffect(() => {
        const init = async () => {
            await getCategories()
            await getCatalog()

        }
        init().then()

    }, [])

    useEffect(() => {
        console.log(catalog, categories)
    }, [categories, catalog])

    return (
        <div>
            <div>
                {loadingCategories && <div>загружаем категории...........</div>}
                {!loadingCategories && categories.map(category => {
                    return (
                        <div key={category.id}>{category.title}</div>
                    )
                })}
            </div>
            <br />
            <div>
                {loadingCatalog && <div>загружаем каталог...........</div>}
                {!loadingCatalog && catalog.map(plant => {
                    return (
                        <div key={plant.id}>{plant.label}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Test