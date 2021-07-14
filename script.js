const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const list = document.getElementById("list");

function addToDo( toDo ){ // add a to-do
    const text = `<li class="item>
    <i class="fa fa-plus-circle" job="complete"></i>
    <p class="text"> ${toDo} </p>
    <i class="far fa-trash-alt" job="delete"></i>
    </li>` // 

    const position = "beforeend"; //add after the lastchild inside our element
                                //every new item will be placed at the end or just aftere the last child
    list.insertAdjacentHTML(position, text);
}

document.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) { // enter keybord's code = 13 // if user press the enter 
        const toDo = input.value; // add the value of input
        if(toDo) {
            addToDo(toDo) ; 
        }
        input.value = "";//convert to empty 
    }
} );