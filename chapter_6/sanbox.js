

const content = document.getElementById('content');

const people = ['mario', 'ligui', 'check'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});