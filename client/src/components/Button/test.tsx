import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Button from '.'
import theme from 'styles/theme'
import {renderWithTheme} from 'utils/test/helpers'

describe('<Button />', () => {
	it('should render medium size by default', () => {
		renderWithTheme(<Button>Buy now</Button>)

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			padding: theme.spacings.xxsmall + ' ' + theme.spacings.medium,
			'font-size': theme.font.sizes.small
		})
	})
	it('should render small size', () => {
		renderWithTheme(<Button size='sm'>Buy now</Button>)

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			'padding-left': theme.spacings.small,
			'padding-right': theme.spacings.small,
			'font-size': theme.font.sizes.xsmall
		})
	})
	it('should render large size', () => {
		renderWithTheme(<Button size='lg'>Buy now</Button>)

		expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
			padding: theme.spacings.xxsmall + ' ' + theme.spacings.xlarge,
			'font-size': theme.font.sizes.medium
		})
	})
})
