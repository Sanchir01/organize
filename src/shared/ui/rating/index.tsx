import { UpArrow } from '~/shared/assets/icons'

export type RatingType = {
	up: boolean
	numberRating: number
}

export const Rating = ({ up, numberRating }: RatingType) => {
	return (
		<div className='bg-bg-grey flex gap-2 px-3 py-[7px] rounded-medium'>
			{up ? <UpArrow /> : ''}
			<span>№{numberRating}</span>
		</div>
	)
}
