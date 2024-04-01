const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []



function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)

    input.value=''

    mostraTarefas()
}

function mostraTarefas() {
    let novaLi = ''

    // ['comprar café', 'estudar programação']
    
    minhaListaDeItens.forEach((tarefa, posicao) => {

        novaLi = novaLi + `
       
        <li class="task">
            <img src="./img/checked.png" alt="check-na-tarefa">
            <p>${tarefa}</p>
            <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletarItem(${posicao})">
        </li>

        `
    })

    listaCompleta.innerHTML = novaLi


}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostraTarefas()
}




button.addEventListener('click', adicionarNovaTarefa)