'use client'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { ENFlag, RUFlag } from '~/shared/assets/icons'
import { EnumLanguage } from '~/shared/enum/language'

export const HeaderLanguage = () => {
	const [language, setLanguage] = useState<EnumLanguage>(EnumLanguage.RU)
	return (
		<div className='flex gap-2 items-center'>
			<FormControl>
				<Select
					sx={{
						width: 80,
						height: 30,
					}}
					labelId='demo-simple-select-label'
					id='demo-simple-select'
					value={language}
					label='Age'
					onChange={(e: SelectChangeEvent) =>
						setLanguage(e.target.value as EnumLanguage)
					}
				>
					<MenuItem value={EnumLanguage.RU}>
						<div className='flex gap-1 items-center'>
							<RUFlag /> <span className='text-[10px]'>{EnumLanguage.RU}</span>
						</div>
					</MenuItem>
					<MenuItem value={EnumLanguage.EN}>
						<div className='flex gap-1 items-center'>
							<ENFlag /> <span className='text-[10px]'>{EnumLanguage.EN}</span>
						</div>
					</MenuItem>
					<MenuItem value={EnumLanguage.FR}>
						<div className='flex gap-1 items-center'>
							<ENFlag /> <span className='text-[10px]'>{EnumLanguage.FR}</span>
						</div>
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}
