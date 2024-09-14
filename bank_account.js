class BankAccount {
    constructor(jumlahSaldo) {
        this.saldo = jumlahSaldo;
    }

    getSaldo() { // Method untuk mengembalikan nilai saldo
        return this.saldo;
    }

    setSaldo(newSaldo) { // Method untuk memperbarui nilai saldo
        this.saldo = newSaldo;
    }
}

function tampilkanSaldo(bankAccount) { // Function untuk menampilkan nilai saldo
    document.getElementById("saldo").innerText = bankAccount.getSaldo();
}

function kurangiSaldo(bankAccount, nominal) { // Function untuk mengurangi nilai saldo
    if(nominal > bankAccount.getSaldo()) {
        window.alert("Saldo tidak cukup"); // Untuk menampilkan alert jika nominal yang dimasukkan lebih besar daripada jumlah saldo
    } else {
        // Mengurangi jumlah saldo berdasarkan nominal yang dimasukkan
        bankAccount.setSaldo(bankAccount.getSaldo() - nominal);
        tampilkanSaldo(bankAccount);
    }
}

function tambahSaldo(bankAccount, nominal) { // Function untuk menambah nilai saldo
    bankAccount.setSaldo(bankAccount.getSaldo() + nominal);
    tampilkanSaldo(bankAccount);
}

let bankAccount = new BankAccount(5000); // Menentukan nilai awal saldo
tampilkanSaldo(bankAccount);

document.getElementById("kurangiSaldo").onclick = function() { 
    let promptKurang = parseInt(window.prompt("Masukkan nominal yang ingin anda kurangi"));
    kurangiSaldo(bankAccount, promptKurang);
}

document.getElementById("tambahSaldo").onclick = function() {
    let promptTambah = parseInt(window.prompt("Masukkan nominal yang akan ditambahkan"));
    tambahSaldo(bankAccount, promptTambah);
}