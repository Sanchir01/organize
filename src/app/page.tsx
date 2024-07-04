import { Header } from '~/widgets/header'
import { Organization } from '~/widgets/organization'
export default function Home() {
	return (
		<>
			<Header />
			<div className='mt-20 m-auto  max-w-[1160px]'>
				<div className='flex gap-6 justify-between'>
					<Organization />
				</div>
			</div>
		</>
	)
}
