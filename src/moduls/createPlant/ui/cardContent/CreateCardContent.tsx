import styles from './CreateCardContent.module.css'
import {ClickedButton} from "@/moduls/catalog/ui/plantPageCard/PageCard";

import Input from "@/shared/ui/design-system/inputs/input";



function CreateCardContent({clickedButton}: { clickedButton: ClickedButton}) {

    const renderingContent = () => {


            switch (clickedButton) {
                case 'Watering':
                    return <Input placeholderText={'a'}></Input>

                case 'Light':
                    return <Input placeholderText={'b'} ></Input>

                case 'Temperature':
                    return <Input placeholderText={'c'} ></Input>

                case 'Potting soil':
                    return <Input placeholderText={'d'} ></Input>

                case 'Fertilising':
                    return <Input placeholderText={'e'} ></Input>
                case 'Repotting':
                    return <Input placeholderText={'f'} ></Input>

                case 'Care':
                    return (
                        <div>
                            <Input placeholderText={'Care Description'} ></Input>
                        </div>
                    )
                case "Description":
                    return (
                        <div>
                            <Input placeholderText={'Plant Description'} ></Input>

                        </div>
                    )
                case "Growing tips":
                    return (
                        <Input placeholderText={'Growing tips'} ></Input>
                    )

                case "Propagation":
                    return (
                        <div>
                            <Input placeholderText={'Propagation Description'} ></Input>
                        </div>
                    )
                case "Common problems":
                    return (
                        <div>
                            <Input placeholderText={'Common problems'} ></Input>

                        </div>
                    )
            }

        }


    return (
        <div className={styles.pageCardContentWrapper}>
            {renderingContent()}
        </div>
    )
}

export default CreateCardContent