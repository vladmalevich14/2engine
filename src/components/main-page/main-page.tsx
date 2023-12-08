import s from './main-page.module.scss'
import {CustomisedMetal} from "components/main-page/customised-metal/customised-metal";
import {OurPossibilities} from "components/main-page/our-possibilities/our-possibilities";
import {Form} from "components/main-page/form/form";

export const MainPage = () => {
    return <section className={s.mainPageContainer}>
        <CustomisedMetal/>
        <OurPossibilities />
        <Form />
    </section>
}