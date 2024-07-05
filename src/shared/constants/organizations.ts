import {
	EnumPlaceTournament,
	OrganizationsMedalsType
} from '~/widgets/organization/_ui/medals'
import { OrganizationSportsType } from '~/widgets/organization/_ui/organizationSports'

export const OrganizationSportsArray: OrganizationSportsType[] = [
	{ name: 'Алтайский край', href: './test' },
	{ name: 'Грэпплинг', href: './test' },
	{ name: 'Греко-римская борьба', href: './test' },
	{ name: 'Пляжная борьба', href: './test' }
]
export const MedalsArray: OrganizationsMedalsType[] = [
	{
		value: 12,
		place: EnumPlaceTournament.GOLD
	},
	{
		value: 4,
		place: EnumPlaceTournament.SILVER
	},
	{
		value: 19,
		place: EnumPlaceTournament.BRONZE
	}
]
