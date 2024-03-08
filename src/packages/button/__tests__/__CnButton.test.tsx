import { configure, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { CnButton } from '@/packages'

configure({ testIdAttribute: 'data-tid' })

describe('Testing button', () => {
  it('should be render', async () =>  {
    render(<CnButton />)

    expect(screen.getByTestId('cn-button')).not.toBeUndefined()
  })
})
