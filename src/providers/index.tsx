'use client'
import { ProviderType } from '~/shared/types'
import { ComposeChildren } from '~/shared/utils/utils'
import { ReactQuery } from './react-query'

export const Provider = ({ children }: ProviderType) => {
	return (
		<ComposeChildren>
			<ReactQuery />
			{children}
		</ComposeChildren>
	)
}
