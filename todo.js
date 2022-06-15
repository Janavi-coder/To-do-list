//Selectors
const todoinput = document.querySelector('.todo-input');
const todobutton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');

//Event Listener
todobutton.addEventListener('click',addtodo);
todolist.addEventListener('click',deletecheck);


//Functions
function addtodo(event){
    event.preventDefault();
       if (todoinput.value.trim() === "") {
        return;
    }
    //todo div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    //create li
    const newtodo = document.createElement('li');
    newtodo.innerText = todoinput.value;
    newtodo.classList.add('todo-item');
    tododiv.appendChild(newtodo);
    //check button
    const completedbutton = document.createElement('button');
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-button");
    tododiv.appendChild(completedbutton);
    //delete button
    const deletebutton = document.createElement('button');
    deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
    deletebutton.classList.add("delete-button");
    tododiv.appendChild(deletebutton);
    //append to list
    todolist.appendChild(tododiv);
    //clear input value
    todoinput.value = "";
}

function deletecheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === "delete-button"){
        const todo = item.parentElement;
        todo.remove();
    }
    //check todo
    if(item.classList[0] === "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
