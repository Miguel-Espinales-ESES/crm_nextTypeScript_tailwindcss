
import React, { cloneElement, useState} from 'react'
// type props
import { Props, TypeInput, validateStatus } from './Types'
import { isUndefined } from 'lodash'

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

type stateInput = 'password' | 'text'

const InputPassword: React.FC<Props> = (_) => {
const [inputType, setInputType] = useState<stateInput>('password')
    const {
        onChangeInput,
        onBlurInput,
        value,
        idInputItem,
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
            if (!!(validateStatusClass)) {
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
            } else {
                return 'text-gray-400'
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

    console.log(!!Icon)

    return (
        <div>
            <label htmlFor={idInputItem} className="label">
                <span className="label-text">{label}</span>
            </label >
            <div className={`relative block ${classNameText()}`} >
                {
                    Icon && cloneElement(Icon as React.ReactElement<any>, { className: 'absolute w-8 h-8 transform -translate-y-1/2 pointer-events-none top-1/2 left-3' })
                }
                <input
                    onChange={onChangeInput}
                    value={value}
                    id={idInputItem}
                    disabled={(isUndefined(disabled)) ? disabled : false}
                    type={inputType}
                    onBlur={onBlurInput}
                    placeholder={placeholder}
                    className={`appearance-none form-input ${!!Icon ? 'px-14' : 'pl-3'} block w-full py-3 input input-bordered ${!!(classNameInput) ? classNameInput : ''} ${classInput()}`}
                />
                <span onClick={() => alert('safasfas')} className='z-50 hover:text-accent-focus cursor-pointer absolute w-8 h-8 transform -translate-y-1/2 pointer-events-none top-[60%] right-3'>
                    <FontAwesomeIcon icon={faEye} />
                </span>
            </div>
            {
                (errorInput?.active) && (
                    <label className="label">
                        <span className="label-text-alt text-accent">{errorInput.error}</span>
                    </label>
                )
            }
        </div>
    )
}

export { TypeInput, validateStatus }

export default InputPassword
