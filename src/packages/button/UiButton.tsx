import { ReactNode } from "react"

interface IUiButtonProps {
    type?: 'button' | 'submit'
    children?: ReactNode
    appearance?: 'primary' | 'secondary'
}

export const UiButton = (props: IUiButtonProps) => {
    const {
        type = 'button',
        children,
        appearance = 'primary'
    } = props

    return (
        <button type={type} className={['ui-button', `ui-button--${appearance}`].join()}>
            { children }
        </button>
    )
}
