
const nombre = "Adriana";

let titulo = document.getElementById('titulo');
console.log(titulo);

let objetoDeTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDeTypewriter
    .typeString('Adriana Dzib')
    .deleteChars(17)
    .pauseFor(500)
    .typeString('Desarrolladora Frontend JR')
    .pauseFor(2500)
    .deleteChars(14)
    .start();
    
    