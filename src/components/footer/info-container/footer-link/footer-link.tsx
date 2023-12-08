import s from './footer-link.module.scss'

type PropsType = {
    linkName: string
    isGrayLink?: boolean
}

export const FooterLink = ({linkName, isGrayLink}: PropsType) => {
    return <a href={'#'} className={isGrayLink ? s.linkGray : s.link}>
        {linkName} →
    </a>
}