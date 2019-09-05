export const initialState = {
    counter: 0
}

export default function (state = initialState, action) {
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
        default:
            return {
                ...state
            };
    }
}