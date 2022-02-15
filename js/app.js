'use strict';

const ul = document.querySelector('section .list .list-content');
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn button');

function pushList(){
    const text = input.value;
    if(text === ""){
        input.focus();
        return;
    }
    const item = createItem(text);
    ul.appendChild(item);
    item.scrollIntoView({block: "center"});
    input.value = "";
    input.focus();
};

let id = 0;
function createItem(text){
    const li = document.createElement('li');
    li.textContent = text;
    
    const btn = document.createElement('button');
    li.appendChild(btn);
    btn.innerHTML = '<i class="far fa-minus-square"></i>';
    btn.addEventListener('click', () =>{
        li.remove();
    });

    return li;
}

addBtn.addEventListener('click', ()=> {
    pushList();
});

input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        pushList();
    }
});