import { Story, Meta } from '@storybook/react'
import CardCompany, { CardCompanyProps } from '.'

export default {
  title: 'CardCompany',
  component: CardCompany,
  args: {
    nameCompany: 'Natura',
    slug: 'natura',
    description: 'Uma empresa que ajuda o meio ambiente',
    category: 'Tecnologia',
    img: 'https://i0.wp.com/www.perfumart.com.br/wp-content/uploads/2015/05/Natura.jpg?resize=500%2C400&ssl=1'
  }
} as Meta

export const Default: Story<CardCompanyProps> = (args) => (
  <CardCompany {...args} />
)
