import './input.css'
import type {ReactElement} from "react";

function Input({children, placeholderText, inputClass}:{children?: ReactElement, placeholderText: string, inputClass?: string}) {
    return (
        <div className={`inputWrapper ${inputClass}`}>
            {children && <div>{children}</div>}
            <input placeholder={placeholderText} className={'input'}/>
        </div>
    )
}
export default Input