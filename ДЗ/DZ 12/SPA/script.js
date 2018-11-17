const Routes = {
	"#main": {
		path:"main.html"
	},
	"#clock": {
		path: "clock.html",
		handler: function(){
			function dotsON(){
				document.getElementById('dots1').style.opacity = '1';
				document.getElementById('dots2').style.opacity = '1';
			}
			
			function clock(){
				var currentTime = new Date();
				var hours = currentTime.getHours();
				var minutes = currentTime.getMinutes();
				var seconds = currentTime.getSeconds();
				document.getElementById('hours').innerHTML = (hours > 9) ? hours : '0' + hours;
				document.getElementById('minutes').innerHTML = (minutes > 9) ? minutes : '0' + minutes;
				document.getElementById('seconds').innerHTML = (seconds > 9) ? seconds : '0' + seconds;
				// document.getElementById('dots1').style.opacity = '0';
				// document.getElementById('dots2').style.opacity = '0';
				// dots = setTimeout(dotsON, 100);
			}
			
			function startClock(){
				clock();
				clock = setInterval(clock, 1000);
			}
			startClock();
		}
	},
	"#currencyConverter": {
		path: "currencyConverter.html",
		handler: function(){
			const inputHTML = document.getElementById('input');
const outputHTML = document.getElementById('output');
let output;

const currencies = ['EUR', 'USD', 'BLN'];

let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');

let currency1 = 'EUR';
let currency2 = 'EUR';

const exchangeRatesEURtoUSD = 1.14;
const exchangeRatesEURtoBLN = 2.41;
const exchangeRatesUSDtoBLN = 2.11;

select1.addEventListener('change', function(){
    currency1 = select1.value;
    switch(currency1){
        case 'USD':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'EUR':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value * exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'BLN':
            switch(currency2){
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value / exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'BLN':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
            default:
                outputHTML.innerText = 'error';
                break;
    }
})

select2.addEventListener('change', function(){
    currency2 = select2.value;
    switch(currency1){
        case 'USD':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'EUR':
            switch(currency2){
                case 'BLN':
                        output = (document.getElementById('input').value * exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value * exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'EUR':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
        case 'BLN':
            switch(currency2){
                case 'EUR':
                        output = (document.getElementById('input').value / exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'USD':
                        output = (document.getElementById('input').value / exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    break;
                case 'BLN':
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    break;
            }
            break;
            default:
                outputHTML.innerText = 'error';
                break;
    }
})

inputHTML.addEventListener('click', function(){
    switch(currency1){
        case 'USD':
            switch(currency2){
                case 'BLN':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value * exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'EUR':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value / exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'USD':
                    inputHTML.addEventListener('input', function(){
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    });
                    break;
            }
            break;
        case 'EUR':
            switch(currency2){
                case 'BLN':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value * exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'USD':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value * exchangeRatesEURtoUSD).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'EUR':
                    inputHTML.addEventListener('input', function(){
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    });
                    break;
            }
            break;
        case 'BLN':
            switch(currency2){
                case 'EUR':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value / exchangeRatesEURtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'USD':
                    inputHTML.addEventListener('input', function(){
                        output = (document.getElementById('input').value / exchangeRatesUSDtoBLN).toFixed(2);
                        outputHTML.innerText = output;
                    });
                    break;
                case 'BLN':
                    inputHTML.addEventListener('input', function(){
                        output = document.getElementById('input').value;
                        outputHTML.innerText = output;
                    });
                    break;
            }
            break;
            default:
                outputHTML.innerText = 'error';
                break;
    }
})
		}
	},
	"#picture": {
		path: "picture.html"
	},
	"#mouseOverTable": {
		path: "mouseOverTable.html",
		handler: function(){
			const n = prompt('Enter n');

			const tbody = document.querySelector('tbody');
			const createTable = (data, n) => {
			for (let i = 0; i < n; i++) {
				const tr = document.createElement('tr');
				tbody.appendChild(tr);
				for (let j = 0; j < n; j++) {
				const td = document.createElement('td');
				tr.appendChild(td);
				td.innerHTML = data;
				td.addEventListener('mouseover', function() {
					this.classList.add('red');
				});
				td.addEventListener('mouseout', function() {
					const timer = setTimeout(function() {
					td.classList.remove('red');
					}, 2000);
				})
				}
			}
			}
			createTable("", n);
		}
	}
}

function refreshContainer(){
	const hash = location.hash; 
	if( hash in Routes){
		const path = Routes[hash].path;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', path, true);
		xhr.onload = function(){
			onPageLoaded(this.responseText, hash);
		}
		xhr.send(null)
	}
}

function onPageLoaded(text,hash){
	const div = document.getElementById('container');
	div.innerHTML = text;
	if(typeof Routes[hash].handler=="function"){  
		Routes[hash].handler();
	}
}

window.onhashchange = refreshContainer; 
refreshContainer();  