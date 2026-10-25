"use client"

import styles from './Navigation.module.css'
import Svg from "../../design-system/svg/svg";
import Button from "../../design-system/buttons/Button";
import Input from "../../design-system/inputs/input";
import TestCatalog from "../../../../moduls/catalog/ui/categoriesList/CatalogList";
import {useState} from "react";
import Link from "next/link";


function Navigation() {
    const [isHover, setHover] = useState(false)

    return (
        <div className={styles.wrapperNavigation} >
                <div className={styles.navigationCategories}>
                    <Svg variants={"logo"}/>
                    <Button buttonType='withoutBg' >
                        <Link href={'/about'}>About</Link>
                        <Svg variants={'arrow'}/>
                    </Button>

                   <div className={styles.categoriesButton}  onMouseEnter={() => setHover(true)} >
                           <Button  buttonType='withoutBg' >
                               <Link href={'/categories'}>
                                   <p>Categories</p>
                               </Link>

                               <Svg variants={'arrow'}/>
                           </Button>


                   </div>
                    <Button buttonType='withoutBg'>
                        <Link href={'/popular-plants'}>Popular plants</Link>
                        <Svg variants={'arrow'}/>
                    </Button>
                    <Button  buttonType='withoutBg'>
                        <Link href={'/new-plant'}>Add plant care</Link>
                        <Svg variants={'arrow'}/>
                    </Button>
                </div>
                <Input placeholderText={'Find a plant'} inputClass={styles.navigationSearch}>
                    <Svg variants={'search'}></Svg>
                </Input>

            <Link href={'/profile'} className={styles.buttonLink}>
                <Button buttonClass={styles.navigationFavorite}  buttonType='primary'>
                    <Svg variants={'favorite'}/>
                </Button>
            </Link>
            <Link href={'/login'} className={styles.navigationLogin}>
                    <Svg variants={'login'}/>
                    <p>Login</p>
            </Link>

            <div  className={styles.categoriesModal} onMouseLeave={() => setHover(false)} onClick={() => {setHover(false)}}>
                {isHover && <TestCatalog />}
            </div>

        </div>
    )
}

export default Navigation