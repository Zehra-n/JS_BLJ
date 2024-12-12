
function hoverAn(e) {
    
    e.target.parentElement.style.color = "red";
    e.target.parentElement.classList.add("hover");
    e.target.parentElement.classList.add("nix");
}

function hoverAb (e) {
    
    e.target.parentElement.style.color = "white";
    e.target.parentElement.classList.remove("hover");
}

function initialize() {
    var schalter = ["antrieb", "holodeck", "hitzeschild", "transporter"];
    for (var i = 0;i < schalter.length; i++) {
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseover", hoverAn);
        document.getElementById("schalter-" + schalter[i]).addEventListener("mouseout", hoverAb);
    }   
}

window.addEventListener("load", initialize);