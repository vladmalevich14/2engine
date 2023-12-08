import s from '../our-possibilities.module.scss'
import {ReactNode} from "react";

type PropsType = {
    title: string
    children: ReactNode
}

export const Container = ({title, children}: PropsType) => {
    return <div className={s.container}>
        <h3 className={s.containerTitle}>{title}</h3>
        <div className={s.containerContent}>
            {children}
        </div>
    </div>
}