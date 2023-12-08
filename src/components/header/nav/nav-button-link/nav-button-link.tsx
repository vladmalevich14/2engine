import s from './nav-button-link.module.scss'

type PropsType = {
    iconLink: string
    iconName: string
    nameLink: string
}

export const NavButtonLink = ({iconLink, nameLink, iconName}: PropsType) => {
    return <a href={'#'} className={s.link}>
        <img src={iconLink} alt={iconName} className={s.icon}/>
        <span>{nameLink}</span>
    </a>
}