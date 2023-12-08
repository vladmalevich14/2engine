import {CompanyName} from "components/header/company-name/company-name";
import {ReactComponent as Phone} from 'assets/svg-icons/phone.svg'
import {ReactComponent as Mail} from 'assets/svg-icons/mail.svg'
import {ReactComponent as Chat} from 'assets/svg-icons/chats.svg'
import {ReactComponent as Telegram} from 'assets/svg-icons/telegram.svg'
import s from './contacts.module.scss'

export const Contacts = () => {
    return <div className={s.contacts}>
        <CompanyName/>
        <span className={s.contact}>
            <Phone className={s.contactIcon}/>
            8 800 216-03-73
        </span>
        <span className={s.contact}>
            <Mail className={s.contactIcon}/>
            hello@metalgo.biz
        </span>
        <a href='#' className={s.contactLink}>
            <Chat className={s.contactIcon}/>
            Чат с поддержкой
        </a>
        <a href='#' className={s.contactLink}>
            <Telegram/>
        </a>
    </div>
}