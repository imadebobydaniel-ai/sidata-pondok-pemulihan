// ATUR USERNAME DAN PASSWORD DI SINI
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "papua2026";

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const loginOverlay = document.getElementById("login-overlay");

    // Cek apakah user sudah login sebelumnya (menggunakan sessionStorage)
    if (sessionStorage.getItem("isLoggedIn") === "true") {
        loginOverlay.classList.add("hidden");
    }

    // Fungsi Handle Login
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputUser = document.getElementById("username_input").value;
        const inputPass = document.getElementById("password_input").value;

        if (inputUser === ADMIN_USERNAME && inputPass === ADMIN_PASSWORD) {
            alert("Login Berhasil! Selamat Datang.");
            
            // Simpan status login
            sessionStorage.setItem("isLoggedIn", "true");
            
            // Sembunyikan overlay login
            loginOverlay.classList.add("hidden");
        } else {
            alert("Username atau Password Salah! Silakan coba lagi.");
        }
    });
});

// Fungsi Logout
function prosesLogout() {
    if (confirm("Apakah Anda yakin ingin keluar?")) {
        sessionStorage.removeItem("isLoggedIn");
        window.location.reload(); // Refresh halaman untuk memunculkan kembali form login
    }
}
