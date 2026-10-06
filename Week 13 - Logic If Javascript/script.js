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