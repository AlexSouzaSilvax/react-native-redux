export const initialState = {
    counter: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREASE_COUNTER':
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