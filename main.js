document.querySelectorAll('.btnDetail').forEach(item => {
  item.addEventListener('click', (e) => {
      // Menemukan elemen induk dari tombol yang diklik
      let parent = e.target.closest('.card');
      
      // Mendapatkan informasi dari elemen terkait
      let gambar = parent.querySelector('.card-img-top').src;
      let harga = parent.querySelector('.harga').textContent.trim(); 
      let menu = parent.querySelector('.card-text').textContent.trim();
      let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerHTML : '<i>tidak ada informasi yang tersedia</i>';

      // Memicu modal
      let tombolModal = document.querySelector('.btnModal');
      tombolModal.click();

      // Mengisi konten modal dengan data yang diambil
      document.querySelector('.modalTitle').textContent = menu;

      let image = document.createElement('img');
      image.src = gambar; 
      image.classList.add('w-100');
      document.querySelector('.modalImage').innerHTML = "";
      document.querySelector('.modalImage').appendChild(image);

      document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
      document.querySelector('.modalHarga').textContent = harga;

      // Tautan Whatsapp
      const nohp = '6281214038484';
      let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo kak, Apakah produk ${menu} masih tersedia?`;
      document.querySelector('.btnBeli').href = pesan;

      // Tautan Instagram
      const igUsername = 'nuktavpastry';
      const igLink = `https://www.instagram.com/${igUsername}`;
      document.querySelector('.btnInstagram').href = igLink;
  });
});