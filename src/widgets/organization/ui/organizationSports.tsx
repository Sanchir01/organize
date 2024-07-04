import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from 'next/link'
import { DotIcon, LocationIcon } from '~/shared/assets/icons'

export type OrganizationSportsType = {
	name: string
	href: string
}
export const OrganizationSports = ({
	sports
}: {
	sports: OrganizationSportsType[]
}) => {
	return (
		<div  className='flex gap-2' role='presentation'>
			<LocationIcon />
			<Breadcrumbs separator={<DotIcon />} aria-label='breadcrumb'>
				{sports.map(item => (
					<Link key={item.name} href={item.href} title={item.name}>
						
						{item.name}
					</Link>
				))}
			</Breadcrumbs>
		</div>
	)
}
