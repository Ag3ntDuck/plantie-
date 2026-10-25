import styles from './ProfileList.module.css'
import Button from "../../../../shared/ui/design-system/buttons/Button";

function ProfileList() {
    return (
       <div className={styles.profileList}>
           <Button buttonType={'withoutBg'}>
               Personal information
           </Button>
           <Button buttonType={'withoutBg'}>
               Added care plans
           </Button>
           <Button buttonType={'withoutBg'}>
               Favorites
           </Button>
           <Button buttonType={'withoutBg'}>
               Group 1
           </Button>
           <Button buttonType={'withoutBg'}>
               Group 2
           </Button>
           <Button buttonType={'withoutBg'}>
               Log out
           </Button>
       </div>
    )
}

export default ProfileList