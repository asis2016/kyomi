import React from 'react'
import { BrandStyle } from './Brand.style'
import { Navbar } from 'react-bootstrap'

/**
 * A navigation brand on top-left main navigation.
 *
 * @params A props from src/types/BrandProps
 * @returns A JSX.Element
 */
const Brand = ({ brandName, href }: BrandProps): JSX.Element => {
	return (
		<BrandStyle>
			<Navbar.Brand href={href}>
				<i className='fas fa-mountain'></i> {brandName}
			</Navbar.Brand>
		</BrandStyle>
	)
}

export default Brand