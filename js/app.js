'use strict';

const list = document.querySelector('section .list');
const ul = document.querySelector('section .list .list-content');
const input = document.querySelector('input');
const addListBtn = document.querySelector('.btn button');

function pushListHandler(){
    const text = input.value;
    if(text === ""){
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const btn = document.createElement('button');
    ul.appendChild(li);
    const wishValue = input.value;
    li.textContent = wishValue;
    li.appendChild(btn);
    btn.innerHTML = '<i class="far fa-minus-square"></i>';
    btn.addEventListener('click', () =>{
        li.remove();
    });
    input.value = "";
    input.focus();
    list.scrollIntoView({block: "end"});
};

addListBtn.addEventListener('click', ()=> {
    pushListHandler();
});

input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        pushListHandler();
    }
});