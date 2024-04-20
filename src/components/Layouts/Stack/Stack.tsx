import { ReactNode } from "react";
import style from "./Stack.module.scss";

import { Align, Directions, Justify } from "../../../styles/styleTypes";
import { BoxModalHocProps } from "../../../Hoc/BoxModalHoc/IBoxModalHoc";
import BoxModalHoc from "../../../Hoc/BoxModalHoc/BoxModalHoc";

type StackProps = {
    boxModalClasses?: Array<BoxModalHocProps>;
    direction: Directions;
    spacing?: number;
    children: ReactNode;
    justify?: Justify;
    align?: Align;
    className?: string
}

const H = (props: StackProps) => {
    const { boxModalClasses = [], spacing, direction, children, justify, align, className } = props;
    const classNames = [
        ...boxModalClasses,
        style.stack,
        className,
        style[`spacing-${spacing}`],
        style[`direction-${direction}`],
        style[`justify-${justify}`],
        style[`align-${align}`]
    ]
    const stackStyles = classNames.join(" ");

    return (
        <div className={stackStyles}>{children}</div>
    )
}

const Stack = BoxModalHoc(H);

export default Stack