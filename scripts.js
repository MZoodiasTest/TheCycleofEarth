document.addEventListener('DOMContentLoaded', function() {
    const modalBackground = document.querySelector('.modal-background');
    const headers = Array.from(document.querySelectorAll('section h2'));

    // Alcímek rendezése hossz szerint
    headers.sort((a, b) => {
        return a.innerText.length - b.innerText.length;
    });

    // Alcímek elhelyezése rendezett sorrendben
    headers.forEach(header => {
        document.querySelector('main').appendChild(header.parentElement);
    });

    // Modal ablak megnyitása alcímre kattintáskor
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const sectionId = header.parentElement.id;
            const content = document.getElementById(sectionId).querySelector('p').innerText;
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = `<h2>${header.innerText}</h2><p>${content}</p>`;
            modalBackground.style.display = 'block';
        });
    });

    // Modal ablak bezárása, ha a háttérre kattintanak
    modalBackground.addEventListener('click', function(e) {
        if (e.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });

});
