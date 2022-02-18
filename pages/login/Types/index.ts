export type Props = {}

export interface typeForm {
    email: string,
    password: string
}

export type REQUES_LOGIN = {
    autenticarUsuario: {
        toToken: string
    }
}