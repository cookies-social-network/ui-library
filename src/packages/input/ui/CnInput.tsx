import {
  ChangeEvent,
  ChangeEventHandler, FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler,
  ReactNode,
  Ref, useRef,
  useState,
} from 'react'
import cn from 'classnames'
import cb from 'classnames/bind'
import styles from './styles.module.scss'
import { HTMLDivElement, HTMLInputElement } from 'happy-dom'

const cx = cb.bind(styles)

interface ICnProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix' | 'onClick'> {
  prefix?: ReactNode
  suffix?: ReactNode
  onClick?: HTMLDivElement['onclick']
}

export const InnerInput = (props: ICnProps, ref: Ref<HTMLDivElement>) => {
  const {
    className,
    prefix,
    suffix,
    type,
    onClick,
    onChange,
    onBlur,
    ...restProps
  } = props

  const inputInnerProps = {
    ...restProps,
  }

  const [value, setValue] = useState<string | number>()
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<HTMLInputElement | undefined>()

  const classNames = cn('cn-input', cx(
    'cn-input',
    { 'full-filled': value },
    { 'is-focus': isFocused },
    { disabled: props.disabled },
  ), className)

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (props.disabled) return

    setValue(event.target.value)
  }

  const onBlurHandler: FocusEventHandler<HTMLInputElement> | undefined = (event) => {
    if (props.disabled || !inputRef.current) return

    onBlur?.(event)

    inputRef.current.blur()

    setIsFocused(false)
  }

  const onClickHandler: MouseEventHandler<HTMLElement> = (event) => {
    if (props.disabled || !inputRef.current) return

    onClick?.(event)

    inputRef.current.focus()

    setIsFocused(!isFocused)
  }

  return (
    <div className={classNames} ref={ref} onClick={onClickHandler}>
      {
        prefix && (
          <div className={cn('cn-input__prefix', cx('cn-input__prefix'))}>
            { prefix }
          </div>
        )
      }

      <input
        ref={inputRef}
        className={cn('cn-input__inner', cx('cn-input__inner'))}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        {...inputInnerProps}
      />

      {
        suffix && (
          <div className={cn('cn-input__prefix', cx('cn-input__prefix'))}>
            { suffix }
          </div>
        )
      }
    </div>
  )
}

export const CnInput = forwardRef<HTMLDivElement, ICnProps>(InnerInput)
