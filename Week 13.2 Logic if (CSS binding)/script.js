function calculateGrade(){
    let grade = document.getElementById("inputGrade").value;
    let result = document.getElementById("result");
    let message = "";
    result.classList.remove("merah", "hijau");
    gradeInt = parseInt(grade);
    if (gradeInt >= 75){
        message = "Selamat, Anda Lulus!";
        result.innerHTML = message;
        result.classList.add("hijau");
    } else {
        message = "Maaf, Anda Tidak Lulus!";
        result.innerHTML = message;
        result.classList.add("merah");
    }
}