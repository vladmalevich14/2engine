import s from './nav.module.scss';
import React, {useState} from "react";
import {NavButtonLink} from "./nav-button-link/nav-button-link";
import Telegram from 'assets/svg-icons/request.svg'
import Chats from '../../../assets/svg-icons/chats.svg'
import Favourites from '../../../assets/svg-icons/favourites.svg'
import Basket from '../../../assets/svg-icons/basket.svg'
import Cabinet from '../../../assets/svg-icons/cabinet.svg'

export const Nav = () => {

    const [isShowBurger, setIsShowBurger] = useState<boolean>(false);

    const onClickHandler = () => {
        setIsShowBurger(!isShowBurger)
    }

    return <nav className={s.nav}>
        <div className={s.burgerIcon} onClick={onClickHandler}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={`${s.menuItems} ${isShowBurger ? s.show : ''}`}>
            <NavButtonLink iconLink={Telegram} iconName={'Заявка'} nameLink={'Заявка'}/>
            <NavButtonLink iconLink={Chats} iconName={'Чаты'} nameLink={'Чаты'}/>
            <NavButtonLink iconLink={Favourites} iconName={'Избранное'} nameLink={'Избранное'}/>
            <NavButtonLink iconLink={Basket} iconName={'Корзина'} nameLink={'Корзина'}/>
            <NavButtonLink iconLink={Cabinet} iconName={'Кабинет'} nameLink={'Кабинет'}/>
        </div>
    </nav>
}