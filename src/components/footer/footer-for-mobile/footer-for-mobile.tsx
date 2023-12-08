import {ReactComponent as Catalog} from 'assets/svg-icons/catalog-mobile.svg'
import {ReactComponent as Basket} from 'assets/svg-icons/basket-mobile.svg'
import {ReactComponent as Requests} from 'assets/svg-icons/requests-mobile.svg'
import {ReactComponent as Chats} from 'assets/svg-icons/chats-mobile.svg'
import {ReactComponent as Cabinet} from 'assets/svg-icons/cabinet-mobile.svg'
import s from '../footer.module.scss'

export const FooterForMobile = () => {
    return <div className={s.footerMobile}>
        <div className={s.navButton}>
            <Catalog />
            <span>Каталог</span>
        </div>

        <div className={s.navButton}>
            <Basket />
            <span>Корзина</span>
        </div>

        <div className={s.navButton}>
            <Requests />
            <span>Запросы</span>
        </div>

        <div className={s.navButton}>
            <Chats />
            <span>Чаты</span>
        </div>

        <div className={s.navButton}>
            <Cabinet />
            <span>Кабинет</span>
        </div>
    </div>
}
