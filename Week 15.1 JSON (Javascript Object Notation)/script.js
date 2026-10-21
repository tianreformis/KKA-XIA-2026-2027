fetch("databulk.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("Data tidak ditemukan");
        }else{
            return response.json();
        }
    })
    .then(function(siswa){
        const tabel=document.getElementById("data-siswa");
        siswa.forEach(function(item){
            const row = document.createElement("tr");
            row.innerHTML=`
            <td>${item.nama}</td>
            <td>${item.umur}</td>
            <td>${item.kelas}</td>
            <td>${item.tempat_lahir}</td>
            <td>${item.tanggal_lahir}</td>
            <td>${item.alamat}</td>
            `;
            tabel.appendChild(row);
        })
    })


    