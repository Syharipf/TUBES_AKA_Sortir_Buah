// ===============================
// AMBIL ELEMEN
// ===============================
const ctx = document.getElementById("runtimeChart");
const runtimeInfo = document.getElementById("runtimeInfo");
const chartContainer = document.getElementById("chartContainer");

// ===============================
// INIT CHART
// ===============================
const runtimeChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Merge Sort Iteratif",
        data: [],
        borderWidth: 2
      },
      {
        label: "Merge Sort Rekursif",
        data: [],
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Jumlah Data"
        }
      },
      y: {
        title: {
          display: true,
          text: "Waktu Eksekusi (ms)"
        }
      }
    }
  }
});

// ===============================
// AMBIL DATA USER
// ===============================
const dataBuah = JSON.parse(localStorage.getItem("dataBuah")) || [];

// ===============================
// CEK ADA DATA ATAU TIDAK
// ===============================
if (dataBuah.length === 0) {
  runtimeInfo.innerHTML =
    "Silakan input data buah terlebih dahulu di halaman Entry.";
} else {
  chartContainer.style.display = "block";
  jalankanAnalisisUser();
}

// ===============================
// ANALISIS BERDASARKAN INPUT USER
// ===============================
function jalankanAnalisisUser() {
  const n = dataBuah.length;

  // Merge Sort Iteratif
  let t0 = performance.now();
  mergeSortIteratif([...dataBuah]);
  let runtimeIter = performance.now() - t0;

  // Merge Sort Rekursif
  t0 = performance.now();
  mergeSortRekursif([...dataBuah]);
  let runtimeRek = performance.now() - t0;

  // Update Grafik
  runtimeChart.data.labels = [n];
  runtimeChart.data.datasets[0].data = [runtimeIter.toFixed(3)];
  runtimeChart.data.datasets[1].data = [runtimeRek.toFixed(3)];
  runtimeChart.update();

  // Update Info
  runtimeInfo.innerHTML = `
    <strong>Jumlah Data:</strong> ${n}<br>
    <strong>Merge Sort Iteratif:</strong> ${runtimeIter.toFixed(3)} ms<br>
    <strong>Merge Sort Rekursif:</strong> ${runtimeRek.toFixed(3)} ms
  `;
}
