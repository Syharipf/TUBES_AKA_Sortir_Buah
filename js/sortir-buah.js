document.addEventListener("DOMContentLoaded", () => {
  const hargaBuah = {
    jeruk: 25000,
    apel: 30000,
    pisang: 20000,
    mangga: 28000,
    anggur: 45000,
    semangka: 15000,
    melon: 18000,
    pepaya: 17000,
    pir: 26000,
    nanas: 22000
  };

  const buahSelect = document.getElementById("buah");
  const beratSelect = document.getElementById("berat");
  const jumlahInput = document.getElementById("jumlah");
  const hasilBox = document.getElementById("hasil");
  const tombolHitung = document.getElementById("hitungBtn");
  const tombolReset = document.getElementById("resetBtn");

  // Hitung harga
  tombolHitung.addEventListener("click", () => {
    const buah = buahSelect.value;
    const berat = parseFloat(beratSelect.value);
    const jumlah = parseInt(jumlahInput.value);

    if (!buah || !berat || !jumlah || jumlah <= 0) {
      hasilBox.textContent = "Lengkapi pilihan buah, berat, dan jumlah!";
      hasilBox.style.background = "#ffebee";
      hasilBox.style.color = "#c62828";
      hasilBox.style.border = "1px solid #ef9a9a";
      return;
    }

    const hargaPerKg = hargaBuah[buah];
    const total = hargaPerKg * berat * jumlah;

    hasilBox.style.background = "#e8f5e9";
    hasilBox.style.color = "#2E7D32";
    hasilBox.style.border = "1px solid #c8e6c9";
    hasilBox.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  });

  // Reset form
  tombolReset.addEventListener("click", () => {
    buahSelect.value = "";
    beratSelect.value = "";
    jumlahInput.value = "";
    hasilBox.textContent = "";
    hasilBox.style.background = "#e8f5e9";
    hasilBox.style.color = "#2E7D32";
    hasilBox.style.border = "1px solid #c8e6c9";
  });
});
