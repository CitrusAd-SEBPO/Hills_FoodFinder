// The citrus petco hills modal 
let citrus_petco_hills_modal = document.getElementById("citrus_petco_hills_modal");
const drawerHandle = document.getElementById("drawerHandle");

let btn = document.getElementById("findFood");

let span = document.getElementsByClassName("close")[0];

if(checkQueryStaringInUrl('findYourPetFood')){
  citrus_petco_hills_modal.style.display = "block";
}
btn.onclick = function() {
  citrus_petco_hills_modal.style.display = "block";
  citrus_petco_hills_modal.classList.remove('hideModal');
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

span.onclick = function() {
//   citrus_petco_hills_modal.style.display = "none";
  citrus_petco_hills_modal.classList.add('hideModal');
  setTimeout(() => {
    citrus_petco_hills_modal.style.display = "none";
    }, 500); // Animation duration in milliseconds
}


function checkQueryStaringInUrl(field){
  var url = window.location.href;
  if(url.indexOf('?' + field + '=') != -1)
    return true;
  else if(url.indexOf('&' + field + '=') != -1)
    return true;
  return false
}


// JS for Swipe on Mobile
let startY = 0;

document.addEventListener('touchstart', (event) => {
  startY = event.touches[0].clientY;
});

document.addEventListener('touchend', (event) => {
  const endY = event.changedTouches[0].clientY;
  const deltaY = endY - startY;

  if (deltaY > 50 && event.target === drawerHandle) { // If swiped down by a certain threshold
    citrus_petco_hills_modal.style.animation = "slideOut 0.4s";
    citrus_petco_hills_modal.classList.add('hideModal');
    document.body.style.overflow = "auto"; // Allow scrolling

    setTimeout(() => {
      citrus_petco_hills_modal.style.display = "none";
      citrus_petco_hills_modal.style.transform = "none"; // Reset the transform
      citrus_petco_hills_modal.style.animation = "none"; //
      citrus_petco_hills_modal.classList.add('hideModal');
    }, 500); // Animation duration in milliseconds
  }
});