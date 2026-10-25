import styles from './PageCardContent.module.css'
import {type Catalog, Seasons} from "@/mock/catalog";
import type {ClickedButton, Gender} from "../plantPageCard/PageCard.tsx";



function PageCardContent({plantItem, clickedButton, gender}:{plantItem:Catalog[], clickedButton: ClickedButton, gender: Gender}) {

    const renderingContent = () => {

            return plantItem.map(el => {

                const currentGender = el.genders[gender]


                switch (clickedButton) {
                    case 'Watering':
                        return currentGender.plantCare.watering.description

                    case 'Light':
                        return currentGender.plantCare.light.description

                    case 'Temperature':
                        return currentGender.plantCare.temperature.description

                    case 'Potting soil':
                        return currentGender.plantCare.soil.description

                    case 'Fertilising':
                        return currentGender.plantCare.nutritious

                    case 'Repotting':
                        return currentGender.plantCare.repotting.description

                    case 'Care':
                        return (
                            <div>
                                <p>Рейтинг: {el.rating}</p>
                                <p>{currentGender.plantCare.watering.description}</p>
                                <p>{currentGender.plantCare.temperature.description}</p>
                                <p>{currentGender.plantCare.watering.description}</p>
                                <p>{currentGender.plantCare.nutritious}</p>
                            </div>
                        )
                    case "Description":
                        return (
                            <div>
                                <p>Цвета: {currentGender.color.label}</p>
                                <p>Тип цветка: {currentGender.flower.label}</p>
                                <p>Время посадки: {Seasons[currentGender.plantingTime]}</p>
                                <p>Средняя высота: {currentGender.size[0]}</p>
                                <p>Средняя ширина: {currentGender.size[1]}</p>

                            </div>
                        )
                    case "Growing tips":
                        return (
                            <div>{currentGender.plantCare.label}</div>
                        )

                    case "Propagation":
                        return (
                            <div>
                                <p>Тип размножения: {el.pollination.label}</p>
                                <p>{el.pollination.description}</p>
                            </div>
                        )
                    case "Common problems":
                        return (
                            <div>
                                <p>{currentGender.plantCare.commonProblems.label}</p>
                                <p> problems: {currentGender.plantCare.commonProblems.problems}</p>
                                <p> solving: {currentGender.plantCare.commonProblems.solving}</p>
                            </div>
                        )
                }

                })

    }

    return (
        <div className={styles.pageCardContentWrapper}>
            {renderingContent()}
        </div>
    )
}

export default PageCardContent