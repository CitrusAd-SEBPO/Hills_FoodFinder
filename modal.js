// The citrus petco hills modal 
let citrus_petco_hills_modal = document.getElementById("citrus_petco_hills_modal");

let btn = document.getElementById("findFood");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  citrus_petco_hills_modal.style.display = "block";
}

span.onclick = function() {
  citrus_petco_hills_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == citrus_petco_hills_modal) {
    citrus_petco_hills_modal.style.display = "none";
  }
};


// Show Modals on a link
if (window.location.pathname === "/Hills_FoodFinder/modal.html")

  document.getElementById('citrus_petco_hills_modal').setAttribute('style', 'display: block !important');

  document.getElementById('citrus_petco_hills_modal').style.setProperty('display', 'block', 'important');

