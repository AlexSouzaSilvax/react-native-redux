export function aumentarContador() {
    return {
        type: "AUMENTAR_CONTADOR"
    }
}

export function diminuirContador() {
    return {
        type: "DIMINUIR_CONTADOR"
    }
};

export const changePostTitle = (title) => {
    return {
        type: 'CHANGE_POST_TITLE',
        payload: title
    }
};

export const atualizaNome = (nome) => {
    return {
        type: 'ATUALIZA_NOME',
        nome
    }
};

export const atualizaSobrenome = (sobrenome) => {
    return {
        type: 'ATUALIZA_SOBRENOME',        
        sobrenome
    }
};