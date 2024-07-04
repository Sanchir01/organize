'use client'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderNavArray } from '~/shared/constants/headerNavValue'

export const HeaderNav = () => {
	const pathName = usePathname()
	return (
		<nav className='flex '>
			<ul className='flex gap-4'>
				{HeaderNavArray.map(item => (
					<li
						className={cn(
							pathName === item.href ? '' : 'text-greyText',
							'flex gap-2 '
						)}
						key={item.name}
					>
						<Link
							className='flex gap-2 items-center hover:underline transition ease-in-out  hover:scale-105 duration-300'
							href={item.href}
							title={item.name}
						>
							{item.icon()}
							<span>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
