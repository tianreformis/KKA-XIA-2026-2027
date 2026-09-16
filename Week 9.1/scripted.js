// Frontend
// HTML, CSS

// Backend
// Javascript



function outputName(){
    let fetchingName = document.getElementById("nama").value;

    document.getElementById("output").innerHTML = fetchingName;
}
function tambah(){
    let a = document.getElementById("angka1").value;
    let b = document.getElementById("angka2").value;
    let hasil = parseInt(a) + parseInt(b);

    document.getElementById("hasil").innerHTML = hasil;
}