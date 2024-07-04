import { ProfileAndAlerts } from './ui/alerts'
import { HeaderNav } from './ui/headerNav'
import { HeaderLanguage } from './ui/language'
import { LayoutHeader } from './ui/layoutHeader'
import { Logo } from './ui/logo'

export const Header = () => {
	return (
		<LayoutHeader
			Logo={<Logo />}
			HeaderNav={<HeaderNav />}
			HeaderLanguage={<HeaderLanguage />}
			HeaderProfileAndAlerts={<ProfileAndAlerts />}
		/>
	)
}
