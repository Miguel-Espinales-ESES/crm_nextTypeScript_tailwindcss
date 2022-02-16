import React from 'react'
import { isUndefined } from 'lodash'
// type props
import { Props, validateStatus } from './Types'

const Button: React.FC<Props> = ({ onClickButton, type, children, validateStatus, outline, disabled, size, className: classNameInput, shape, loading }) => {

    const sizeButton = () => {
        switch (size) {
            case 'lg': {
                return 'btn-wide btn-lg'
            }
            case 'sm': {
                return 'btn-wide btn-sm'
            }
            case 'xs': {
                return 'btn-wide btn-xs'
            }
            default: {
                return ''
            }
        }
    }

    const shapeButton = () => {
        switch (shape) {
            case 'circle': {
                return 'btn-circle'
            }
            case 'round': {
                return 'btn-square'
            }
            default: {
                return ''
            }
        }
    }

    return (
        <button
            onClick={onClickButton}
            type={type}
            disabled={disabled}
            className={`btn ${(!loading ? '' : 'loading')} ${sizeButton()} ${shapeButton()} ${validateStatus} ${(outline) && 'btn-outline'} ${classNameInput}`}
        >
            <span className={`${!!loading && 'px-2'}`}>
                {children}
            </span>
        </button>
    )
}

export { validateStatus }

export default Button