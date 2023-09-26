import * as S from './styles'

export type ButtonProps = {
	children: React.ReactNode,
	size?: 'sm' | 'md' | 'lg'
}

const Button = ({children, size = 'md'}: ButtonProps) => (
	<S.Wrapper size={size}>
		{!!children && <span>{children}</span>}
	</S.Wrapper>
)

export default Button
