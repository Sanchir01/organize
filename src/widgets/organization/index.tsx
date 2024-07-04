import { LayoutOrganizer } from './ui/layoutOrganizer'
import {
	EnumPlaceTournament,
	OrganizationsMedals,
	OrganizationsMedalsType
} from './ui/medals'
import {
	OrganizationSports,
	OrganizationSportsType
} from './ui/organizationSports'

const OrganizationSportsArray: OrganizationSportsType[] = [
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
export const Organization = () => {
	return (
		<LayoutOrganizer
			organizationSports={
				<OrganizationSports sports={OrganizationSportsArray} />
			}
			medalsRating={<OrganizationsMedals medalsArray={MedalsArray} />}
		/>
	)
}
