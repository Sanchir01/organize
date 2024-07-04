import {
	BagLogo,
	CupLogo,
	HomeLogo,
	HouseLogo,
	LiveLogo,
	PeopleLogo,
} from '../assets/icons'
type HeaderNavType = {
	name: string
	href: string
	icon: () => JSX.Element
}

export const HeaderNavArray: HeaderNavType[] = [
	{
		name: 'Лента',
		href: '/',
		icon: HomeLogo,
	},
	{
		name: 'Маркетплейс',
		href: './',
		icon: BagLogo,
	},
	{
		name: 'Рейтинг',
		href: './rating',
		icon: PeopleLogo,
	},
	{
		name: 'Соревнования',
		href: './competition',
		icon: CupLogo,
	},
	{
		name: 'Организация',
		href: './organisation',
		icon: HouseLogo,
	},
	{
		name: 'Live',
		href: './live',
		icon: LiveLogo,
	},
]
