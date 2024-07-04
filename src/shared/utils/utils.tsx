'use client'
import { Children, createElement, isValidElement } from 'react'
import { ProviderType } from '../types'

export function ComposeChildren({ children }: ProviderType) {
	const array = Children.toArray(children)
	const last = array.pop()
	return (
		<>
			{array.reduceRight(
				(child, element) =>
					isValidElement(element)
						? createElement(element.type, element.props, child)
						: child,
				last
			)}
		</>
	)
}
