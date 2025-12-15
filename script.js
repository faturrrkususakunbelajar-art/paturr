document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const productForm = document.getElementById('product-form');
    const logoutButton = document.getElementById('logout-button');
    const loginPage = document.getElementById('login-page');
    const mainPage = document.getElementById('main-page');
    const productList = document.getElementById('product-list');

    // --- Logika Login ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulasi validasi login (Ganti dengan AJAX/fetch ke server di implementasi nyata)
        if (username === 'admin' && password === '12345') {
            alert('Login Berhasil!');
            loginPage.classList.remove('active');
            mainPage.classList.add('active');
            document.title = 'Digital Marketing Starter - Dashboard';
        } else {
            alert('Nama Pengguna atau Kata Sandi Salah!');
        }
    });

    // --- Logika Logout ---
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        mainPage.classList.remove('active');
        loginPage.classList.add('active');
        document.title = 'Digital Marketing Starter - Login';
        // Di implementasi nyata, lakukan penghapusan token sesi di sini
    });

    // --- Logika Unggah Produk ---
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productDesc = document.getElementById('product-desc').value;
        const productImageFile = document.getElementById('product-image').files[0];

        if (!productImageFile) {
            alert('Silakan pilih gambar produk.');
            return;
        }

        // Baca file gambar sebagai URL Data untuk ditampilkan di frontend
        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;

            // Buat elemen HTML untuk menampilkan produk
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            
            productCard.innerHTML = `
                <img src="${imageUrl}" alt="${productName}">
                <div class="product-info">
                    <h4>${productName}</h4>
                    <p>${productDesc.substring(0, 50)}...</p>
                </div>
            `;
            
            // Tambahkan kartu produk ke daftar
            productList.prepend(productCard); // prepend agar produk terbaru muncul di atas

            // Reset formulir
            productForm.reset();
            alert(`Produk "${productName}" berhasil diunggah (simulasi).`);
        };
        
        // Membaca file
        reader.readAsDataURL(productImageFile);

        // Di implementasi nyata, Anda akan mengirim data (termasuk file gambar) ke server
        // menggunakan fetch atau XMLHttpRequest di sini.
    });

});
