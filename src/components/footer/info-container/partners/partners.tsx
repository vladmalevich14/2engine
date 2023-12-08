import s from './partners.module.scss'
import {Partner} from "components/footer/info-container/partners/partner/partner";
import {ReactComponent as Kassa} from 'assets/svg-icons/kassa.svg'
import {ReactComponent as Sberbank} from 'assets/svg-icons/sberbank.svg'
import {ReactComponent as Engine} from 'assets/svg-icons/2engine.svg'

export const Partners = () => {
    return <div className={s.partnersContainer}>
        <Partner>
            <Kassa/>
        </Partner>
        <Partner>
            <Sberbank/>
        </Partner>
        <Partner>
            <Engine/>
        </Partner>
    </div>

}