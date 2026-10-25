import Button from "../../../../shared/ui/design-system/buttons/Button";
import styles from './ProfileFavorite.module.css'
import PlantCard from "../../../catalog/ui/plantCards/PlantCard";
import type {Catalog} from "@/mock/catalog";

function ProfileFavorite() {
    return (
        <div className={styles.profileFavoriteWrapper}>
            <div className={styles.profileCardTabsWrapper}>
                <Button buttonType={'active'} >
                    {'Favorite'}
                </Button>
                <Button buttonType={'withoutBg'} >
                    {'Group 1'}
                </Button>
                <Button buttonType={'withoutBg'} >
                    {'Group 2'}
                </Button>
                <Button buttonType={'withoutBg'} >
                    {'Add new group'}
                </Button>
            </div>
            <div className={styles.profileFavoriteButtons}>
                <h1>Favorite</h1>
                <Button buttonType={'secondary'}>
                    Edit favorite
                </Button>
            </div>
            <PlantCard cho={{label: "123"} as Catalog}/>
        </div>
    )
}

export default ProfileFavorite