import { SingleMedal } from '~/shared/ui/singleMedal'

export enum EnumPlaceTournament {
	BRONZE = 'bronze',
	GOLD = 'gold',
	SILVER = 'silver'
}
export type OrganizationsMedalsType = {
	value: number
	place: EnumPlaceTournament
}

export const OrganizationsMedals = ({
	medalsArray
}: {
	medalsArray: OrganizationsMedalsType[]
}) => {
	return (
		<div className='flex items-center gap-3'>
			{medalsArray.map(item => (
				<SingleMedal key={item.place} value={item.value} place={item.place} />
			))}
		</div>
	)
}
