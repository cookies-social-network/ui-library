import { configure, render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'

import { CnUpload } from '@/packages'

configure({ testIdAttribute: 'data-tid' })

describe('Testing button', () => {
  beforeEach(() => {
    render(<CnUpload />)
  })

  it('should be render', async () =>  {
    const button  = screen.getByTestId('cn-upload')

    expect(button).toBeDefined()
  })
})
