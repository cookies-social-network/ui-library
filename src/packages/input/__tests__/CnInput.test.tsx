import { configure, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'

import { CnInput } from '@/packages'

configure({ testIdAttribute: 'data-tid' })

describe('Testing CnInput', () => {
  beforeEach(() => {
    render(<CnInput/>)
  })

  it('should be render', async () => {
    expect(screen.getByTestId('cn-input')).toBeDefined()
  })

  it('should be has error', async () => {
    const input = render(<CnInput error={'Test error'} />)
    const error = input.getByTestId('cn-input-error')

    expect(error).toBeDefined()
    expect(error.textContent).toBe('Test error')
  })
})
