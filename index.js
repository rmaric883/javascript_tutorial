const myBox = document.getElementById('myBox');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', event => {
    myBox.style.backgroundColor = 'tomato';
    myBox.textContent = 'OUCH! 😳';
});

myButton.addEventListener('mouseover', event => {
    myButton.style.cursor = 'pointer';
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent = "Don't do it! 😱";
})

myButton.addEventListener('mouseout', event => {
    myButton.style.cursor = 'normal';
    myBox.style.backgroundColor = 'lightgreen';
    myBox.textContent = 'Click Me 😃';
})

