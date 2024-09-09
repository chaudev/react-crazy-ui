/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-06 17:50:51
 * @modify date 2024-09-09 11:41:07
 */
import { FC, CSSProperties } from "react";
import { ButtonCrazyProps } from "./button-crazy";
declare const Button: FC<ButtonCrazyProps & {
    style?: CSSProperties;
}>;
export default Button;
