type PropsType = {
    iconLink: string
    iconName: string
    nameLink: string
}

export const NavButtonLink = ({iconLink, nameLink, iconName}: PropsType) => {
    return <a>
        <img src={iconLink} alt={iconName}/>
        <span>{nameLink}</span>
    </a>
}