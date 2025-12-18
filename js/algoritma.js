// Hitung total harga satu item
function hitungHarga(item) {
  return hargaBuah[item.buah] * item.berat;
}

// Fungsi merge (inti Merge Sort)
function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (hitungHarga(left[i]) <= hitungHarga(right[j])) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Merge Sort Rekursif
function mergeSortRekursif(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  return merge(
    mergeSortRekursif(arr.slice(0, mid)),
    mergeSortRekursif(arr.slice(mid))
  );
}

// Merge Sort Iteratif
function mergeSortIteratif(arr) {
  let step = 1;
  let result = [...arr];

  while (step < result.length) {
    let temp = [];
    for (let i = 0; i < result.length; i += step * 2) {
      temp = temp.concat(
        merge(
          result.slice(i, i + step),
          result.slice(i + step, i + step * 2)
        )
      );
    }
    result = temp;
    step *= 2;
  }
  return result;
}
