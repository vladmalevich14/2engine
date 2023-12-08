import React from 'react';
import {Letter} from "./letter/letter";
import letterM from '../../../assets/svg-icons/letter-m.svg'
import letterE from '../../../assets/svg-icons/letter-e.svg'
import letterT from '../../../assets/svg-icons/letter-t.svg'
import letterA from '../../../assets/svg-icons/letter-a.svg'
import letterL from '../../../assets/svg-icons/letter-l.svg'
import letterG from '../../../assets/svg-icons/letter-g.svg'
import letterO from '../../../assets/svg-icons/letter-o.svg'
import s from './company-name.module.scss'

export const CompanyName = () => {
    return (
        <div className={s.companyNameContainer}>
            <Letter svgSRC={letterM} arrow={true}/>
            <Letter svgSRC={letterE}/>
            <Letter svgSRC={letterT}/>
            <Letter svgSRC={letterA}/>
            <Letter svgSRC={letterL}/>
            <Letter svgSRC={letterL}/>
            <Letter svgSRC={letterG}/>
            <Letter svgSRC={letterO}/>
        </div>
    )
}