import Container from '@mui/material/Container'
import { ReactNode } from 'react'

type LayoutHeaderType = {
	Logo?: ReactNode
	HeaderNav?: ReactNode
	HeaderLanguage?: ReactNode
	HeaderProfileAndAlerts?: ReactNode
}
export const LayoutHeader = ({
	Logo,
	HeaderNav,
	HeaderLanguage,
	HeaderProfileAndAlerts
}: LayoutHeaderType) => {
	return (
		<header className='h-16 bg-white'>
			<Container sx={{ px: 8, py: 2 }}>
				<div className='flex gap-[30px] items-center'>
					{Logo}
					{HeaderNav}
					{HeaderLanguage}
					{HeaderProfileAndAlerts}
				</div>
			</Container>
		</header>
	)
}
