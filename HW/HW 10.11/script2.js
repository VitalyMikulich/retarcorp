const arr = [5, 1, 10, 8];


function Meddian(arr) {
  const med = arr.sort((a, b) => a - b);
  if(arr.length % 2 != 0) {
    console.log(mid[Math.floor(mid.length / 2)]);
  }
  else {
    const a = mid[mid.length / 2 - 1];
    const b = mid[mid.length / 2];
    console.log(Math.round((a + b) / 2));
  }
}

Meddian(arr);
