export const initialState = {
    counter: 0,
    nome: 'alex'
}

export default function (state = initialState, action) {

    let parametro = action.parametro;

    switch (action.type) {
        case 'AUMENTAR_CONTADOR':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DIMINUIR_CONTADOR':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ALTERAR_NOME':
            return {
                ...state,
                nome: action.nome
            }
        default:
            return {
                ...state
            };
    }
}