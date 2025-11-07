
let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [];

let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas));
}

function renderTarefas() {
    listElement.innerHTML = ""; 
    
    tarefas.map((todo) => {
        let liElement = document.createElement("li");
        let tarefaText = document.createTextNode(todo); 
        
        let linkElement = document.createElement("a"); 
        linkElement.setAttribute("href", "#");
        
        let posicao = tarefas.indexOf(todo);
        
        let divElement = document.createElement("div"); 
        let checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})`);
        linkElement.appendChild(document.createTextNode("Excluir"));

        divElement.appendChild(checkBox);
        divElement.appendChild(tarefaText); 
        liElement.appendChild(divElement);
        liElement.appendChild(linkElement); 
        listElement.appendChild(liElement); 
    });
}

function adicionarTarefas() {
    if (inputElement.value.trim() === '') {
        alert("Digite alguma tarefa");
        return false;     
    } else {
        let novaTarefa = inputElement.value;
        tarefas.push(novaTarefa);
        
        inputElement.value = "";    
        renderTarefas();            
        salvarDados();               
    }
}

buttonElement.onclick = adicionarTarefas; 

function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1);  
    renderTarefas();                
    salvarDados();                  
}

renderTarefas();
