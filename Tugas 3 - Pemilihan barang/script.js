let apel = document.getElementById("btn-apple");
let grape = document.getElementById("btn-grape");
let orange = document.getElementById("btn-orange");

function apple(){
    // styling alert menggunakan SweetAlert
    swal({
        title: "Apel",
        text: "Terima kasih sudah membeli produk kami",
        icon: "success",
      });
}

function anggur(){
    swal({
        title: "Anggur",
        text: "Stock saat ini kosong",
        icon: "info",
      });
}

function jeruk(){
    swal({
        title: "Jeruk",
        text: "Produk ini hanya menerima pemesanan borongan",
        icon: "warning",
      });
}

apel.addEventListener("click",apple)
grape.addEventListener("click",anggur)
orange.addEventListener("click",jeruk)