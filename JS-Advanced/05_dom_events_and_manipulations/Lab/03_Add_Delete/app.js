function addItem() {
    const list = document.getElementById('items');
    const input = document.getElementById('newItemText');

    if (!input.value) {
        return;
    }

    const newItem = document.createElement('li');
    newItem.textContent = input.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.setAttribute('href', '#');
    deleteBtn.textContent = '[Delete]';
    newItem.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', clickDelete);

    list.appendChild(newItem);

    input.value = '';

    function clickDelete() {
        newItem.remove();
    }
}
