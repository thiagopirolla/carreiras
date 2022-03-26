import { render, screen } from '@testing-library/react'

import CardCompany from '.'

describe('<CardCompany />', () => {
  it('should render the CardCompany', () => {
    render(
      <CardCompany
        description="Oi bebe"
        nameCompany="nameCompany"
        img="teste"
        slug="oi-bebe"
      />
    )
    expect(screen.getByText(/Oi bebe/i)).toBeInTheDocument()
    expect(screen.getByText(/nameCompany/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('href', '/oi-bebe')
  })
})
