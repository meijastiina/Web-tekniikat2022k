const VIRHE_ILMOITUS = "Virhe!";
function test( tulosta ) {
     if ( tulosta ) {
        let tulostettavaTeksti = "testi";

        let element = document.getElementById("printHere")
        
        element.innerHTML = tulostettavaTeksti;

        for( let i = 0; i < 10; i++) {
            element.innerHTML += " " + i + " ";
        }
     }

     test2();
}
function test2() {
    console.log("test2 funktiossa");
}
test2();
let paluuArvo = test( true );
console.log(paluuArvo);
