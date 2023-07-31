var x = document.getElementById("myDIV");
var y = document.getElementById("myDIV2");
var z = document.getElementById("myDIV3");

function myFunction() {
    if (x.style.display === "none") {
      x.style.display = "block"
      y.style.display = "none"
      z.style.display = "none"
    } else {
      x.style.display = "block"
      y.style.display = "none"
      z.style.display = "none"
    }
  }



  function myFunction2() {
    if (y.style.display === "none") {
      x.style.border = ""
      y.style.display = "block"
      x.style.display = "none"
      z.style.display = "none"
    } else {
      y.style.display = "block"
      x.style.display = "none"
      z.style.display = "none"
    }
  }


  function myFunction3() {
    if (z.style.display === "none") {
      z.style.display = "block"
      y.style.display = "none"
      x.style.display = "none"
    } else {
      z.style.display = "block"
      y.style.display = "none"
      x.style.display = "none"
    }
  }