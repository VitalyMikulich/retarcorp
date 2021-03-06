const csv = `Россия, Russia, russian, 170000000, 20000000, Moscow, +3, 20000
Аргентина, Argentina, 	spanish, 43000000, 2000000, Buenos Aires, -3, 3434
Польша, Poland, polish, 10000000, 400000, Warsaw, +2, 5000
Германия, Germany, deutsch, 20000000, 5000000, Berlin, +2, 100000`

function getRandom(a, b) {
    let  ran = Math.random();
    return Math.ceil((b - a)*ran + a);
  }

function Mid(arr) {
  const mid = arr.sort((a, b) => a - b);
  if(arr.length % 2 != 0) {
    return mid[Math.floor(mid.length / 2)];
  }
  else {
    const a = mid[mid.length / 2 - 1];
    const b = mid[mid.length / 2];
    return Math.round((a + b) / 2);
  }
}

const arrCsv = csv.split('\n')
                  .map(el => el.trim())

const arr = arrCsv.map(el => el.split(','))
                  .map(el => {
                    return {
                      nameRus: el[0],
                      nameEng: el[1],
                      language: el[2],
                      populatuon: el[3],
                      area: el[4],
                      capital: el[5],
                      timezone: el[6],
                      income: el[7]
                    }
                  })
console.log(arr);

const populationDensity = [];
arr.forEach(el => {
  let popDen = Math.round(el.populatuon / el.area);
  populationDensity.push(popDen);
})


const maxMinpopulationDensity = populationDensity.sort((a, b) => a - b);
console.log(`Max population density - ${maxMinpopulationDensity[maxMinpopulationDensity.length - 1]}
Min population density - ${maxMinpopulationDensity[0]}`);

const GDP = [];
arr.forEach(el => {
  let gdp = el.income * el.populatuon;
  GDP.push(gdp);
})


const maxMinGDP = GDP.sort((a, b) => a - b);
console.log(`Max population density - ${maxMinGDP[maxMinGDP.length - 1]}
Min population density - ${maxMinGDP[0]}`);

const income = [];
arr.forEach(el => {
  income.push(Number(el.income));
})


const minDeviation = income.map(el => Math.abs(Mid(income) - el))
                           .sort((a, b) => a - b);
console.log(`1-st min - ${minDeviation[0]}\n2-nd min - ${minDeviation[1]}\n3-rd min - ${minDeviation[2]}`);

const enLongerRus = [];
arr.forEach(el => {
  if (el.nameEng.length > el.nameRus.length + 1) {
    enLongerRus.push(el);
  }
})
console.log(enLongerRus);

const languages = [];
arr.forEach(el => {
  if (languages.some(language => language === el.language) == 0){
    languages.push(el.language);
  }
});


const languagesObj = languages.map(language => {
  let countries = [];
  arr.forEach(el => {
    if(el.language === language) {
      countries.push(el.nameEng);
    }
  })
  return {
    name: language,
    countries: countries
  }
});

console.log(languagesObj);


const time = new Set;

while(time.size != 3){
  time.add(arr[getRandom(-1, 3)]);
}
console.log(time);

const timeInCity = time.forEach(el => {
  let offset = Number(el.timezone);
  const calcTime = (city, offset) => {
    let locDate = new Date();
    let utc = locDate.getTime() + (locDate.getTimezoneOffset() * 60000);
    let otherLocDate = new Date(utc + (3600000*offset))
    return `The local time in ${city} is ${otherLocDate.toLocaleString()}`;
  }
  console.log(calcTime(el.capital, offset));
})
