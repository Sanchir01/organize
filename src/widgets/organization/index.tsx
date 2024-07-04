import { ReactNode } from 'react'
import { ProviderType } from '~/shared/types'

export type OrganizationLayoutType = {
	actions?: ReactNode
} & ProviderType

export const OrganizationLayout = ({}: OrganizationLayoutType) => {
	return <></>
}
