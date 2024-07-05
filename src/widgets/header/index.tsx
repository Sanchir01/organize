import { ProfileAndAlerts } from './_ui/alerts'
import { HeaderNav } from './_ui/headerNav'
import { HeaderLanguage } from './_ui/language'
import { LayoutHeader } from './_ui/layoutHeader'
import { Logo } from './_ui/logo'

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
