import { MedalsArray, OrganizationSportsArray } from '~/shared/constants'
import { OrganizationsActions } from './_ui/actions'
import { LayoutOrganizer } from './_ui/layoutOrganizer'
import { OrganizationsMedals } from './_ui/medals'
import { OrganizationSports } from './_ui/organizationSports'
import { OrganizationTabs } from './_ui/organizationTabs'

export const Organization = () => {
	return (
		<LayoutOrganizer
			organizationSports={
				<OrganizationSports sports={OrganizationSportsArray} />
			}
			medalsRating={<OrganizationsMedals medalsArray={MedalsArray} />}
			organizationsActions={<OrganizationsActions />}
			organizationTabs={<OrganizationTabs />}
		/>
	)
}
