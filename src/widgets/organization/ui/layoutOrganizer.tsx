import Image from 'next/image'
import { ReactNode } from 'react'
import { OtherBlock } from '~/entities'
import image from '~/shared/assets/icons/graph/graph.jpg'
import gerb from '~/shared/assets/images/gerb.png'
import subscruct from '~/shared/assets/images/Subtract.png'
import { OrganizerProfileValue } from '~/shared/constants'
import { OrganizerProfile, Rating } from '~/shared/ui'

export type OrganizationLayoutType = {
	actions?: ReactNode
	organizationSports?: ReactNode
	medalsRating?: ReactNode
}
export const LayoutOrganizer = ({
	organizationSports,
	medalsRating
}: OrganizationLayoutType) => {
	return (
		<>
			<div className=''>
				<section className='w-[765px] rounded-default relative'>
					<div className='bg-clip-content bg-gradient-to-r from-blue-900 to-blue-700 h-[130px] w-full rounded-t-default ' />
					<Image src={gerb} alt={'graph'} className='absolute top-20 left-5' />
					<div className='absolute right-3 top-40'>
						<Rating up={true} numberRating={1} />
					</div>
					<div className='bg-white pt-[102px] px-5'>
						<div className='flex flex-col gap-[15px]'>
							<div className='text-[30px] flex items-center gap-2'>
								<h1>Спортивная Организация Алтайского Края</h1>
								<div className=''>
									<Image src={subscruct} alt={'galochka'} />
								</div>
							</div>
							{organizationSports}
							{medalsRating}
						</div>
						<div className=''></div>
						<div className=''></div>
					</div>
				</section>
			</div>

			<div className='flex flex-col gap-6'>
				<OtherBlock
					title='Организации'
					watchAllHref='./all'
					className='max-w-[370px] px-5 py-6'
				>
					<div className='flex flex-col gap-5'>
						<Image src={image} alt={'graph'} />
						<div className='bg-bg-grey rounded-medium px-[14px] py-3'>
							<h5 className='text-[14px]'>Рейтинг : Очень высокий</h5>
							<div className='pt-3 text-[12px] text-greyText'>
								Спортсмены организации показывают достаточно хорошие результаты
								на тренировках и соревнованиях, а также за последний год
								стабильно поднимаются в рейтинге.
							</div>
						</div>
					</div>
				</OtherBlock>
				<OtherBlock
					title='Руководство'
					watchAllHref='./all'
					className='max-w-[370px] px-5 py-6'
				>
					<div className='flex gap-5 flex-col'>
						{OrganizerProfileValue.map(item => (
							<OrganizerProfile
								key={item.organizerName}
								imageUrl={item.imageUrl}
								imageName={item.imageName}
								organizerName={item.organizerName}
								organizerPost={item.organizerPost}
							/>
						))}
					</div>
				</OtherBlock>
			</div>
		</>
	)
}
