function sayHello() {
    const name = document.getElementById('name').value;
    const greetingElement = document.getElementById('greeting');

    if (name) {
        greetingElement.textContent = `Welcome, ${name}!`;
    } else {
        greetingElement.textContent = '';
    }
}
