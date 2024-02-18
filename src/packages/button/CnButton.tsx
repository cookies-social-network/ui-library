import {ButtonHTMLAttributes, forwardRef, ReactElement, ReactNode, Ref} from 'react'
import cn from 'classnames'
import cb from 'classnames/bind'
import styles from './styles.module.scss'

const cx = cb.bind(styles)

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    size?: 'md' | 'sm' | 'xs'
    appearance?: 'primary' | 'secondary' | 'link' | 'link-underline' | 'dashed'
    icon?: ReactElement
    prefixIcon?: ReactElement
    suffixIcon?: ReactElement
    children?: ReactNode
}

const InnerButton  = (
    props: IButtonProps,
    ref?: Ref<HTMLButtonElement>
) => {
    const {
        size = 'md',
        appearance = 'primary',
        className = '',
        icon,
        children,
        prefixIcon,
        suffixIcon,
        ...restProps
    } = props


    const classNames = cn('cn-button', cx(
        'cn-button',
        `cn-button--${size}`,
        `cn-button--${appearance}`,
        { 'icon-only': icon && !children }
    ), className)

    return (
        <button className={classNames} ref={ref} {...restProps}>
            { icon && !children && icon }

            { prefixIcon && (
                <div className={cn('cn-button__prefix-icon', cx('cn-button__prefix-icon'))}>
                    { prefixIcon }
                </div>
            ) }

            <span className={cn('cn-button__content')}>
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
