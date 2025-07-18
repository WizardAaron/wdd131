document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#favchap');
  const button = document.querySelector('button');
  const list = document.querySelector('#list');

  button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');

      li.textContent = input.value;
      deleteButton.textContent = '❌';
      deleteButton.classList.add('delete');

      li.appendChild(deleteButton);
      list.appendChild(li);

      // Reset input
      input.value = '';
      input.focus();

      // Set delete functionality
      deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
      });
    }
  });

  input.focus();
});