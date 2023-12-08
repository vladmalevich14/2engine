import React from 'react';
import arrowDown from '../../../../assets/svg-icons/arrow-down-for-letter-m.svg'
import s from './letter.module.scss'

type PropsType = {
    svgSRC: string
    arrow?: boolean
}

export const Letter = ({svgSRC, arrow}: PropsType) => {
    return (
        <span className={s.letterWithArrow}>
            <img src={svgSRC}/>
            {arrow && <img src={arrowDown} className={s.arrow}/> }
        </span>
    )
}