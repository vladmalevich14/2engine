import s from './our-possibilities.module.scss'
import {Container} from "components/main-page/our-possibilities/container/container";
import {ReactComponent as ArrowDown} from 'assets/svg-icons/down-arrow.svg'
import {ReactComponent as ArrowUp} from 'assets/svg-icons/up-arrow.svg'
import RedOkt from 'assets/img/krasniy-oktyabr.png'
import UGMK from 'assets/img/ugmk-stal.png'
import OZMM from 'assets/img/ozmm.png'
import Moto from 'assets/img/motoviliha.png'
import ZMZ from 'assets/img/zmz.png'
import Mechel from 'assets/img/mechel.png'
import CenterMO from 'assets/img/centr-mo.png'
import {useState} from "react";

export const OurPossibilities = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onCLickHandler = () => setIsOpen(!isOpen)

    const typeOfRolling = ['Круг', 'Поковки', 'Шестигранник', 'Лист', 'Квадрат']
    const specialRolling = ['ЭИ 10-997', 'Н 48-99', 'ЭК 2-154', 'ЧС 4-115', 'ЭП 11-988']
    const manufacturers = [RedOkt, UGMK, OZMM, Moto, ZMZ, Mechel]
    const typeOfTreatment = ['Лазерная резка', 'Вальцовка', 'Плазменная резка', 'Гибка', 'Токарка', 'Труборез', 'Фрезер', 'Трубогиб']
    const technicalRequirements = ['ВД вакуумно-дуговой переплав', 'ВИ вакуумно-индукционный переплав', 'ВП вакуумно-плазменный переплав', 'ГР газокислородное рафинирование', 'Ш шлаковый переплав', 'ПВ прямого восстановления', 'ПТ плазменная выплавка', 'П плазменно-дуговой переплав', 'ЭЛ электронно-лучевой переплав', 'СШ обработка синтетическим шлаком', 'ВО вакуумно-кислородное рафинирование', 'ГШ плазменная выплавка плюс электрошлаковый переплав', 'ШД шлаковый переплав плюс вакуумно-дуговой переплав', 'ШЛ шлаковый переплав плюс электронно-лучевой переплав', 'ШП электрошлаковый переплав плюс плазменно-дуговой переплав', 'ПП плазменная выплавка плюс плазменно-дуговой переплав', 'ПД плазменная выплавка плюс вакуумно-дуговой переплав', 'ПШ плазменная выплавка плюс электрошлаковый переплав', 'ИД вакуумно-индукционная выплавка плюс вакуумно-дуговой переплав', 'ИШ вакуумно-индукционная выплавка плюс электрошлаковый переплав', 'ИЛ вакуумно-индукционная выплавка плюс электронно-лучевой переплав', 'ИП вакуумно-индукционная выплавка плюс плазменно-дуговой переплав']

    return <article className={s.possibilities}>
        <h1 className={s.headerPossibilities}>Наши возможности</h1>
        <div className={s.possibilitiesContainer}>
            <div className={s.rolling}>
                <h2 className={s.titlePossibilities}>Прокат</h2>
                <Container title={'Вид проката'}>
                    {typeOfRolling.map(el => {
                        return <span className={s.item} key={el}>{el}</span>
                    })}
                </Container>

                <Container title={'Специальный прокат'}>
                    {specialRolling.map(el => {
                        return <span className={s.item} key={el}>{el}</span>
                    })}
                    <div>
                        <span onClick={onCLickHandler} className={`${s.accordion} ${isOpen ? s.orangeText : s.blackText}`}>
                            Технические требования
                            {isOpen ?
                                <ArrowUp/> : <ArrowDown/>
                            }
                            </span>
                        <ul className={s.listOfTechReq}>
                            {isOpen &&
                                technicalRequirements.map(el => {
                                    return <li key={el} className={s.elementWrapper}>{el}</li>
                                })}
                        </ul>
                    </div>


                </Container>

                <Container title={'Заводы изготовители'}>
                    {manufacturers.map(el => {
                        return <div key={el} className={s.imgContainer}>
                            <img src={el} className={s.image}/>
                        </div>
                    })}
                </Container>
            </div>

            <div className={s.metalworking}>
                <h2 className={s.titlePossibilities}>Металлообработка</h2>
                <Container title={'Вид обработки'}>
                    {typeOfTreatment.map(el => {
                        return <span className={s.item} key={el}>{el}</span>
                    })}
                </Container>

                <Container title={'Компании исполнители'}>
                    <div className={s.imgContainer}>
                        <img src={CenterMO} className={s.image}/>
                    </div>
                </Container>
            </div>
        </div>
    </article>
}