import { Meta, StoryObj } from '@storybook/react'
import Button, {ButtonProps} from '.'

export default {
	title: 'Button',
	component: Button
} as Meta

export const Default: StoryObj = (args: ButtonProps) => <Button {...args}/>

Default.args = {
	children: 'Buy now'
}
