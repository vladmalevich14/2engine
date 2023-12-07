import {ReactNode} from "react";
import s from './partner.module.scss'

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
