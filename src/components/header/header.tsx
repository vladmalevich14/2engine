import s from './header.module.scss'
import Squares from 'assets/svg-icons/squares.svg'
import ArrowDown from 'assets/svg-icons/arrow-down.svg'
import ArrowUp from 'assets/svg-icons/arrow-up.svg'
import Location from 'assets/svg-icons/location.svg'
import {Nav} from "./nav/nav";
import {CompanyName} from "components/header/company-name/company-name";

export const Header = () => {
    return (
        <header className={s.headerContainer}>
            <div className={s.generalInfo}>
                <div className={s.companyName}>
                    <CompanyName/>
                </div>
                <div className={s.buttonsContainer}>
                    <div className={s.catalog}>
                        <img src={Squares}/>
                        Каталог
                        <img src={ArrowUp}/>
                    </div>
                    <div className={s.location}>
                        <img src={Location}/>
                        Россия
                        <img src={ArrowDown}/>
                    </div>
                    <div className={s.contacts}>
                        Контакты
                        <img src={ArrowDown}/>
                    </div>
                </div>
            </div>
            <Nav />
        </header>
    );
};
