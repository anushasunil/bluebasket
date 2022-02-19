let primaryVisited = 0;
const wishlistClickHandler = (targetButton) => {
    targetButton.style.transition = "width 0.2s ease-in";
    if (primaryVisited === 0) {
        targetButton.innerHTML = `<a href="#">ADDED TO WISHLIST</a><i class="fa-solid fa-circle-check button-icons"></i>`;
        parentOfTarget = targetButton.parentNode.parentNode.parentNode.parentNode;
        primaryVisited = 1;
    } else {
        targetButton.innerHTML = `<a href="#">ADD TO WISHLIST</a><i class="fa-solid fa-cart-shopping button-icons"></i>`;
        primaryVisited = 0;
    }

}

let secondaryVisited = 0;
const cartClickHandler = (targetButton) => {
    targetButton.style.transition = "width 0.2s ease-in";
    if (secondaryVisited === 0) {
        targetButton.innerHTML = `<a href="#">GO TO CART</a><i class="fa-solid fa-circle-check button-icons"></i>`;
        secondaryVisited = 1;
    } else {
        targetButton.innerHTML = `<a href="#">ADD TO CART</a><i class="fa-solid fa-basket-shopping button-icons"></i>`;
        secondaryVisited = 0;
    }
}

const filterDropDown = document.querySelector(".filter-dropdown");
const filterContents = document.querySelector(".filter-contents");
const filterFilm = document.querySelector(".filter-film");
const filterHeader = document.querySelector(".fullscreen-header");
filterDropDown.addEventListener("click", () => {
    if (filterContents.style.display !== "block") {
        filterContents.style.display = "block";
        filterFilm.style.display = "block";
        filterHeader.innerHTML = `<h6 class="fullscreen-header">Filters <i class="fa-solid fa-angle-up"></i></h6>
        `
    } else {
        filterContents.style.display = "none";
        filterFilm.style.display = "none";
        filterHeader.innerHTML = `<h6 class="fullscreen-header">Filters <i class="fa-solid fa-angle-down"></i></h6>
        `
    }
})


const clearOption = document.querySelector(".clear-all");
const filterSelections = document.querySelectorAll(".filter input");
console.log(filterSelections);

clearOption.addEventListener("click", () => {
    filterSelections.forEach((inputSelection)=>{
        console.log(inputSelection.checked);
        inputSelection.checked = false;
    })
})