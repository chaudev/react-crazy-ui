/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-04 14:09:09
 * @modify date 2024-09-06 17:14:25
 */
import React, { FC, KeyboardEvent } from "react";
interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onESC?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    onEmpty?: () => void;
}
/**
 * The CustomInput component in TypeScript React handles keyboard events for Enter and Escape keys,
 * triggers callbacks accordingly, and clears input on change.
 * @param  - The `CustomInput` component takes the following props:
 * @returns The `CustomInput` component is being returned, which is an input element with additional
 * event handlers for key down and change events. The `handleKeyDown` function checks for Enter and
 * Escape key presses and calls the corresponding callback functions `onEnter` and `onESC` if they are
 * provided. The `handleChange` function calls the `onEmpty` callback (if provided) and the `onChange`
 */
declare const Input: FC<CustomInputProps>;
export default Input;
