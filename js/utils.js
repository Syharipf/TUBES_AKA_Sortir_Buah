// Mengubah huruf pertama menjadi kapital (untuk tampilan UI)
function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Membuat data pesanan dalam jumlah besar untuk pengujian algoritma
function generatePesanan(n) {
  const buahList = Object.keys(hargaBuah);
  const data = [];

  for (let i = 0; i < n; i++) {
    data.push({
      buah: buahList[i % buahList.length],
      berat: Math.random() * 2 + 0.1 // berat 0.1 – 2.1 kg
    });
  }

  return data;
}

// Membuat data pesanan dengan buah yang sama (untuk uji terkontrol)
function generatePesananSpesifik(buah, n) {
  const data = [];

  for (let i = 0; i < n; i++) {
    data.push({
      buah,
      berat: Math.random() * 2 + 0.1
    });
  }

  return data;
}

// Menyalin array pesanan agar tidak mengubah data asli
function clonePesanan(data) {
  return data.map(item => ({ ...item }));
}

// Menghitung total harga dari array pesanan
function hitungTotalHarga(pesanan) {
  return pesanan.reduce(
    (total, item) => total + hargaBuah[item.buah] * item.berat,
    0
  );
}
