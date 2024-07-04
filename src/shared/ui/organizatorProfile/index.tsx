import Image from 'next/image'
export type OrganizerProfileType = {
	imageUrl: string | (() => JSX.Element)
	imageName: string
	organizerName: string
	organizerPost: string
}
export const OrganizerProfile = ({
	imageUrl,
	imageName,
	organizerName,
	organizerPost
}: OrganizerProfileType) => {
	return (
		<div className='flex gap-3'>
			{typeof imageUrl === 'string' ? (
				<Image src={imageUrl} alt={imageName} width={40} height={40} />
			) : (
				imageUrl()
			)}
			<div className='flex flex-col gap-1'>
				<h5 className='text-sm '>{organizerName}</h5>
				<span className='text-[12px] font-normal'>{organizerPost}</span>
			</div>
		</div>
	)
}
