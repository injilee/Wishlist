'use strict';

const ul = document.querySelector('section .list .list-content');
const form = document.querySelector('.form');
const input = form.querySelector('input');
const addListBtn = form.querySelector('.btn button');

function removeListHandler(event){
    const li = event.target.parentElement.parentElement;
    li.remove();
};

function pushListHandler(event){
    event.preventDefault();
    const li = document.createElement('li');
    const btn = document.createElement('button');
    ul.appendChild(li);
    const wishValue = input.value;
    li.textContent = wishValue;
    li.appendChild(btn);
    btn.innerHTML = '<i class="far fa-minus-square"></i>';
    // console.log(btn);
    btn.addEventListener('click', removeListHandler);
};

form.addEventListener('submit', (e)=> {
    pushListHandler(e);
    input.value = null;
});

addListBtn.addEventListener('click', (e)=> {
    pushListHandler(e);
    input.value = null;
});