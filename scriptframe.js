function toggleSubMenu(id) {
    var subMenu = document.getElementById(id);
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}


const showPopupButton = document.getElementById("show-popup");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("close-popup");

showPopupButton.addEventListener("click", function() {
    popup.style.display = "block";
});

closePopupButton.addEventListener("click", function() {
    popup.style.display = "none";
});

popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
