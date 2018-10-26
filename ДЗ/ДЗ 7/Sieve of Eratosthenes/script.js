window.onload = function() {
  const N = Number(prompt('Enter qauntity of numbers'));

  const table = document.createElement('table');
  const tBody = document.createElement('tbody');
  table.appendChild(tBody);
  let elem = 2;
  for (let y = 0; y < N / 10; y++) {
    let newRow = table.insertRow(y);
    for (let x = 0; x < 10; x++) {
      if(elem > N) break;
      let newCell = newRow.insertCell(x);
      if(y === 0 && x === 0) {
        newCell.innerText = " ";
      }
      else {
        newCell.innerText = elem++;
      }
    }
  }
  this.document.body.appendChild(table);

  
  let p = 2;
  const arr2 = document.getElementsByTagName('td');
  let td = arr2[1];
    const interval = setTimeout(func = () => {
      let i = 0;
      td.className = "current";
      const redClassInterval = setInterval(() => {
        if(Number(arr2[i].innerText) % p === 0 && Number(arr2[i].innerText) !== p) {
          arr2[i].className = "prime";
        }
        i += 1;
        if(i > N - 1) clearInterval(redClassInterval);
      }, 10);
      const primeTimeout = setTimeout(() => {
        const prime = [].find.call(arr2, td => td.className !== 'prime' && Number(td.innerText) !== p && td.innerText > p);
        td.className = "";
        td = prime;
        td.className = 'current';
        p = Number(prime.innerText);
        console.log(p);
        if(p * p <= N) setTimeout(func, 1000);
      }, N * 15);
    }, 1000);
}