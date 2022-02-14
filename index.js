/* 11-02-2022 */

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
    

    const a = ()=>{const z = 1; const x = 2; return x}

    const counters = elements.map(
        (item) => {
            const obj = {
                element: item,
                counter: 0,
            }
            item.addEventListener("pointerenter",()=>{
                obj.counter++;
                console.log(obj)

            });
            return obj
        }
     

  


}

//function imprimeHola(){
    //console.log("Hola");
//}


window.addEventListener("load",main);

