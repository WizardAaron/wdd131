const input = document.querySelector('#favchap');
const botton = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌';

li.append(deleteButton);

li.append(li);