import React from 'react'
// type props
import { Props, TypeInput, validateStatus } from './Types'
import { isUndefined } from 'lodash'

// icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const InputItem: React.FC<Props> = ({ type, label, disabled, placeholder, className: classNameInput, validateStatus: validateStatusClass, errorInput, icon }) => {

    if (!!(icon)) {
        return (
            <>
                <label className="label">
                    <span className="label-text">{label}</span>
                </label >
                <div className={`relative block  ${!!(validateStatusClass) ? `text-${validateStatusClass}` : 'text-gray-400'}`}>
                    <FontAwesomeIcon
                        className="absolute w-8 h-8 transform -translate-y-1/2 pointer-events-none top-1/2 left-3"
                        icon={icon}
                    />
                    <input
                        disabled={(isUndefined(disabled)) ? disabled : false}
                        type={type}
                        placeholder={placeholder}
                        className={`appearance-none form-input pl-14 block w-full px-4 py-3 input input-bordered ${classNameInput} input-${(errorInput?.active) ? validateStatus.input_error : validateStatusClass}`}
                    />
                </div>
                {
                    (errorInput) && (
                        <label className="label">
                            <span className="label-text-alt text-accent">{errorInput.error}</span>
                        </label>
                    )
                }
            </>
        )
    } else {
        return (
            <>
                <label className="label">
                    <span className="label-text">{label}</span>
                </label >
                <input
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
            </>
        )
    }
}

export { TypeInput, validateStatus }

export default InputItem