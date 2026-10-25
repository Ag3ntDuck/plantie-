import './profileCard.css'
import image from '../../../../shared/assets/img/pictures/plantPlaceholder.png'
import Button from "../../../../shared/ui/design-system/buttons/Button";

function ProfileCard() {
    return (
        <div className={'profile-card-wrapper'}>
            <div className={'profile-card-info'}>
                <div className={'profile-card-info__header'}>
                    <h1>My profile</h1>
                    <Button buttonType={'secondary'}>
                        Edit profile
                    </Button>
                </div>

                <p>Name</p>
                <p>Surname</p>
                <p>Example@email.com</p>
            </div>
            <div className={'profile-card-info__avatar'}>
                <img src={image.src}/>
            </div>
        </div>
    )
}

export default ProfileCard