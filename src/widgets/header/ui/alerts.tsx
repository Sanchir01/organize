import { AlertBell } from '~/shared/assets/icons/header/bell'
import { HeaderProfile } from './profile'

export const ProfileAndAlerts = () => {
	return (
		<div className='flex gap-3 items-center ml-4'>
			<div className='cursor-pointer'>
				<AlertBell />
			</div>
			<HeaderProfile />
		</div>
	)
}
