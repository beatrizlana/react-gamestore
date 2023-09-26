import styled, {DefaultTheme, css} from 'styled-components'
import {ButtonProps} from '.'

type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifiers = {
	sm: (theme: DefaultTheme) => css`
		height: 3rem;
		font-size: ${theme.font.sizes.xsmall};
		padding-left: ${theme.spacings.small};
		padding-right: ${theme.spacings.small};
	`,
	md: (theme: DefaultTheme) => css`
		height: 4rem;
		font-size: ${theme.font.sizes.small};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
	`,
	lg: (theme: DefaultTheme) => css`
		height: 5rem;
		font-size: ${theme.font.sizes.medium};
		padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
	`
}

export const Wrapper = styled.button<WrapperProps>`
	${({ theme, size }) => css`
		background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);;
		color: ${theme.colors.white};
		border: 0;
		border-radius: ${theme.border.radius};
		cursor: pointer;
		text-decoration: none;
		font-weight: ${theme.font.bold};

		${!!size && wrapperModifiers[size](theme)}
`}
`
