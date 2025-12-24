// =========================
// HELPER
// =========================
function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function capitalize(teks) {
  return teks.charAt(0).toUpperCase() + teks.slice(1);
}

function totalHarga(item) {
  return hargaBuah[item.buah] * item.berat;
}

// =========================
// AMBIL DATA DARI STORAGE
// =========================
const dataBuah = JSON.parse(localStorage.getItem("dataBuah")) || [];

// =========================
// AMBIL ELEMENT
// =========================
const hasilSortingEl = document.getElementById("hasilSorting");
const rakMurahEl = document.getElementById("rakMurah");
const rakSedangEl = document.getElementById("rakSedang");
const rakMahalEl = document.getElementById("rakMahal");

// =========================
// SORTING (MERGE SORT REKURSIF)
// =========================
function merge(left, right) {
  let res = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (totalHarga(left[i]) <= totalHarga(right[j])) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
  );
}

// =========================
// RENDER TABEL KIRI (TOTAL)
// =========================
function renderTabel(data) {
  hasilSortingEl.innerHTML = "";

  if (data.length === 0) {
    hasilSortingEl.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;color:#777;">
          Tidak ada data
        </td>
      </tr>`;
    return;
  }

  data.forEach((item, i) => {
    const hargaKg = hargaBuah[item.buah];
    const total = totalHarga(item);

    hasilSortingEl.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${capitalize(item.buah)}</td>
        <td>${item.berat.toFixed(2)}</td>
        <td>${formatRupiah(hargaKg)}</td>
        <td>${formatRupiah(total)}</td>
      </tr>`;
  });
}

// =========================
// RENDER RAK (HARGA / KG)
// =========================
function renderRak(data) {
  rakMurahEl.innerHTML = "";
  rakSedangEl.innerHTML = "";
  rakMahalEl.innerHTML = "";

  data.forEach(item => {
    const hargaKg = hargaBuah[item.buah];
    const li = `
      <li>
        ${capitalize(item.buah)}
        (${item.berat.toFixed(2)} kg) –
        ${formatRupiah(hargaKg)} / kg
      </li>`;

    if (hargaKg <= 20000) {
      rakMurahEl.innerHTML += li;
    } else if (hargaKg <= 35000) {
      rakSedangEl.innerHTML += li;
    } else {
      rakMahalEl.innerHTML += li;
    }
  });

  if (!rakMurahEl.innerHTML) rakMurahEl.innerHTML = "<li>Kosong</li>";
  if (!rakSedangEl.innerHTML) rakSedangEl.innerHTML = "<li>Kosong</li>";
  if (!rakMahalEl.innerHTML) rakMahalEl.innerHTML = "<li>Kosong</li>";
}

// =========================
// INIT
// =========================
const sorted = mergeSort([...dataBuah]);
renderTabel(sorted);
renderRak(sorted);
