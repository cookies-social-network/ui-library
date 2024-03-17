import { ChangeEventHandler, FocusEventHandler, useRef, useState, forwardRef } from 'react'
import cn from 'classnames'
import { ICnProps } from '@/types'
import cb from 'classnames/bind'
import styles from './styles.module.scss'
import { IconEmail } from '@/icons'

const cx = cb.bind(styles)

export const CnInput = forwardRef<HTMLInputElement, ICnProps>(function CnInput(props, ref){
  const {
    className,
    prefix,
    suffix,
    onChange,
    onBlur,
    ...restProps
  } = props

  const [value, setValue] = useState<string | number | undefined>(restProps.value as string)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const classNames = cn('cn-input', cx(
    'cn-input',
    { 'full-filled': value },
    { 'is-focus': isFocused },
    { 'is-error': props.error },
    { disabled: props.disabled },
  ), className)

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (props.disabled) return

    setValue(event.target.value)

    onChange?.(event)
  }

  const onBlurHandler: FocusEventHandler<HTMLInputElement> | undefined = (event) => {
    if (props.disabled || !inputRef.current) return

    onBlur?.(event)

    inputRef.current.blur()

    setIsFocused(false)
  }

  const onClickHandler = () => {
    if (props.disabled || !inputRef.current) return

    inputRef.current.focus()

    setIsFocused(!isFocused)
  }

  return (
    <>
      <div className={classNames} ref={ref} data-tid={'cn-input'} onClick={onClickHandler}>
        {prefix && (
          <div className={cn('cn-input__prefix', cx('cn-input__prefix'))}>
            {prefix}
          </div>
        )}

        {
          props.type === 'email' && (
            <div className={cn('cn-input__prefix', cx('cn-input__prefix'))}>
              {<IconEmail />}
            </div>
          )
        }

        <input
          ref={inputRef}
          className={cn('cn-input__inner', cx('cn-input__inner'))}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          {...restProps}
        />

        {suffix && (
          <div className={cn('cn-input__suffix', cx('cn-input__suffix'))}>
            {suffix}
          </div>
        )}
      </div>

      {
        props.error && (
          <div className={cn('cn-input__error', cx('cn-input__error'))} data-tid={'cn-input-error'}>
            { props.error }
          </div>
        )
      }
    </>
  )
})
