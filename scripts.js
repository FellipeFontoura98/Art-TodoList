const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostraTarefas()
}

function mostraTarefas() {
    let novaLi = ''

    // ['comprar café', 'estudar programação']

    minhaListaDeItens.forEach((item, posicao) => {

        novaLi = novaLi + `
       
        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostraTarefas()
}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    mostraTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)

    mostraTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa)