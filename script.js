
function loadSVG() {
    var image = document.getElementById('image');

    var screenWidth = window.innerWidth;
    
    var svgPath;

    if (screenWidth <= 600) {
      svgPath = "assets/svg/illustration-sign-up-mobile.svg";
    } else {
      svgPath = "assets/svg/illustration-sign-up-desktop.svg";
    }

    image.innerHTML = `<object type="image/svg+xml" data="${svgPath}"></object>`;
  }

  document.addEventListener('DOMContentLoaded', loadSVG);
  window.addEventListener('resize', loadSVG);