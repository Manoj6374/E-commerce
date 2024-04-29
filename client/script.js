var navli = document.querySelector(".side-nav")

function show() {
    navli.style.display = "block"
}
function cancel() {
    navli.style.display = "none"
}

var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enterValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enterValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})