
  // active item
  const linksContainer = document.querySelector('.nav-items');
  const myLinks = linksContainer.querySelectorAll('.nav-links');

  for (let i = 0; i < myLinks.length; i++) {
    myLinks[i].addEventListener("click", function() {
      let current = document.querySelector(".active");
      console.log(current);
      current.classList.remove('active');
      this.classList.add("active");
    });
  }

  export { navbar };

