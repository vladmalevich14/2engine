import s from "./input-name.module.scss";
import {ChangeEvent, useState} from "react";

export const InputName = () => {
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState(false);

    const validateName = (inputValue: string) => {
        const russianLettersRegex = /^[а-яёА-ЯЁ\s]+$/;
        const lengthIsValid = inputValue.length >= 2 && inputValue.length <= 25;
        const isValid = russianLettersRegex.test(inputValue) && lengthIsValid;
        setIsValid(isValid);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setName(newValue);
    };

    const handleBlur = () => {
        if (name !== '') {
            setTouched(true);
            validateName(name);
        }
    };

    return <label htmlFor="name" className={`${s.label} ${s.nameAndContactLabel}`}>
        Введите ваше имя:
        <input
            type="text" placeholder={'Введите имя'} name={'name'} id={'name'}
            className={`${s.name} ${touched && !isValid ? s.invalidInput : ''}`} value={name}
            onChange={handleInputChange} onBlur={handleBlur}
        />
    </label>
}