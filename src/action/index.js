export function aumentarContador() {
    return {
        type: "AUMENTAR_CONTADOR"
    }
}

export function diminuirContador() {
    return {
        type: "DIMINUIR_CONTADOR"
    }
}

export const alterarNome = (nome) => {
    return {
        type: "ALTERAR_NOME",
        nome: nome
    }
};