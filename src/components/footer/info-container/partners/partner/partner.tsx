import {ReactNode} from "react";
import s from 'components/footer/info-container/partners/partner/partner.module.scss'

type PropsType = {
    children: ReactNode
}

export const Partner = ({children}: PropsType) => {
    return (
        <div className={s.partnerContainer}>
            {children}
        </div>
    );
};
