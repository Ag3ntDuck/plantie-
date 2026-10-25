
import styles from './AuthCreateAccount.module.css'
import Svg from "../../../../shared/ui/design-system/svg/svg";
import Button from "../../../../shared/ui/design-system/buttons/Button";
import Input from "../../../../shared/ui/design-system/inputs/input";
import image from '../../../../shared/assets/img/pictures/aboutPlant.png'
import Link from "next/link";

function CreateAccount() {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.authContent}>
                <h1>Create account</h1>
               <div className={styles.authLogin}>
                   <p>Already a member? </p>
                   <Link href={'login'} className={styles.navigationLogin}>
                       <Svg variants={'login'}/>
                       <p>Login</p>
                   </Link>

               </div>
                <div className={styles.authInputs}>
                    <div className={styles.authInputsLogin}>
                        <Input placeholderText={'Name'} inputClass={styles.authLoginInput} />
                        <Input placeholderText={'Surname'} inputClass={styles.authLoginInput} />
                    </div>
                    <Input placeholderText={'Example@email.com'} inputClass={styles.authLoginInput} />
                    <Input placeholderText={'Password'} inputClass={styles.authLoginInput} />
                    <Button buttonType={'primary'} buttonClass={styles.authLoginButton}>Create account</Button>
                </div>
            </div>


            <div className={styles.authPicture}>
                <img src={image.src} />
            </div>
        </div>
    )
}

export default CreateAccount