/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function() {
    // Acordeón
    const acc = document.getElementsByClassName("acordeon");
    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
        }
    }

    // Buscador
    const buscador = document.getElementById("busqueda");
    buscador.onkeyup = function() {
        const filtro = this.value.toLowerCase();
        const filas = document.querySelectorAll("#tablaGlosario tbody tr");
        filas.forEach(f => f.style.display = f.textContent.toLowerCase().includes(filtro) ? "" : "none");
    }
});
const btnSubir = document.getElementById("btnSubir");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
};

btnSubir.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
