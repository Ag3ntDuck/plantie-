import './footer.css'
import Input from "../../../shared/ui/design-system/inputs/input";


function Footer()  {
    return (
        <footer className={'footerWrapper'}>
            <div className={'footerWrapperInside'}>
                <p>Made with love by AgentDuck</p>
                <div className={'footerMailWrapper'}>
                    <p>Got any questions?</p>
                    <Input placeholderText={'yourmail@mail.com'} inputClass={'footerMail'}></Input>
                </div>
            </div>
        </footer>
    )
}
export default  Footer