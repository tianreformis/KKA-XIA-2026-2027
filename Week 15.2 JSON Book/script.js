
function ambilDataBuku() {
    return fetch("book.json")
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Data tidak ditemukan");
            }
            return response.json();
        })
        .then(function(bukuJSON) {
            // Ambil data tambahan yang tersimpan
            const dataLokal = JSON.parse(
                localStorage.getItem("dataBuku") || "[]"
            );

            // Gabungkan data dari JSON dengan data tambahan
            return bukuJSON.concat(dataLokal);
        });
}

// Tampilkan data di index.html
const tabel = document.getElementById("book-data");

if (tabel) {
    ambilDataBuku()
        .then(function(buku) {
            buku.forEach(function(item, index) {
                const row = document.createElement("tr");

                const nomor = document.createElement("td");
                nomor.textContent = index + 1;
                row.appendChild(nomor);

                ["title", "author", "year", "city", "publisher"]
                    .forEach(function(field) {
                        const cell = document.createElement("td");
                        cell.textContent = item[field];
                        row.appendChild(cell);
                    });
                
                //kolom actions
                const actions = document.createElement("td");
                //tombol edit
                const tombolEdit = document.createElement("button");
                tombolEdit.textContent = "Edit";
                tombolEdit.type = "button";
                tombolEdit.addEventListener("click", function() {
                    editBuku(item.id);
                });
                //tombol hapus
                const tombolHapus = document.createElement("button");
                tombolHapus.textContent = "Hapus";
                tombolHapus.type = "button";
                tombolHapus.addEventListener("click", function() {
                    hapusBuku(item.id);
                });
                //tambahkan object kedalam HTML
                actions.appendChild(tombolEdit);
                actions.appendChild(tombolHapus);
                row.appendChild(actions);               
                tabel.appendChild(row);
            });
        })
        .catch(function(error) {
            console.error(error);
        });
}

// Proses tambah buku di add.html
const form = document.getElementById("form-book");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const bukuBaru = {
            title: document.getElementById("title").value.trim(),
            author: document.getElementById("author").value.trim(),
            year: Number(document.getElementById("year").value),
            city: document.getElementById("city").value.trim(),
            publisher: document.getElementById("publisher").value.trim()
        };

        const dataLokal = JSON.parse(
            localStorage.getItem("dataBuku") || "[]"
        );

        dataLokal.push(bukuBaru);

        localStorage.setItem("dataBuku", JSON.stringify(dataLokal));

        alert("Data buku berhasil ditambahkan!");

        form.reset();
        window.location.href = "index.html";
    });
}

function addHTML() {
    window.location.href = "add.html";
}
