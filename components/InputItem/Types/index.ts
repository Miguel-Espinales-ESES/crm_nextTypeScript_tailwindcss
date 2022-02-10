export type Props = {
    label?: string,
    type: TypeInput,
    placeholder?: string,
    disabled?: boolean,
    className?: string,
    validateStatus?: validateStatus
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
    input_secondary = 'input-secondary',
    input_accent = 'input-accent',
    input_info = 'input-info',
    input_success = 'input-success',
    input_primary = 'input-primary',
    input_warning = 'input-warning',
    input_error = 'input-error'
}