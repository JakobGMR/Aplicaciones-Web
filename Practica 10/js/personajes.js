function getCharacters(done) {

    const results  = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}
    getCharacters(data => {
        data.results.forEach(personaje =>{

            const article = document.createRange().createContextualFragment(
                // html
                `
                <article>
                <div class="img-container">
                    <img src="${personaje.image}" alt="personaje">
                </div>
    
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
            </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
        })
    });

    document.getElementById("nav").innerHTML=`
    <ul>
        <li>
            <a href="/Leccion1/Elementosbasicos.html">Elementos</a>
        </li>
        <li>
            <a href="/Leccion2/Index.html">Inicio</a>
        </li>
        <li>
            <a href="/Leccion2/maquetado2-2.html">Maquetado</a>
        </li>
        
    </ul>`;   