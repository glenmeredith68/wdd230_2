const button = document.querySelector('button');
button.addEventListener('click', () => {
    const a = Number(document.querySelector('#a').value);
    const b = Number(document.querySelector('#b').value);

    const result = a + b;
    document.querySelector('#answer').textContent = 'Your result is ' + result;
})