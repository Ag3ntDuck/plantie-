import Button from "../../../../shared/ui/design-system/buttons/Button";
import styles from './PageTags.module.css'
import type {Catalog} from "@/mock/catalog";


function PageTags({plantItem}:{plantItem: Catalog[]}) {

    return (
        <div >
            {plantItem.map(el => {
                return <div className={styles.plantTagsList}>
                    <div className={styles.plantTagsListWrapper}>
                        <p>Female tags:</p>
                        <div className={styles.plantTagsListWrapper}>{el.genders.female.tags.map(tag => {
                            return <Button buttonType={'secondary'}>{tag}</Button>
                        })}</div>
                    </div>
                    <div className={styles.plantTagsListWrapper}>
                        <p>Male tags:</p>
                        <div className={styles.plantTagsListWrapper}>{el.genders.male.tags.map(tag => {
                            return <Button buttonType={'secondary'}>{tag}</Button>
                        })}</div>
                    </div>


                </div>
            })}
        </div>
    )
}

export default PageTags

