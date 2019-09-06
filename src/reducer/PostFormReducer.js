const INITIAL_STATE = {
    title: '',
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_POST_TITLE':
            return {
                ...state,
                title: action.payload
            }
        default:
            return state;
    }
};