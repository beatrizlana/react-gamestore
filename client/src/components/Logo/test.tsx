import { screen } from '@testing-library/react'

import Logo from '.'
import 'jest-styled-components'

import {renderWithTheme} from 'utils/test/helpers'
import theme from 'styles/theme'

describe('<Logo />', () => {
	it('should render white label by default', () => {
		renderWithTheme(<Logo />)

		expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
			color: theme.colors.white
		})
	})
	it('shouldn\'t render other colors than black or white', () => {
		renderWithTheme(<Logo color="red" />)

		expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
			color: theme.colors.white
		})
	})
	it('should render medium size by default', () => {
		renderWithTheme(<Logo />)
		expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
			width: '11rem'
		})
	})
	it('should render logo without text on mobile devices', () => {
		renderWithTheme(<Logo hideText />)
		expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyleRule(
			'width', '5.8rem', {
				media: '(max-width: 768px)'
			}
		)
	})
})
