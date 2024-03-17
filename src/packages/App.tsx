import { useRef } from 'react'

import { CnInput } from '@/packages/input'

export const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1>App</h1>

      <CnInput ref={inputRef} />
    </div>
  )
}
