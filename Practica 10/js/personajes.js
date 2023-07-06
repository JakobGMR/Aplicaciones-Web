function getCharacters(done) {

    const results  = fetch("https://apisimpsons.fly.dev/api/personajes?limit=20");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}
    getCharacters(data => {
        data.docs.forEach(personaje =>{

            const article = document.createRange().createContextualFragment(
                // html
            `
            <article>
                <div class="img-container">
                    <img src="${personaje.Imagen}" alt="personaje">
                </div>
    
                <h2>${personaje.Nombre}</h2>
                <span>${personaje.Estado}</span>
            </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
        })
    });