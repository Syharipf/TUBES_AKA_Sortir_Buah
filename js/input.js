// =========================
// STATE
// =========================
let dataBuah = JSON.parse(localStorage.getItem("dataBuah")) || [];

// =========================
// AMBIL ELEMENT
// =========================
const buahEl = document.getElementById("buah");
const beratEl = document.getElementById("berat");
const listEl = document.getElementById("listEntry");

const tambahBtn = document.getElementById("tambahBtn");
const resetBtn = document.getElementById("resetBtn");

// =========================
// RENDER
// =========================
function render() {
  listEl.innerHTML = "";

  if (dataBuah.length === 0) {
    listEl.innerHTML = `
      <tr>
        <td colspan="4" style="text-align:center;color:#777;">
          Belum ada data
        </td>
      </tr>
    `;
    return;
  }

  dataBuah.forEach((item, i) => {
    listEl.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${item.buah}</td>
        <td>${item.berat.toFixed(2)}</td>
        <td>
          <button class="btn danger" onclick="hapusData(${i})">
            Hapus
          </button>
        </td>
      </tr>
    `;
  });

  localStorage.setItem("dataBuah", JSON.stringify(dataBuah));
}

// =========================
// EVENT
// =========================
tambahBtn.addEventListener("click", () => {
  if (!buahEl.value || beratEl.value <= 0) return;

  dataBuah.push({
    buah: buahEl.value,
    berat: parseFloat(beratEl.value)
  });

  buahEl.value = "";
  beratEl.value = "";

  render();
});

resetBtn.addEventListener("click", () => {
  if (!confirm("Yakin ingin menghapus semua data?")) return;

  dataBuah = [];
  localStorage.removeItem("dataBuah");
  render();
});

// =========================
// HAPUS PER BARIS
// =========================
function hapusData(index) {
  dataBuah.splice(index, 1);
  render();
}

// =========================
// INIT
// =========================
render();
