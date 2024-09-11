let saldo = 5000;

document.getElementById("saldo").innerText = saldo;

document.getElementById("kurang").onclick = function() { // Fungsi untuk mengurangi saldo
    let promptKurang = window.prompt("Masukkan nominal yang ingin anda kurangi");

    if(promptKurang > saldo) {
        window.alert("Saldo tidak cukup"); // Untuk menampilkan alert jika nominal yang dimasukkan lebih besar daripada jumlah saldo
    } else {
        saldo -= parseInt(promptKurang);
        document.getElementById("saldo").innerText = saldo;
    }
}

document.getElementById("tambah").onclick = function() { // Fungsi untuk menambah saldo
    let promptTambah = window.prompt("Masukkan nominal yang akan ditambahkan");

    saldo += parseInt(promptTambah);
    document.getElementById("saldo").innerText = saldo;
}