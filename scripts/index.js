import {Contador} from "./contador.js";

const modal = document.querySelector("dialog");
const p1Nombre = "Nosotros";
const p2Nombre = "Ellos"
const partidaEnMemoria = JSON.parse(localStorage.getItem("truco"));

const player1 = new Contador(p1Nombre, document.getElementById('jugador1-container'),partidaEnMemoria[p1Nombre]);
const player2 = new Contador(p2Nombre, document.getElementById('jugador2-container'),partidaEnMemoria[p2Nombre]);
console.log(partidaEnMemoria);

function reset(){
    player1.reset();
    player2.reset();
    modal.close();
}
document.getElementById("reset").addEventListener("click", () => {
     modal.showModal();
});
document.getElementById("rechazar").addEventListener("click", () =>{
    modal.close();
})

document.getElementById("aceptar").addEventListener("click", reset);

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
     const partidaAGuardar = {
         [player1.nombre] : player1.numero,
         [player2.nombre] : player1.numero,
        }
        localStorage.setItem("truco", JSON.stringify(partidaAGuardar));
        console.log('guardado');
            }
            );     
        }
        );