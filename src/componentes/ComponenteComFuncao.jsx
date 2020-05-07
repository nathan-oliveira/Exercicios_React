import React from 'react';

export default props => {
    const aprovados = ['Aluno1', 'Aluno2', 'Aluno3'];

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}