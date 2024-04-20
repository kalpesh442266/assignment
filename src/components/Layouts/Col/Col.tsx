import { ReactNode } from "react";
import style from "./Col.module.scss";
import { BoxModalHocProps } from "../../../Hoc/BoxModalHoc/IBoxModalHoc";
import BoxModalHoc from "../../../Hoc/BoxModalHoc/BoxModalHoc";

type ColProps = {
    boxModalClasses?: Array<BoxModalHocProps>;
    col: number;
    className?: string;
    children: ReactNode
}

const H = (props: ColProps) => {
    const { col, className, children, boxModalClasses = [] } = props;
    const classNames = [
        ...boxModalClasses,
        className,
        style[`col-${col}`]
    ]
    const colStyle = classNames.join(" ")
    return (
        <div className={colStyle}>{children}</div>
    )
}
const Col = BoxModalHoc(H);
export default Col