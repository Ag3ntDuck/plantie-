import {type Catalog, catalog, type Category, CATERGORIES} from "./catalog";

const sleep = (time: number) => new Promise(resolve => setTimeout( resolve,time))


 export const makeRequest = async (method: string): Promise<Catalog[] | Category[] > => {
    await sleep(2000)

    switch (method) {
        case 'categories': return CATERGORIES;
        case 'catalog': return catalog
        default: return catalog
    }
}