import React from 'react'

export type Props = {
    label?: string,
    type: TypeInput,
    placeholder?: string,
    disabled?: boolean,
    className?: string,
    validateStatus?: validateStatus
    icon? : React.ReactNode
    errorInput?: {
        active: boolean,
        error: string
    }
}

export enum TypeInput {
    Text = 'text',
    Email = 'email'
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