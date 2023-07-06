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

function getCharacters(done) {

    const results  = fetch("https://apisimpsons.fly.dev/api/personajes");

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
                <span>${personaje.status}</span>
            </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
        })
    });