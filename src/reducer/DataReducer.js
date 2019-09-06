const INITIAL_STATE = {
    data: [
        {
            id: 0,
            nome: 'Alex',
            sobrenome: 'Silva'
        }
    ],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ATUALIZA_NOME':
            return {
                ...state,
                data: [{ nome: action.nome, sobrenome: action.nome }]
            }
        case 'ATUALIZA_SOBRENOME':
            return {
                ...state,
                data: [{ sobrenome: action.sobrenome }]
            }
        default:
            return state;
    }
};