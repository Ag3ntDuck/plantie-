import {type Dispatch, type SetStateAction, useEffect} from "react";
import styles from './PageFilters.module.css'
import Button from "../design-system/buttons/Button";

function PageFilters({value, setValue}: {value: string[], setValue:  Dispatch<SetStateAction<string[]>>}) {
    const chosenElArray: string[] = []
    const someFunc = () => {
        const selectNodeArray = document.querySelectorAll('select');
        const selectArray = Object.values(selectNodeArray)
        selectArray.forEach(el => {
            chosenElArray.push(el.value)
        })

        setValue(chosenElArray)
        console.log(value)
    }



    useEffect(() => {
        console.log(value)
    }, [value]);

    return (
        <aside className={styles.filtersWrapper}>
            <div>
                <p >Цвет</p>
                <ul>
                    <input type={"checkbox"}  />
                    <input type={"checkbox"} />
                    <input type={"checkbox"} />
                    <input type={"checkbox"} />
                    <input type={"checkbox"} />
                </ul>
            </div>
            <div>
                <p>Освещение</p>
                <select >
                    <option value={'все'}>Все</option>
                    <option value={'тень'}>тень</option>
                    <option  value={'полутень'}>Полутень</option>
                    <option  value={'рассеянный свет'}>Рассеянный свет</option>
                    <option  value={'яркий свет'}>Яркий свет</option>
                </select>
            </div>
            <div>
                <p>Полив</p>
                <select>
                    <option value={'все'}>Все</option>
                    <option value={'редко'}>редко</option>
                    <option value={'умеренно'}>умеренно</option>
                    <option value={'часто'}>часто</option>
                </select>
            </div>
            <div>
                <p>Влажность</p>
                <select>
                    <option value={'все'}>Все</option>
                    <option value={'низкая'}>низкая</option>
                    <option value={'средняя'}>средняя</option>
                    <option value={'высокая'}>высокая</option>
                </select>
            </div>
            {/*<div>*/}
            {/*    <p>Размер</p>*/}
            {/*    <select>*/}
            {/*        <option value={'1'}>Все</option>*/}
            {/*        <option value={'2'}>маленькое</option>*/}
            {/*        <option value={'3'}>среднее</option>*/}
            {/*        <option value={'4'}>крупное</option>*/}
            {/*    </select>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>Сложность</p>*/}
            {/*    <select>*/}
            {/*        <option value={'1'}>Все</option>*/}
            {/*        <option value={'2'}>низкая</option>*/}
            {/*        <option value={'3'}>средняя</option>*/}
            {/*        <option value={'4'}>высокая</option>*/}
            {/*    </select>*/}
            {/*</div>*/}

            <div  itemID={'button13'} onClick={() => {someFunc()}}>
                <Button buttonType={'primary'}>otpreavit</Button>
            </div>

        </aside>
    )
}

export default  PageFilters