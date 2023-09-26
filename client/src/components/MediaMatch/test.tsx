import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import 'jest-enzyme'
import MediaMatch from '.'

describe('<MediaMatch />', () => {
	let desktopElement: Element
	let mobileElement: Element

	beforeEach(() => {
		render(
			<>
				<MediaMatch greaterThan="medium">
					<div data-testid="desktop-element">
						Desktop element
					</div>
				</MediaMatch>
				<MediaMatch lessThan="medium">
					<div data-testid="mobile-element">
						Mobile element
					</div>
				</MediaMatch>
			</>

		)
		desktopElement = screen.getByTestId('desktop-element')
		mobileElement = screen.getByTestId('mobile-element')
	})

	it('should be hidden if no media query is passed', () => {
		expect(desktopElement.parentElement).toHaveStyleRule('display', 'none')
		expect(mobileElement.parentElement).toHaveStyleRule('display', 'none')
	})

	it('should show or hide element based on media query passed', () => {
		expect(desktopElement.parentElement).toHaveStyleRule('display', 'block', {
			media: '(min-width: 768px)'
		})
		expect(mobileElement.parentElement).toHaveStyleRule('display', 'block', {
			media: '(max-width: 768px)'
		})
	})
})
