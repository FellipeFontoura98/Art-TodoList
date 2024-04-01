const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

let minhaListaDeItens = []



function adicionarNovaTarefa(){
    minhaListaDeItens.push(input.value)

    mostraTarefas()
}

function mostraTarefas(){

    let novaLi = ''

    minhaListaDeItens.forEach()

//      <li class="task">
//      <img src="./img/checked.png" alt="check-na-tarefa">
//      <p>Terminar essa Todo List</p>
//      <img src="./img/trash.png" alt="tarefa-para-lixo">
//      </li>
}



button.addEventListener('click', adicionarNovaTarefa)