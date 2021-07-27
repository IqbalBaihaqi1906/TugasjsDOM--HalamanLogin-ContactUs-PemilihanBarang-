function submitted(){                                                     
    let nama=document.getElementById("inputName").value;
    let email=document.getElementById("inputEmail").value;
    let pesan=document.getElementById("pesan").value;

    if (nama == "" || email == "" || pesan == ""){
        // styling alert menggunakan SweetAlert
        swal({
            title: "Pesan Gagal Terkirim!",                             
            text: "Tidak boleh ada form yang kosong",
            icon: "error",
          });
    } else {
        swal({
            title: "Pesan Berhasil Terkirim!",
            text: "Nama :" + nama + "\nEmail :" + email + "\nPesan :\n" + pesan,
            icon: "success",
          });
    }
    document.getElementById("inputName").value = ""
    document.getElementById("inputEmail").value = ""
    document.getElementById("pesan").value = ""
}


let buttonSubmit = document.getElementById("btn");
buttonSubmit.addEventListener("click", submitted)