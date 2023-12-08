import s from './info-container.module.scss'
import {FooterLink} from "components/footer/info-container/footer-link/footer-link";
import {Partners} from "components/footer/info-container/partners/partners";

export const InfoContainer = () => {

    const whiteLinkNames = [
        'Покупателям', 'Тарифы', 'Справочник металлопроката', 'Статистика цен металлопроката', 'Поставщикам', 'Калькулятор металла', 'Калькулятор доставки'
    ]
    const greyLinkNames = ['Публичная оферта', 'Правила пользования']

    return <div className={s.infoContainer}>
        <div className={s.rights}>
            <p>2020 — 2023 © ООО «МеталГо». Все права защищены.</p>
            <p>ИНН 7814652255</p>
        </div>
        <div>
            <div className={s.linksContainer}>
                {whiteLinkNames.map(el => {
                    return <FooterLink linkName={el} key={el}/>
                })}
            </div>
            <div className={s.linksAndLogos}>
                <div>
                    {greyLinkNames.map(el => {
                        return <FooterLink linkName={el} isGrayLink={true} key={el}/>
                    })}
                </div>
                <Partners/>
            </div>
        </div>
    </div>
}