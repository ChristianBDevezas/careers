const careersItems = document.querySelectorAll(".careers__content__item");
const careersButtons = document.querySelectorAll(".careers__title");
const careerImages = document.querySelectorAll(".careers__info");
const careerIcons = document.querySelectorAll(".careers__title__state");

function removeActiveItems() {    
    careersItems.forEach((item) => {
        item.classList.remove("active-item");
    });

    careerImages.forEach((image) => {
        image.classList.remove("active-item");
    });

    careerIcons.forEach((icon) => {
        icon.classList.remove("active-item");
    });
}

careersButtons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        removeActiveItems();
        careersItems[idx].classList.add("active-item");
        careerImages[idx].classList.add("active-item");
        careerIcons[idx].classList.add("active-item");
    });
});