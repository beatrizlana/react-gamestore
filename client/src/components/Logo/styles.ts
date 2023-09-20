import styled, {css} from 'styled-components'
import {LogoProps} from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
	md: () => css`
		width: 11rem;
		height: 3.3rem;
	`,
	lg: () => css`
		width: 20rem;
		height: 6rem;
	`,
	hideText: () => css`
		${media.lessThan('medium')`
			width: 5.8rem;
      height: 4.5rem;
      svg {
        height: 4.5rem;
        pointer-events: none;
      }
      .logo__text {
        display: none;
      }
		`}
	`
}

export const Wrapper = styled.div<LogoProps>`
	${({theme, color, size, hideText}) => css`
		// ! is a non-null assertion operator (its default value is being passed on component declaration)
		color: ${theme.colors[color!]};	

		// !! operator prevents the value from being null or undefined converting it to a boolean
		${!!size && wrapperModifiers[size]}
		${!!hideText && wrapperModifiers.hideText}
	`}
`
