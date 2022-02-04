const button = document.querySelector('button');
const list = document.querySelector('ul');
const input = document.querySelector('input');

button.addEventListener('click', () => {
    let value = input.value;
    input.value = '';

    if (value != '') {
        let listItem = document.createElement('li');
        let listButton = document.createElement('button');
        let listText = document.createElement('span');

        listItem.appendChild(listText);
        listText.textContent = value;
        listButton.textContent = '❌';
        listItem.appendChild(listButton);
        list.appendChild(listItem);

        listButton.onclick = () => {
            list.removeChild(listItem);
        }
    }
    input.focus();
})