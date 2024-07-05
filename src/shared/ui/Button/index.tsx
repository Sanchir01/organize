import { Button } from '@mui/material'
import cn from 'clsx'
import { ProviderType } from '~/shared/types'
export enum EnumButtonType {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ICONS_TEXT = 'iconsText'
}
export type CustomButtonType = {
	type: EnumButtonType
	className?: string
	onClick?: () => void
} & ProviderType

export const CustomButton = ({ children, type, onClick }: CustomButtonType) => {
	return (
		<>
			<Button
				onClick={onClick}
				className={cn(
					'px-6 py-[10px] rounded-pre-small',
					type === EnumButtonType.PRIMARY &&
						'bg-button-primary-default hover:bg-button-primary-hover active:bg-button-primary-active disabled:bg-button-primary-disable text-white',
					type === EnumButtonType.SECONDARY &&
						'bg-button-secondary-default hover:bg-button-secondary-hover active:bg-button-secondary-active disabled:bg-button-secondary-disable text-black'
				)}
			>
				{children}
			</Button>
		</>
	)
}
