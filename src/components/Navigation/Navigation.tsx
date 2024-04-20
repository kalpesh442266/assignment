//styles
import { NavLink } from "react-router-dom";
import Cart from "../../Icons/Cart";
import style from "./Navigation.module.scss";
import Stack from "../Layouts/Stack/Stack";

type Props = {}

const Navigation = (props: Props) => {
    return (
        <Stack direction="row" pl={10} pr={10} align="center" justify="space-between" className={style.container}>
            <h2>
                <NavLink className={style.icon} to={"/"}>ShopCart</NavLink>
            </h2>
            <div className={style.buttonsContainer}>
                <div className={style.iconTextWrapper}>
                    <Cart height={24} width={24} />
                    <span className={style.iconText}>Cart</span>
                </div>
            </div>
        </Stack >
    )
}

export default Navigation