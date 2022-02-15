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
    // li.textContent = text;
    li.setAttribute('data-id', id);

    // const btn = document.createElement('button');
    // li.appendChild(btn);
    li.innerHTML = `${text}<button><i class="far fa-minus-square" data-id=${id}></i></button>`;
    // btn.innerHTML = '<i class="far fa-minus-square"></i>';
    id++;
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

ul.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
        const deletedItem = document.querySelector(`.list-content li[data-id="${id}"]`);
        deletedItem.remove();
    }
});