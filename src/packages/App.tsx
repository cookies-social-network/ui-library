import { CnInput } from '@/packages/input'
import {  useRef } from 'react'
import { ICnProps } from '@/types'
import { HTMLInputElement } from 'happy-dom'

export const App = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <h1>App</h1>

      <CnInput ref={inputRef} />
    </div>
  )
}
