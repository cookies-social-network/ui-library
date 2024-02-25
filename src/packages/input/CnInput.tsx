import {forwardRef, InputHTMLAttributes, ReactNode, Ref} from "react";
import cn from 'classnames'
import cb from 'classnames/bind'
import styles from './styles.module.scss'

const cx = cb.bind(styles)

interface ICnProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: ReactNode
  suffix?: ReactNode
}

export const InnerInput = (props: ICnProps, ref: Ref<HTMLDivElement>) => {
  const {
    className,
    prefix,
    suffix,
    ...restProps
  } = props

  const inputInnerProps = {
    ...restProps,
  }

  const classNames = cn('cn-input', cx(
    'cn-input',
  ), className)

  return (
    <div className={classNames} ref={ref}>
      {
        prefix && (
          <div className={cn('cn-input__prefix', cx('cn-input__prefix'))}>
            { prefix }
          </div>
        )
      }

      <input className={cn('cn-input__inner', cx('cn-input__inner'))} {...inputInnerProps} />

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
