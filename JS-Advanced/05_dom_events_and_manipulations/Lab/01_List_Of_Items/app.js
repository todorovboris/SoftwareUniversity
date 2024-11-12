function addItem() {
    const list = document.getElementById('items');
    const textField = document.getElementById('newItemText');
    const text = textField.value;

    const newItem = document.createElement('li');
    newItem.textContent = text;

    list.appendChild(newItem);

    textField.value = '';

    // console.log(fieldElms);
    // console.log(receivedTextField.value);
}
