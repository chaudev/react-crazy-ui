/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-09 11:58:16
 * @modify date 2024-09-09 11:58:16
 */
import React, { CSSProperties, FC } from "react";
type TBackgroundColor = "red" | "green" | "blue" | "yellow" | "black" | "white" | "dark" | "turquoise" | "teal" | "deeppurple" | "purple" | "pink" | "orange";
type TProps = {
    key?: string | number;
    isButton?: boolean;
    children?: React.ReactNode | string;
    background?: TBackgroundColor;
    style?: CSSProperties;
    onClick?: Function;
};
export declare const TagPrimary: FC<TProps>;
export default TagPrimary;
