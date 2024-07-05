import { ArrowShare } from '~/shared/assets/icons'
import { CustomButton } from '~/shared/ui'
import { EnumButtonType } from '~/shared/ui/Button'
export const OrganizationsActions = () => {
	return (
		<div className='flex gap-[10px]'>
			<CustomButton type={EnumButtonType.PRIMARY}>Подписаться</CustomButton>
			<CustomButton type={EnumButtonType.SECONDARY}>Подробнее</CustomButton>
			<CustomButton type={EnumButtonType.SECONDARY}>
				<ArrowShare />
			</CustomButton>
		</div>
	)
}
