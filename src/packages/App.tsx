import { CnInput } from '@/packages/input'
import { useRef } from 'react'

export const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1>App</h1>

      <CnInput ref={inputRef} />
    </div>
  )
}
