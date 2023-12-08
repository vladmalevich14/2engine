import {Contacts} from "components/footer/contacts/contacts";
import {InfoContainer} from "components/footer/info-container/info-container";
import {FooterForMobile} from "components/footer/footer-for-mobile/footer-for-mobile";
import s from './footer.module.scss'

export const Footer = () => {
    return <footer className={s.footer}>
        <Contacts/>
        <InfoContainer/>
        <FooterForMobile/>
    </footer>
}
