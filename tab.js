

// Tab JS
function showContent(evt, itemName) {
    var i, search_content, bread_btn;
    search_content = document.getElementsByClassName("search_content");
    for (i = 0; i < search_content.length; i++) {
      search_content[i].style.display = "none";
    }
    bread_btn = document.getElementsByClassName("bread_btn");
    for (i = 0; i < bread_btn.length; i++) {
      bread_btn[i].className = bread_btn[i].className.replace(" active", "");
    }
    document.getElementById(itemName).style.display = "block";
    evt.currentTarget.className += " active";
  }