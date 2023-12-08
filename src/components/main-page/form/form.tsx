import {ReactComponent as Message} from 'assets/svg-icons/message.svg'
import {ReactComponent as Post} from 'assets/svg-icons/post.svg'
import s from './form.module.scss'
import {InputFile} from "./input-file/input-file";
import {useState} from "react";
import {Contact} from "components/main-page/form/contact/contact";
import {InputName} from "components/main-page/form/input-name/input-name";
import {InputRadio} from "components/main-page/form/input-radio/input-radio";

export const Form = () => {
    const [radioValue, setRadioValue] = useState<string>('call')

    const onChangeRadioValue = (newValue: string) => {
        setRadioValue(newValue)
    }

    const radioGroup = [
        {id: 'radio-1', value: 'call', label: 'Звонок', defaultChecked: true},
        {id: 'radio-2', value: 'email', label: 'E-mail'},
        {id: 'radio-3', value: 'telegram', label: 'Telegram'},
        {id: 'radio-4', value: 'whatsApp', label: 'WhatsApp'},
    ]

    return <article className={s.formContainer}>

        <h1 className={s.headerForm}>Форма приёма заказов</h1>

        <form action="https://getform.io/f/d0059c88-2ed0-484a-804b-c577af752cca" method={'POST'} className={s.form} target={'_blank'}>

            <label htmlFor="list" className={`${s.label} ${s.listField}`}>
                Введите перечень товаров, услуг, характеристик и объёмов
            </label>
            <div className={s.listAndFile}>
                <textarea name={'list'} id={'list'} className={s.list} maxLength={1000}/>
                <InputFile/>
            </div>
            <div>
                <label htmlFor="method" className={`${s.label} ${s.radioGroupLabel}`}>Выберите удобный способ связи:
                </label>
                <div className={s.radioContainer}>
                    {radioGroup.map(el => {
                        return <InputRadio onChangeValue={onChangeRadioValue} id={el.id} value={el.value} label={el.label}
                                           defaultChecked={el.defaultChecked} key={el.id}/>
                    })}
                </div>
            </div>
            <div className={s.customerInfo}>
                <div className={s.nameAndContact}>
                    <InputName/>
                    <Contact value={radioValue}/>
                </div>

                <label htmlFor="commentary" className={`${s.label} ${s.commentaryLabel}`}>
                    Комментарий
                    <textarea name={'commentary'} id={'commentary'} className={s.commentaryTextarea} maxLength={1000}/>
                </label>
            </div>

            <div className={s.checkboxContainer}>
                <input type="checkbox" name={'checkbox'} id={'checkbox'} className={s.checkbox}/>
                <label htmlFor="checkbox">
                    <a href="#" className={s.linkPersonalData}>Даю согласие на о бработку персональных данных</a>
                </label>
            </div>

            <button type="submit" className={s.submit}>
                <Post/>
                Отправить запрос
            </button>
            <Message className={s.message}/>
        </form>
    </article>
}