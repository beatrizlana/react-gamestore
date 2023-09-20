import { render, screen } from '@testing-library/react'

import Heading from '.'
import theme from 'styles/theme'

describe('<Heading />', () => {
	it('should render the heading text as white as default on dark theme', () => {
		render(<Heading>Most Popular</Heading>)

		expect(screen.getByRole('heading', { name: /Most Popular/i })).toHaveStyle({
			color: theme.colors.white
		})
	})
})
