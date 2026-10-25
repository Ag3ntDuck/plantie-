
import './button.css'
import type {MouseEventHandler, ReactNode} from "react";
type buttonType =  'primary' | 'secondary' | 'withoutBg' | 'active'


function Button({children, buttonClass,  buttonType = 'primary', func}: {func?: MouseEventHandler<HTMLButtonElement> ,children?: ReactNode[] | ReactNode, buttonClass?: string, buttonType: buttonType}) {
    return (
        <button className={`${buttonClass} ${buttonType} `} onClick={func}>
            {children}
        </button>

    )
}

export default Button