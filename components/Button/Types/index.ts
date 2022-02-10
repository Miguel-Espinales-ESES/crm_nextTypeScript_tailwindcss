export type Props = {
    validateStatus?: validateStatus,
    outline?: boolean,
    disabled?: boolean
    className?: string,
    size?: 'lg' | 'sm' | 'xs',
    shape?: 'circle' | 'round',
    loading?: boolean
}

export enum validateStatus {
    btn_primary = 'btn-primary',
    btn_secondary = 'btn-secondary',
    btn_accent = 'btn-accent',
    btn_ghost = 'btn-ghost',
    btn_link = 'btn-link',
    btn_info = 'btn-info',
    btn_success = 'btn-success',
    btn_warning = 'btn-warning',
    btn_error = 'btn-error',
    btn_glass = 'glass'
}