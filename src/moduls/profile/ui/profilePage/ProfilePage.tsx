import ProfileCard from "../profileCard/ProfileCard";
import ProfileFavorite from "../favorite/ProfileFavorite";
import ProfileList from "../list/ProfileList";
import './profilePage.css'

function ProfilePage() {
    return (
        <div className={'profile-wrapper'}>
            <div>
                <ProfileCard/>
                <ProfileFavorite/>
            </div>
            <ProfileList/>
        </div>
    )
}

export default ProfilePage