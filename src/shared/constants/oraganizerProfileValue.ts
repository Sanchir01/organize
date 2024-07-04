import { AndreyProfile, CristinaProfile, DmitryProfile } from '../assets/icons'
import { OrganizerProfileType } from '../ui/organizatorProfile'

export const OrganizerProfileValue: OrganizerProfileType[] = [
	{
		imageUrl: DmitryProfile,
		imageName: 'AVATAR',
		organizerName: 'Дмитрий Пономарев',
		organizerPost: 'Президент ФНТР'
	},
	{
		imageUrl: CristinaProfile,
		imageName: 'AVATAR',
		organizerName: 'Кристина Козлова',
		organizerPost: 'Вице-президент ФНТР'
	},
	{
		imageUrl: AndreyProfile,
		imageName: 'AVATAR',
		organizerName: 'Андрей Козлов',
		organizerPost: 'Первый вице-президент, генеральный директор ФНТР'
	}
]
