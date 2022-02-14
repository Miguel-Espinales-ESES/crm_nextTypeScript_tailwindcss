import React, { cloneElement } from 'react'
// type props
import { Props, TypeInput, validateStatus } from './Types'
import { isUndefined } from 'lodash'

const InputItem: React.FC<Props> = (_) => {

    const {
        onChangeInput,
        value,
        idInputItem,
        type,
        label,
        disabled,
        placeholder,
        className:
        classNameInput,
        validateStatus: validateStatusClass,
        errorInput,
        Icon
    } = _

    const classNameText = () => {
        if (errorInput?.active) {
            return 'text-error'
        } else {
            switch (validateStatusClass) {
                case 'primary': return 'text-primary'
                case 'secondary': return 'text-secondary'
                case 'accent': return 'text-accent'
                case 'info': return 'text-info'
                case 'success': return 'text-success'
                case 'warning': return 'text-warning'
                case 'error': return 'text-error'
                default: return 'text-gray-400'
            }
        }
    }

    const classInput = () => {
        if (errorInput?.active) {
            return 'input-error'
        } else {
            switch (validateStatusClass) {
                case 'primary': return 'input-primary'
                case 'secondary': return 'input-secondary'
                case 'accent': return 'input-accent'
                case 'info': return 'input-info'
                case 'success': return 'input-success'
                case 'warning': return 'input-warning'
                case 'error': return 'input-error'
                default: return ''
            }
        }
    }

    if (!!(Icon)) {
        return (
            <div>
                <label htmlFor={idInputItem} className="label">
                    <span className="label-text">{label}</span>
                </label >
                <div className={`relative block ${!!(validateStatusClass) ? classNameText() : 'text-gray-400'}`} >
                    {
                        cloneElement(Icon as React.ReactElement<any>, { className: 'absolute w-8 h-8 transform -translate-y-1/2 pointer-events-none top-1/2 left-3' })
                    }
                    <input
                        onChange={onChangeInput}
                        value={value}
                        id={idInputItem}
                        disabled={(isUndefined(disabled)) ? disabled : false}
                        type={type}
                        placeholder={placeholder}
                        className={`appearance-none form-input pl-14 block w-full px-4 py-3 input input-bordered ${!!(classNameInput) ? classNameInput : ''} ${classInput()}`}
                    />
                </div>
                {
                    (errorInput) && (
                        <label className="label">
                            <span className="label-text-alt text-accent">{errorInput.error}</span>
                        </label>
                    )
                }
            </div>
        )
    } else {
        return (
            <div>
                <label htmlFor={idInputItem} className="label">
                    <span className="label-text">{label}</span>
                </label >
                <input
                    value={value}
                    id={idInputItem}
                    disabled={(isUndefined(disabled)) ? disabled : false}
                    type={type}
                    placeholder={placeholder}
                    className={`input input-bordered ${classNameInput} input-${(errorInput?.active) ? validateStatus.input_error : validateStatusClass}`}
                />
                {
                    (errorInput) && (
                        <label className="label">
                            <span className="label-text-alt text-accent">{errorInput.error}</span>
                        </label>
                    )
                }
            </div>
        )
    }
}

export { TypeInput, validateStatus }

export default InputItem