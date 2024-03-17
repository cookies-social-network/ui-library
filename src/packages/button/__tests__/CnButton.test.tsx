import { configure, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'

import { CnButton } from '@/packages'

configure({ testIdAttribute: 'data-tid' })

describe('Testing button', () => {
  beforeEach(() => {
    render(<CnButton>Test text</CnButton>)
  })

  it('should be render', async () =>  {
    const button  = screen.getByTestId('cn-button')

    expect(button).toBeDefined()
    expect(button.textContent)
  })
})
