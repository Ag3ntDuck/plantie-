import styles from './AuthLoginAccount.module.css'
import Svg from "../../../../shared/ui/design-system/svg/svg";
import Button from "../../../../shared/ui/design-system/buttons/Button";
import Input from "../../../../shared/ui/design-system/inputs/input";
import image from '../../../../shared/assets/img/pictures/aboutPlant.png'
import Link from "next/link";

function LogInAccount() {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.authContent}>
                <h1>Log in to your account</h1>
                <div className={styles.authLogin}>
                    <p>Not a member? </p>
                    <Link href={'/sign-in'} className={styles.navigationLogin}>
                        <Svg variants={'login'}/>
                        <p>Create account</p>
                    </Link>
                </div>
                <div className={styles.authInputs}>
                    <Input placeholderText={'Example@email.com'} inputClass={styles.test}/>
                    <Input placeholderText={'Password'} inputClass={styles.test}/>
                    <Button buttonType={'primary'} buttonClass={styles.authLoginButton}>Log in</Button>
                </div>
            </div>


            <div className={styles.authPicture}>
                <img src={image.src}/>
            </div>
        </div>
    )
}

export default LogInAccount