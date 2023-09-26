import { Meta, StoryObj } from '@storybook/react'
import MediaMatch from '.'

export default {
	title: 'MediaMatch',
	component: MediaMatch
} as Meta

export const Desktop: StoryObj = () => (
	<MediaMatch greaterThan='medium'>Desktop item</MediaMatch>
)

export const Mobile: StoryObj = () => (
	<MediaMatch lessThan='medium'>Mobile item</MediaMatch>
)

Mobile.parameters = {
	viewport: {
		defaultViewport: 'mobile1'
	}
}
