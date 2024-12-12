window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    var ingredients = document.getElementById("ingredients");
    
    if (ingredients.selectedIndex > -1 ) {
        alert(ingredients.selectedIndex);
        var ingredient = ingredients.getElementsByTagName("option")[ingredients.selectedIndex];
        var choice = document.getElementById("choice");
        ingredients.removeChild(ingredient);
        choice.appendChild(ingredient);
        ingredients.selectedIndex = 0;
    }
}

function remove() {
    var choice = document.getElementById("choice");
    
    if (choice.selectedIndex > -1 ) {
        var ingredient = choice.getElementsByTagName("option")[choice.selectedIndex];
        var ingredients = document.getElementById("ingredients");
        choice.removeChild(ingredient);
        ingredients.appendChild(ingredient);
        choice.selectedIndex = 0;
    }
}