import {
	BronzeMedalIcon,
	GoldMedalIcon,
	SilverMedalIcon
} from '~/shared/assets/icons'
import {
	EnumPlaceTournament,
	OrganizationsMedalsType
} from '~/widgets/organization/ui/medals'

export const SingleMedal = ({ place, value }: OrganizationsMedalsType) => {
	return (
		<div
			
			className='flex items-center  bg-bg-grey gap-2 p-[10px] rounded-small'
		>
			{place === EnumPlaceTournament.GOLD && <GoldMedalIcon />}
			{place === EnumPlaceTournament.SILVER && <SilverMedalIcon />}
			{place === EnumPlaceTournament.BRONZE && <BronzeMedalIcon />}
			<span>{value}</span>
		</div>
	)
}
