let fullname = document.getElementById("fullname");
let output = document.getElementById("output");

fullname.addEventListener("input", function() {
    output.innerText = fullname.value;
})