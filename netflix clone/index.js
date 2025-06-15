
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      // Toggle active class on button
      this.classList.toggle("active");

      // Toggle panel visibility
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }

      // Toggle plus/minus icon
      const icon = this.querySelector("i");
      if (this.classList.contains("active")) {
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-plus");
      }
    });
  });

