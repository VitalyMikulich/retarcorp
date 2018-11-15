const xhr = new XMLHttpRequest();
xhr.open('GET', "data.txt", true);
xhr.onload = function() {
  const arrCsv = this.responseText.split('\n')
                                  .map(el => el.trim());

  const arr = arrCsv.map(el => el.split(', '))
                    .map(el => {
                      return {
                        NameRus: el[0],
                        NameEng: el[1],
                        Language: el[2],
                        Populatuon: el[3],
                        Area: el[4],
                        Capital: el[5],
                        Timezone: el[6],
                        Income: el[7]
                      }
                    });
  console.log(arr);

  arr.sort((a, b) => b.populatuon - a.populatuon);

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const keys = Object.keys(arr[0]);
  console.log(keys);

  for (let y = 0; y <= arrCsv.length;) {
    let newRow = table.insertRow(y);
    for (let x = 0; x < keys.length; x++) {
      let newCell = newRow.insertCell(x);
      newCell.className = "color1";
      if(y === 0 && x >= 0) {
        newCell.innerText = keys[x];
        newCell.className = "color2";
      }
      if (x === 0 && y !== 0) {
        newCell.innerHTML = arr[y - 1].NameRus;
      }
      if (x === 1 && y !== 0) {
        newCell.innerHTML = arr[y - 1].NameEng;
      }
      if (x === 2 && y !== 0) {
        newCell.innerHTML = arr[y - 1].Language;
      }
      if (x === 3 && y !== 0) {
        newCell.innerHTML = arr[y - 1].Populatuon;
      }
      if (x === 4 && y !== 0) {
        newCell.innerHTML = arr[y - 1].Area;
      }
      if (x === 5 && y !== 0) {
        newCell.innerHTML = arr[y - 1].Capital;
      }
      if (x === 6 && y !== 0) {
        newCell.innerHTML = arr[y - 1].Timezone;
      }
      if (x === 7 && y !== 0) {
        newCell.innerHTML = arr[y - 1].Income;
      }
    }
    y++;
  }
  document.body.appendChild(table);
}
xhr.send(null);