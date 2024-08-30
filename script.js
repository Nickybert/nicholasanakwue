document.addEventListener('DOMContentLoaded', function() {
    const publications = [
        "Author, A., & You. (2023). Title of your first publication. Journal Name, Volume(Issue), pages.",
        "You, & Author, B. (2022). Title of your second publication. Conference Name, Location.",
        "You. (2021). Title of your third publication. Publisher."
    ];

    const publicationList = document.getElementById('publication-list');
    publications.forEach(pub => {
        const li = document.createElement('li');
        li.textContent = pub;
        publicationList.appendChild(li);
    });
});
