/*/============================================================== /*/
// accordion js
/*/============================================================== /*/

const accordionItems = document.querySelectorAll(
    ".citrusHills__accordion-item"
  );
  
  accordionItems.forEach((item) => {
    const title = item.querySelector(".citrusHills__accordion-icon");
    const content = item.querySelector(".citrusHills__accordion-content");
  
    title.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
  
      // Close all accordion items except the clicked one
      accordionItems.forEach((item) => {
        if (item !== this) {
          item.classList.remove("active");
        }
      });
  
      if (!isActive) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });