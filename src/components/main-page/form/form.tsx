import {ReactComponent as Message} from 'assets/svg-icons/message.svg'
import {ReactComponent as Post} from 'assets/svg-icons/post.svg'
import s from './form.module.scss'
import {InputFile} from "./input-file/input-file";
import {ChangeEvent, FormEvent, useState} from "react";
import {Contact} from "components/main-page/form/contact/contact";
import {InputName} from "components/main-page/form/input-name/input-name";
import {InputRadio} from "components/main-page/form/input-radio/input-radio";

export const Form = () => {
    const [radioValue, setRadioValue] = useState<string>('call')
    const [files, setFiles] = useState<File[]>([]);
    const [list, setList] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [commentary, setCommentary] = useState<string>('');
    const [checkbox, setCheckbox] = useState<boolean>(false);

    const onChangeRadioValue = (newValue: string) => setRadioValue(newValue)
    const onChangeListValue = (e: ChangeEvent<HTMLTextAreaElement>) => setList(e.target.value)
    const onChangeCommentaryValue = (e: ChangeEvent<HTMLTextAreaElement>) => setCommentary(e.target.value)
    const onChangeCheckboxValue = (e: ChangeEvent<HTMLInputElement>) => setCheckbox(e.target.checked)

    const radioGroup = [
        {id: 'radio-1', value: 'call', label: 'Звонок', defaultChecked: true},
        {id: 'radio-2', value: 'email', label: 'E-mail'},
        {id: 'radio-3', value: 'telegram', label: 'Telegram'},
        {id: 'radio-4', value: 'whatsApp', label: 'WhatsApp'},
    ]

    const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = {radioValue, files, list, name, contact, commentary, checkbox}

        try {
            const response = await fetch("https://getform.io/f/d0059c88-2ed0-484a-804b-c577af752cca", {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                setRadioValue('call')
                setFiles([])
                setList('')
                setName('')
                setContact('')
                setCommentary('')
                setCheckbox(false)
            } else {
                console.error('Ошибка при отправке формы');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return <article className={s.formContainer}>

        <h1 className={s.headerForm}>Форма приёма заказов</h1>

        <form onSubmit={onSubmitHandler} className={s.form}>

            <label htmlFor="list" className={`${s.label} ${s.listField}`}>
                Введите перечень товаров, услуг, характеристик и объёмов
            </label>
            <div className={s.listAndFile}>
                <textarea name={'list'} id={'list'} className={s.list} maxLength={1000} value={list}
                          onChange={onChangeListValue}/>
                <InputFile files={files} setFiles={setFiles}/>
            </div>

            <div>
                <label htmlFor="method" className={`${s.label} ${s.radioGroupLabel}`}>Выберите удобный способ связи:
                </label>
                <div className={s.radioContainer}>
                    {radioGroup.map(el => {
                        return <InputRadio onChangeValue={onChangeRadioValue} id={el.id} value={el.value}
                                           label={el.label}
                                           defaultChecked={el.defaultChecked} key={el.id}/>
                    })}
                </div>
            </div>

            <div className={s.customerInfo}>
                <div className={s.nameAndContact}>
                    <InputName name={name} setName={setName}/>
                    <Contact value={radioValue} contact={contact} setContact={setContact}/>
                </div>

                <label htmlFor="commentary" className={`${s.label} ${s.commentaryLabel}`}>
                    Комментарий
                    <textarea name={'commentary'} id={'commentary'} className={s.commentaryTextarea} maxLength={1000}
                              value={commentary} onChange={onChangeCommentaryValue}/>
                </label>
            </div>

            <div className={s.checkboxContainer}>
                <input type="checkbox" name={'checkbox'} id={'checkbox'} className={s.checkbox} checked={checkbox}
                       onChange={onChangeCheckboxValue}/>
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