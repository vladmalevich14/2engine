import s from "./contact.module.scss";
import {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    value: string
    contact: string
    setContact: (contact: string) => void
}

export const Contact = ({value, contact, setContact}: PropsType) => {
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState(false);

    useEffect(() => {
        setIsValid(false)
        setTouched(false)
        setContact('')
    }, [value]);

    const validateInput = (inputValue: string) => {
        if (value === 'call' || value === 'whatsApp') {
            const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
            setIsValid(phoneRegex.test(inputValue));
        } else if (value === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            setIsValid(emailRegex.test(inputValue));
        } else if (value === 'telegram') {
            const telegramRegex = /^@[\w\d_-]{2,40}$/;
            setIsValid(telegramRegex.test(inputValue));
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setContact(newValue);
        if (touched) {
            validateInput(newValue);
        }
    };

    const handleBlur = () => {
        if (contact !== '') {
            setTouched(true);
            validateInput(contact);
        }
    };

    return (
        <div>
            <label htmlFor={value} className={`${s.label} ${s.nameAndContactLabel}`}>
        <span>
          {value === 'call' && 'Введите номер '}
            {value === 'email' && 'Введите '}
            {value === 'telegram' && 'Введите id из '}
            {value === 'whatsApp' && 'Введите номер '}
            <span className={s.contactType}>
            {value === 'call' || value === 'whatsApp' ? 'Телефона:' : value === 'email' ? 'E-mail:' : value === 'telegram' ? 'Telegram:' : ''}
          </span>
        </span>
                <input
                    type={value === 'call' || value === 'whatsApp' ? 'tel' : value === 'email' ? 'email' : 'text'}
                    placeholder={
                        value === 'call' || value === 'whatsApp' ? '+7 (___) ___ - __ - __' : value === 'email' ? 'alex-smith@gmail.com' : value === 'telegram' ? '@alex_smith' : ''
                    }
                    name={value}
                    id={value}
                    value={contact}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={`${s.connectType} ${touched && !isValid ? s.invalidInput : ''}`}
                />
            </label>
        </div>
    );
};