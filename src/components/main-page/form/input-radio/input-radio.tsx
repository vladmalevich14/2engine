import {ReactComponent as Call} from 'assets/svg-icons/call.svg'
import {ReactComponent as Email} from 'assets/svg-icons/email.svg'
import {ReactComponent as Telegram} from 'assets/svg-icons/tg.svg'
import {ReactComponent as WhatsApp} from 'assets/svg-icons/whats-app.svg'
import s from "components/main-page/form/form.module.scss";
import {ChangeEvent} from "react";

type PropsType = {
    id: string
    value: string
    label: string
    onChangeValue: (value: string) => void
    defaultChecked?: boolean
}

export const InputRadio = ({onChangeValue, id, value, label, defaultChecked = false}: PropsType) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.value)
    }

    return <div className={s.radioItem}>
        <input id={id} type="radio" name={'method'} value={value} defaultChecked={defaultChecked}
               onChange={onChange}/>
        <label htmlFor={id} className={s.radioLabel}>
            {value === 'call' && <Call/>}
            {value === 'email' && <Email/>}
            {value === 'telegram' && <Telegram/>}
            {value === 'whatsApp' && <WhatsApp/>}
            {label}
        </label>
    </div>
}