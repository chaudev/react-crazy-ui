/**
 * @author Nguyen Phuc Bao Chau
 *
 * @create date 2024-09-06 17:49:28
 * @modify date 2024-09-09 11:44:30
 */
import { DetailedHTMLProps } from 'react'

export type ButtonCrazyProps = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	className?: string
	children?: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
	hover?: 'opacity' | 'scale-out' | 'scale-in'
	hideIcon?: boolean
	loading?: boolean
	disabled?: boolean
	hideTitleOnMobile?: boolean
	iconSize?: number

	background?: 'transparent' | 'red' | 'green' | 'blue' | 'light-blue' | 'yellow' | 'orange' | 'purple'
	icon?: 'create' | 'save' | 'edit' | 'delete' | 'import' | 'export' | 'notification' | 'close' | 'download' | 'drop-down' | 'send'
	customIcon?: React.ReactNode

	onClick?: (e?: any) => void
}
