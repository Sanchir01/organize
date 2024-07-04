import Image from 'next/image'
import { OtherBlock } from '~/entities'
import image from '~/shared/assets/icons/graph/graph.jpg'
import gerb from '~/shared/assets/images/gerb.png'
import { OrganizerProfileValue } from '~/shared/constants'
import { OrganizerProfile, Rating } from '~/shared/ui'
import { Header } from '~/widgets/header'
export default function Home() {
	return (
		<>
			<Header />
			<div className='mt-20 m-auto  max-w-[1160px]'>
				<main className='flex  gap-6 justify-between'>
					<div className=''>
						<section className='w-[765px] rounded-default relative'>
							<div className='bg-clip-content bg-gradient-to-r from-blue-900 to-blue-600 h-[130px] w-full rounded-t-default ' />
							<Image
								src={gerb}
								alt={'graph'}
								className='absolute top-20 left-5'
							/>
							<Rating up={true} numberRating={0} />
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
										Спортсмены организации показывают достаточно хорошие
										результаты на тренировках и соревнованиях, а также за
										последний год стабильно поднимаются в рейтинге.
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
				</main>
			</div>
		</>
	)
}
