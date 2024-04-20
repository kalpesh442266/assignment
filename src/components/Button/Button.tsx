import { ReactNode } from "react";
import BoxModalHoc from "../../Hoc/BoxModalHoc/BoxModalHoc";
import { BoxModalHocProps } from "../../Hoc/BoxModalHoc/IBoxModalHoc";
import style from "./Button.module.scss";

type Props = {
    fullWidth?: Boolean;
    children?: ReactNode;
    type?: "primary" | "secondary" | "danger";
    styles?: object;
    boxModalClasses?: BoxModalHocProps[],
    variant?: "outline" | "content";
}

const H = (props: Props) => {
    const { fullWidth, children, type = "primary", styles, boxModalClasses = [], variant = "content", ...other } = props;
    const classNames = [
        ...boxModalClasses,
        style.button,
        style[type],
        style[`${type}-${variant}`],
        fullWidth && style.fullWidth
    ]
    const btnStyles = classNames.join(" ");
    console.log(btnStyles, `${type}-${variant}`)
    return (
        <button style={styles} className={btnStyles} {...other}>
            {children}
        </button>
    )
}

const Button = BoxModalHoc(H);

export default Button;