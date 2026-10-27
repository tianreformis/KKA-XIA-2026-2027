fetch("book.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("Data tidak ditemukan");
        }else{
            return response.json();
        }
    })
    .then(function(siswa){
        const tabel=document.getElementById("book-data");
        siswa.forEach(function(item,index){
            //start index from 1
            index++;
            const row = document.createElement("tr");
            row.innerHTML=`
                <td>${index}</td>
                <td>${item.title}</td>
                <td>${item.author}</td>
                <td>${item.year}</td>
                <td>${item.city}</td>
                <td>${item.publisher}</td>
            `;
            tabel.appendChild(row);
        })
    })


function addHTML(){
    window.location.href="add.html";
}

//Bagian Add Book
const form = document.getElementById("form-book");

if (form){
    form.addEventListener("submit",function(event){
        //preventDefault untuk menghentikan submit
        event.preventDefault();
        const newBook = {
            //trim berguna untuk menghilangkan spasi di awal dan akhir
            title : form.getElementById("title").value.trim(),
            author : form.getElementById("author").value.trim(),
            year :form.getElementById("year").value.trim(),
            city : form.getElementById("city").value.trim(),
            publisher : form.getElementById("publisher").value.trim(),
        };
        //JSON.parse untuk mengubah string menjadi object
        const saveToLocalData = JSON.parse(
            
        );
    })
}