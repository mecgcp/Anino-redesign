// Define the variables we'll be using
var container = document.querySelector('#myNavMenu')
var button = document.querySelector('.mobileIcon')
var maxWidth = "700px"

button.addEventListener("click", () => {
    // Slide down
    if (!container.classList.contains("active")) {
      container.classList.add("active");
      container.style.height = "auto";
  
      var height = container.clientHeight + "px";
      container.style.height = "0px";
  
      setTimeout(() => {
        container.style.height = height;
      }, 0);
  
      // Slide up
    } else {
      container.style.height = "0px";
  
      // Remove the `active` class when the animation ends
      container.addEventListener(
        "transitionend",
        () => {
          container.classList.remove("active");
        },
        { once: true }
      );
    }
  });
  
  // Create event listener on window resize
  window.addEventListener("resize", checkForWindowResize);
  
  // Clear stuff on resize
  function checkForWindowResize() {
    if (window.matchMedia(`(min-width: ${maxWidth})`).matches) {
      container.style.height = "";
      container.classList.remove("active");
    }
  }


  // Theme swticher with Local Session Storage 

  // document.querySelector(".slider").onclick = function () {
  
  //   // Get current theme, and assign it to currentTheme variable.
  //   var currentTheme = document.querySelector("html").getAttribute("dataTheme");
  
  //   // Alternate theme
  //   if (currentTheme === "light") {
  //     document.querySelector("html").setAttribute("dataTheme", "navy");
  //   } else {
  //     document.querySelector("html").setAttribute("dataTheme", "light");
  //   }
  // };

  document.querySelector(".slider").onclick = function () {
    let currentTheme = document.querySelector("html").getAttribute("dataTheme");
  
    if (currentTheme === "light") {
      document.querySelector("html").setAttribute("dataTheme", "navy");
      sessionStorage.setItem("selectedTheme", "navy");
      document.getElementsByClassName("darkModeVid").classList.add("lightModeVid");

    } else {
      document.querySelector("html").setAttribute("dataTheme", "light");
      sessionStorage.setItem("selectedTheme", "light");
      document.getElementsByClassName("lightModeVid").classList.remove("darkModeVid");

    }
  };
  
  if (sessionStorage.getItem("selectedTheme")) {
    document
      .querySelector("html")
      .setAttribute("dataTheme", sessionStorage.getItem("selectedTheme"));
  }