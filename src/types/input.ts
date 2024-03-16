import { InputHTMLAttributes, ReactNode } from 'react'

export interface ICnProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  prefix?: ReactNode
  suffix?: ReactNode
  error?: string
}
