import React from 'react'
import { Props , TypeInput, validateStatus } from './Types'
import { isUndefined } from 'lodash'

const InputItem: React.FC<Props> = ({ type, label, disabled, placeholder, className: classNameInput , validateStatus }) => {
    return (
        <>
            <label className="label">
                <span className="label-text">{label}</span>
            </label >
            <input
                disabled={(isUndefined(disabled)) ? disabled : false}
                type={type}
                placeholder={placeholder}
                className={`input input-bordered ${classNameInput} ${validateStatus}`}>
            </input>
        </>
    )
}

export { TypeInput, validateStatus }

export default InputItem