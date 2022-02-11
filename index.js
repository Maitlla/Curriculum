function main() {
    console.log("Starting...");

    //const titulo = document.querySelector("h1");
    //titulo.addEventListener("pointerenter", imprimeHola);


    const elements = Array.from(document.body.querySelectorAll("*"));
    console.log(elements);
    const elem = document.body.querySelectorAll("*")
    for (let item of elem){
        item.addEventListener("pointerenter",()=>{console.log("POP!")})
        //console.log(item)
    }
    


}

//function imprimeHola(){
    //console.log("Hola");
//}


window.addEventListener("load",main);

