function kirim(){
    let username = document.getElementById("inputUsername").value;
    let password = document.getElementById("inputPassword").value;

    if (username == "" || password == ""){
        // styling alert menggunakan SweetAlert
        swal({
            title: "Tidak boleh ada form yang kosong",
            icon: "warning",
        });
    } else {
        cek = confirm("Apakah datanya sudah benar?")
        if (cek == true ){
            swal({
                title: "Login Berhasil",
                icon: "success",
            });
        } else {
            swal({
                title: "Login Dibatalkan ",
                icon: "error",
            });
        }
    }
    document.getElementById("inputUsername").value = "";
    document.getElementById("inputPassword").value = "";
}

const tombol = document.getElementById("btn");
tombol.addEventListener("click", kirim)