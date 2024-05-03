// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtén el elemento del primer párrafo del pie de página
    var copyrightParagraph = document.querySelector("footer p:first-of-type");
    // Obtén el elemento del segundo párrafo del pie de página
    var lastModifiedParagraph = document.querySelector("footer p:nth-of-type(2)");

    // Obtiene el año actual
    var currentYear = new Date().getFullYear();
    // Establece el año de copyright en el primer párrafo del pie de página
    copyrightParagraph.textContent = "© " + currentYear + " Haydee De la Sota Gracia";
    // Cambia el color de texto del primer párrafo del pie de página
    copyrightParagraph.style.color = "white";
    // Utiliza la misma tipografía que en tu HTML
    copyrightParagraph.style.fontFamily = window.getComputedStyle(document.body).fontFamily;

    // Obtiene la fecha de la última modificación del documento
    var lastModifiedDate = new Date(document.lastModified);
    // Establece la fecha de la última modificación en el segundo párrafo del pie de página
    lastModifiedParagraph.textContent = "Última modificación: " + lastModifiedDate;
    // Cambia el color de texto del segundo párrafo del pie de página
    lastModifiedParagraph.style.color = "yellow";
    // Utiliza la misma tipografía que en tu HTML
    lastModifiedParagraph.style.fontFamily = window.getComputedStyle(document.body).fontFamily;
});



const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;