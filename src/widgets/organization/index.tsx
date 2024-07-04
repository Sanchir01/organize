import { ReactNode } from 'react'
import { ProviderType } from '~/shared/types'
import { LayoutOrganizer } from './ui/layoutOrganizer'

export type OrganizationLayoutType = {
	actions?: ReactNode
} & ProviderType

export const Organization = ({}: OrganizationLayoutType) => {
	return <LayoutOrganizer />
}
