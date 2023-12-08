import {ReactComponent as Notes} from 'assets/svg-icons/notes.svg'
import {ReactComponent as OrangeFolder} from 'assets/svg-icons/orange-folder.svg'
import {ReactComponent as TransparentFolder} from 'assets/svg-icons/transparent-folder.svg'
import {ReactComponent as Price} from 'assets/svg-icons/price.svg'
import {ReactComponent as TransparentPrice} from 'assets/svg-icons/transparent-price.svg'
import {ReactComponent as GuaranteeMiddle} from 'assets/svg-icons/guarantee-middle.svg'
import {ReactComponent as GuaranteeBig} from 'assets/svg-icons/guarantee-big.svg'
import {ReactComponent as GuaranteeSmall} from 'assets/svg-icons/guarantee-small.svg'
import s from './customised-metal.module.scss'

export const CustomisedMetal = () => {
    return <article className={s.mainContainer}>
        <h1 className={s.headerMetal}>Металл под заказ</h1>
        <div className={s.blocksWrapper}>
            <div className={`${s.blockContainer} ${s.blackContainer} ${s.order}`}>
                <h2 className={s.title}>Оформление заказа</h2>
                <p>Оформив заказ через наш сайт вы получите лучшее предложение от проверенных поставщиков, которые
                    работают
                    напрямую с производителями уже более 10 лет</p>
                <Notes className={s.notes}/>
            </div>
            <div className={`${s.blockContainer} ${s.whiteContainer} ${s.conditions}`}>
                <h2 className={s.title}>Условия</h2>
                <p>Предложение будет включать в себя монтажную норму по каждой позиции, срок изготовления, стоимость и
                    порядок оплаты</p>
                <TransparentFolder className={s.transparentFolder}/>
                <OrangeFolder className={s.orangeFolder}/>
            </div>
            <div className={`${s.blockContainer} ${s.whiteContainer} ${s.priceService}`}>
                <h2 className={s.title}>Цена и сервис</h2>
                <p>За счет персональных скидок у наших поставщиков цена будет на уровне заводской, а все проблемы с
                    продвижением по производству вас не коснутся</p>
                <Price className={s.price}/>
                <TransparentPrice className={s.transparentPrice}/>
            </div>
            <div className={`${s.blockContainer} ${s.blackContainer} ${s.guarantee}`}>
                <h2 className={s.title}>Гарантии</h2>
                <p>Каждая сделка оформляется по договору, прилагается спецификация. Вместе с металлопрокатом вы получите
                    сертификат качества от производителя</p>
                <GuaranteeMiddle className={s.guaranteeMiddle}/>
                <GuaranteeMiddle className={s.guaranteeMiddleBig}/>
                <GuaranteeBig className={s.guaranteeBig}/>
                <GuaranteeSmall className={s.guaranteeSmall}/>
            </div>
        </div>
    </article>
}