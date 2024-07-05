'use client'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import * as React from 'react'
const TabArray = [
	{ label: 'Организации', value: '1' },
	{ label: 'Результаты', value: '2' },
	{ label: 'Новости', value: '3' }
]
export const OrganizationTabs = () => {
	const [value, setValue] = React.useState('1')

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<TabContext value={value}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<TabList onChange={handleChange} aria-label='lab API tabs example'>
						{TabArray.map(item => (
							<Tab
								className='text-sm'
								label={item.label}
								value={item.value}
								key={item.value}
							/>
						))}
					</TabList>
				</Box>
				{TabArray.map(item => (
					<TabPanel value={item.value} key={item.value}>
						{item.label}
					</TabPanel>
				))}
			</TabContext>
		</Box>
	)
}
