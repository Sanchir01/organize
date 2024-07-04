import Link from 'next/link'
import { HeaderLogo } from '~/shared/assets/icons'

export const Logo = () => {
	return (
		<Link href={'./'}>
			<HeaderLogo />
		</Link>
	)
}
