export type Props = {
    label? : string,
    type : TypeInput,
    placeholder? : string,
    disabled?: boolean,
    className?: string,
    validateStatus? : validateStatus
}

export enum TypeInput {
    Text = 'text',
    Email ='email'
}


export enum validateStatus {
    input_info = 'input-info',
    input_success = 'input-success'
}