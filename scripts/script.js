/**
 * @Author:Adrián Iglesias Riño
 * @Github: https://github.com/
 */
/*Usamos addEventListener con el DomContentLoaded (para que carge el html y css primero antes que el JS)*/
document.addEventListener("DOMContentLoaded", () => {
    const area = document.getElementById("area");
    const perimetro = document.getElementById("perimetro");
    const diagonal = document.getElementById("diagonal");
    const btn = document.getElementById("btn");
/*Le damos al boton una funcion anonima, use Math.sqrt para el cuadrado, el math.pow para elevar los numeros. Y to.fixed(para redondear con 2)*/
    btn.addEventListener("click", () => {
        const longitud = parseFloat(document.getElementById("longitud").value);
        const ancho = parseFloat(document.getElementById("ancho").value);
        if (!isNaN(longitud && ancho)) {
            area.textContent = (longitud * ancho).toFixed(2);
            area.textContent = `Area del rectángulo: ${area.textContent}`;
            perimetro.textContent = (2 * (longitud + ancho)).toFixed(2);
            perimetro.textContent = `Perímetro del rectángulo: ${perimetro.textContent}`;
            diagonal.textContent = Math.sqrt((Math.pow(longitud,2) + Math.pow(ancho,2))).toFixed(2);
            diagonal.textContent = `Diagonal del rectángulo: ${diagonal.textContent}`;
        }
        else {
            area.textContent = `Por favor, ingrese valores válidos`;
        }

    });
});
