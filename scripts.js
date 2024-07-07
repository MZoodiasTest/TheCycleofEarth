document.addEventListener('DOMContentLoaded', function() {
    const headers = Array.from(document.querySelectorAll('section h2'));
    const headings = document.querySelectorAll('h2');
    // Alcímek rendezése hossz szerint
    headers.sort((a, b) => {
        return a.innerText.length - b.innerText.length;
    });

    const modalBackground = document.querySelector('.modal-background');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const sectionId = header.parentElement.id;
            const content = document.getElementById(sectionId).querySelector('p').innerText;
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = `<h2>${header.innerText}</h2><p>${content}</p>`;
            modalBackground.style.display = 'block';
        });
        // Alcím hozzáadása a HTML-hez, rendezett sorrendben
        document.querySelector('main').appendChild(header.parentElement);
    });

    modalBackground.addEventListener('click', function(e) {
        if (e.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });
});
