'use strict';

const ul = document.querySelector('section .list .list-content');
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn button');

function pushList(){
    const textValue = input.value;
    if(textValue === ""){
        input.focus();
        return;
    }
    const item = createItem(textValue);
    ul.appendChild(item);
    item.scrollIntoView({block: "center"});
    input.value = "";
    input.focus();
};

let id = 0;
function createItem(textValue){
    const li = document.createElement('li');
    // li.textContent = text;
    li.setAttribute('data-id', id);

    // const btn = document.createElement('button');
    // li.appendChild(btn);
    li.innerHTML = `<div class="item_row">${textValue}<button class="delete_btn" data-id=${id}><i class="far fa-minus-square" data-id=${id}></i></button></div>`;
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
    console.log(e.target);
    const target = e.target;
    const id = target.dataset.id;
    if(id || target.matches('.delete_btn')){
        const deletedItem = document.querySelector(`.list-content li[data-id="${id}"]`);
        deletedItem.remove();
    }
});