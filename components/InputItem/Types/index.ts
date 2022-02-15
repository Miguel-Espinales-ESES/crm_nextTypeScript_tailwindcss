import React from 'react'

export type Props = {
    label?: string,
    type: TypeInput,
    idInputItem: string,
    placeholder?: string,
    value?: string
    disabled?: boolean,
    className?: string,
    validateStatus?: validateStatus
    Icon?: React.ReactNode
    onChangeInput?: React.ChangeEventHandler<HTMLInputElement>,
    onBlurInput?: React.FocusEventHandler<HTMLInputElement>,
    errorInput?: {
        active: boolean,
        error?: string
    }
}

export enum TypeInput {
    Text = 'text',
    Email = 'email',
    Password = 'password'
}


export enum validateStatus {
    input_secondary = 'secondary',
    input_accent = 'accent',
    input_info = 'info',
    input_success = 'success',
    input_primary = 'primary',
    input_warning = 'warning',
    input_error = 'error'
}