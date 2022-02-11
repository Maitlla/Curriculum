function main() {
    console.log("Starting...");
    const titulo = document.querySelector("h1");
    titulo.addEventListener("pointerenter", imprimeHola);
}

function imprimeHola(){
    console.log("Hola");
}


window.addEventListener("load",main);

