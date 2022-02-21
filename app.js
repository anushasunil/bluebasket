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

const clearOption = document.querySelector(".clear-all");
const filterSelections = document.querySelectorAll(".filter input");
console.log(filterSelections);

clearOption.addEventListener("click", () => {
    filterSelections.forEach((inputSelection)=>{
        console.log(inputSelection.checked);
        inputSelection.checked = false;
    })
})


const hamburgerNav = document.querySelector(".hamburger-nav");
const asideFilm = document.querySelector(".aside-film");
const asideNavigation = document.querySelector("aside.mobile");

hamburgerNav.addEventListener("click",()=>{
    asideNavigation.style.transform = "translateX(0)";
    asideFilm.style.display = "block";

})

asideFilm.addEventListener("click", ()=>{
    if(asideFilm.style.display === "block") {
        asideNavigation.style.transform = "translateX(-22rem)";
        asideFilm.style.display = "none";
    }
})