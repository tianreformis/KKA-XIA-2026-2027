function checkNilai(){
    let input = document.getElementById("input").value;
    let result = "";
    inputInt= parseInt(input);
    if (inputInt >=75){
        result = "Lulus";
    }
    else {
        result = "Tidak Lulus";
    }
    document.getElementById("result").innerHTML = result;
}

//tugas, buatlah sebuah file calculator_phi.html, yang berisi perhitungan untuk luas lingkaran, keliling lingkaran Gunakan inputan dari user (jari-jari) untuk menghitung luas lingkaran, keliling lingkaran. Gunakan rumus berikut:
//tetap menggunakan script.js yang sama.
//Luas Lingkaran = π * r * r
//Keliling Lingkaran = 2 * π * r

function hitungLuas(){
    let jariJari = document.getElementById("jarijari").value;
    phi = 3.14;
    let luas = phi * jariJari * jariJari;
    document.getElementById("result").innerHTML = "Luas Lingkaran: " + luas;
}

function hitungKeliling(){
    let jariJari = document.getElementById("jarijari").value;
    phi = 3.14;
    let keliling = 2 * phi * jariJari;
    document.getElementById("result").innerHTML = "Keliling Lingkaran: " + keliling;
}