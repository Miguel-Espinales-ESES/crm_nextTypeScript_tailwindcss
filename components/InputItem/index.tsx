import React from 'react'
// type props
import { Props, TypeInput, validateStatus } from './Types'
import { isUndefined } from 'lodash'

const InputItem: React.FC<Props> = ({ type, label, disabled, placeholder, className: classNameInput, validateStatus: validateStatusClass, errorInput }) => {
    return (
        <>
            <label className="label">
                <span className="label-text">{label}</span>
            </label >
            {
                (errorInput?.active) ? (
                    <>
                        <input
                            disabled={(isUndefined(disabled)) ? disabled : false}
                            type={type}
                            placeholder={placeholder}
                            className={`input input-bordered ${classNameInput} ${validateStatus.input_error}`}>
                        </input>
                        <label className="label">
                            <span className="label-text-alt text-accent">{errorInput.error}</span>
                        </label>
                    </>
                ) : (
                    <input
                        disabled={(isUndefined(disabled)) ? disabled : false}
                        type={type}
                        placeholder={placeholder}
                        className={`input input-bordered ${classNameInput} ${validateStatusClass}`}>
                    </input>
                )
            }
        </>
    )
}

export { TypeInput, validateStatus }

export default InputItem