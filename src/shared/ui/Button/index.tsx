import { Button } from '@mui/material'
import { ProviderType } from '~/shared/types'
export type CustomButtonType = {} & ProviderType
export const CustomButton = ({ children }: CustomButtonType) => {
	return <Button>{children}</Button>
}
