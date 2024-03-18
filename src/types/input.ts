import { ChangeEvent, ReactNode } from 'react'

export interface ICnProps {
  prefix?: ReactNode
  suffix?: ReactNode
  error?: string
  type?: 'text' | 'textarea' | 'email'
  disabled?: boolean
  className?: string
  value?: HTMLInputElement['value'] | HTMLTextAreaElement['value']
  placeholder?: string

  onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
