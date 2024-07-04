import cn from 'clsx'
import Link from 'next/link'
import { ProviderType } from '~/shared/types'
export type OtherBlock = {
	title?: string
	watchAllHref?: string
	className?: string
} & ProviderType
export const OtherBlock = ({
	children,
	title,
	watchAllHref,
	className
}: OtherBlock) => {
	return (
		<section
			className={cn('flex flex-col gap-6  bg-white rounded-default', className)}
		>
			<div className='flex justify-between w-full'>
				<h2 className='font-semibold text-[20px]'>{title}</h2>
				{watchAllHref && (
					<Link
						href={watchAllHref}
						title='all'
						className='text-greyText hover:underline transition ease-in-out  hover:scale-105 duration-300'
					>
						Cмотреть все {`->`}
					</Link>
				)}
			</div>
			<div className=''>{children}</div>
		</section>
	)
}
