import cn from 'classnames'
import cb from 'classnames/bind'
import { ButtonHTMLAttributes, forwardRef, ReactElement, Ref } from 'react'

import styles from './styles.module.scss'

// DEBT: Добавить loading.

const cx = cb.bind(styles)

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size?: 'md' | 'sm' | 'xs'
    appearance?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal'
    icon?: ReactElement
    prefixIcon?: ReactElement
    suffixIcon?: ReactElement
}

const InnerButton  = (
    props: IButtonProps,
    ref: Ref<HTMLButtonElement>
) => {
  const {
    size = 'md',
    appearance = 'primary',
    className = '',
    icon,
    children,
    prefixIcon,
    suffixIcon,
    type = 'button',
      ...restProps
  } = props

  const buttonProps: typeof props = {
      type: 'button',
    ...restProps,
  }

  const classNames = cn('cn-button', cx(
      'cn-button',
      `cn-button--${size}`,
      `cn-button--${appearance}`,
      { 'with-icon': props.prefixIcon || props.suffixIcon },
      { 'icon-only': icon && !children }
  ), className)

  return (
    <button className={classNames} type={type} ref={ref} {...buttonProps} data-tid={'cn-button'}>
      { icon && !children && icon }

      { prefixIcon && (
        <div className={cn('cn-button__prefix-icon', cx('cn-button__prefix-icon'))}>
          { prefixIcon }
        </div>
      ) }

      <span className={cn('cn-button__content', cx('cn-button__content'))}>
        { children && children }
      </span>

      { suffixIcon && (
        <div className={cn('cn-button__suffix-icon', cx('cn-button__suffix-icon'))}>
          { suffixIcon }
        </div>
      ) }
    </button>
  )
}

export const CnButton = forwardRef<HTMLButtonElement, IButtonProps>(InnerButton)
