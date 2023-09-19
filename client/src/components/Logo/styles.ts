import styled, {css} from 'styled-components'
import {LogoProps} from '.'

// ! is a non-null assertion operator (its default value is being passed on component declaration)
export const Wrapper = styled.div<LogoProps>`
	${({theme, color}) => css`
		color: ${theme.colors[color!]};	
	`}
`
