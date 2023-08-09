// The citrus petco hills modal 
let citrus_petco_hills_modal = document.getElementById("citrus_petco_hills_modal");

let btn = document.getElementById("findFood");

let span = document.getElementsByClassName("close")[0];

if(checkQueryStaringInUrl('findYourPetFood')){
  citrus_petco_hills_modal.style.display = "block";
}
btn.onclick = function() {
  citrus_petco_hills_modal.style.display = "block";
  citrus_petco_hills_modal.classList.remove('hideModal');
}

span.onclick = function() {
//   citrus_petco_hills_modal.style.display = "none";
  citrus_petco_hills_modal.classList.add('hideModal');
  setTimeout(() => {
    citrus_petco_hills_modal.style.display = "none";
    }, 800); // Animation duration in milliseconds
}

// window.onclick = function(event) {
//   if (event.target == citrus_petco_hills_modal) {
//     citrus_petco_hills_modal.style.display = "none";
//   }
// };


function checkQueryStaringInUrl(field){
  var url = window.location.href;
  if(url.indexOf('?' + field + '=') != -1)
    return true;
  else if(url.indexOf('&' + field + '=') != -1)
    return true;
  return false
}


