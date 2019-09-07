const INITIAL_STATE = {
    id: '0',
    nome: 'Alex',
    sobrenome: 'Silva'
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ALIMENTA_REDUX':
            return {
                ...state,
                nome: action.nomeData
            }
        case 'ATUALIZA_ID':
            return {
                ...state,
                id: action.id
            }
        case 'ATUALIZA_NOME':
            return {
                ...state,
                nome: action.nome
            }
        case 'ATUALIZA_SOBRENOME':
            return {
                ...state,
                sobrenome: action.sobrenome
            }
        default:
            return {
                ...state
            };
    }
};