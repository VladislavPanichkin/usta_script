if (window.location.toString().indexOf('ustakustam.ru/shop') > 0) {
    console.log('nice!');
    var descriptionP = document.getElementById('productDescription').children[0].children[0],
        descriptionUl = document.getElementById('productDescription').children[0].children[1],
        descriptionContainer = document.createElement("div"),
        descriptionPParent = descriptionP.parentNode,
        descriptionUlParent = descriptionUl.parentNode;
    descriptionPParent.replaceChild(descriptionContainer, descriptionP);
    descriptionContainer.appendChild(descriptionP);
    descriptionContainer.appendChild(descriptionUl);
    descriptionContainer.classList.add('description-tab');
    /* var descriptionButton = document.createElement("button"),
        descriptionContainerParent = descriptionContainer.parentNode;
    descriptionContainerParent.replaceChild(descriptionButton, descriptionContainer);
    descriptionButton.appendChild(descriptionContainer); */

    // descriptionContainer.setAttribute('onClick', 'myFunction()');
    descriptionContainer.children[0].style.display = "none";
    descriptionContainer.style.cssText = `color: white!important;
        background-color: yellow;
        width: 50px;
        height: 25px;
        border: 1px solid green;
        text-align: center;
        content: "описание";
        cursor: pointer;
    `;

    function myFunction() {
        descriptionContainer.classList.toggle("show");
    }

    window.onclick = function(event) {
        if (!event.targer.matches('.description-tab')) {
            descriptionContainer.classList.remove("show")
        }
    }
    var activeTab = document.getElementsByClassName("show");
    this.activeTab.style.display = "block"
}