var prodDescr = document.getElementById("productDescription"),
    descriptionP = prodDescr.children[0].children[0],
    descriptionUl = prodDescr.children[0].children[1],
    descriptionContainer = document.createElement("div"),
    descriptionPParent = descriptionP.parentNode,
    descriptionUlParent = descriptionUl.parentNode;
descriptionPParent.replaceChild(descriptionContainer, descriptionP);
descriptionContainer.appendChild(descriptionP);
descriptionContainer.appendChild(descriptionUl);
descriptionContainer.classList.add('description-tab');
prodDescr.children[0].classList.add("description-container");

/* создать цикл, пихающий все элементы в начале контейнера в div, остановиться, когда итерация дойдёт до table 
var notATable = "table";
*/

var sizes = document.createElement("button");
sizes.style.width = "100px";
sizes.style.height = "100px";
sizes.style.background = "blue";
sizes.style.color = "white";
sizes.innerHTML = "sizes";
sizes.classList.add("tab-sizes");
document.getElementById("productDescription").prependChild(sizes);

var care = document.createElement("button");
care.style.width = "100px";
care.style.height = "100px";
care.style.background = "green";
care.style.color = "white";
care.innerHTML = "care";
care.classList.add("tab-care");
document.getElementById("productDescription").prependChild(care);

var measurements = document.createElement("button");
measurements.style.width = "100px";
measurements.style.height = "100px";
measurements.style.background = "green";
measurements.style.color = "white";
measurements.innerHTML = "measurements";
measurements.classList.add("tab-measur");
document.getElementById("productDescription").prependChild(measurements);

var description = document.createElement("button");
description.style.width = "100px";
description.style.height = "100px";
description.style.background = "red";
description.style.color = "white";
description.innerHTML = "description";
description.classList.add("tab-descr");
document.getElementById("productDescription").prependChild(description);
description.setAttribute('onClick', 'myFunction()');

var descrCont = document.getElementsByClassName("description-container")[0].childNodes;

function hideDisplay(){
    for (var i = 0; i <= descrCont.length; i++){
        descrCont[0].style.display = "none"
    }
}
hideDisplay();

function myFunction() {
    descrCont[0].style.display = "block"
}

/*  убрать div при клике вне кнопки "description" 
window.onclick = function(event) {
    if (!event.target.matches(description)) {
        descrCont[0].classList.remove("show")
    }
} */

