const words = ['РИСУНОК', 'КВАРТИРА', 'ЧЕРЕПАХА', 'БИНОКЛЬ', 'АНАНАС', 'КИТ', 'МИР', 'ПИРАТ', 'ВОДОЛАЗ', 'МОХ', 'ТЕТРИС', 'ДОМОВОЙ', 'ТЕСТО', 'НЕВОЛЯШКА', 'МАНГО', 'ГИПОТАЛАМУС'];
const wordsHtml = document.getElementById('words');
let wordsStatus = false;
const showWords = document.getElementById('showWords');
showWords.addEventListener('click', function () {
    if (wordsStatus == false) {
        wordsHtml.innerText = words.join(', ');
        wordsStatus = true;
    }
    else {
        wordsHtml.innerText = '';
        wordsStatus = false;
    }
});

let previous = '';

const tds = document.getElementsByTagName('td');
const tbody = document.getElementById('tbody');

let memory = '';
let memoryArr = [];

const check = (word) => {
    if (words.some(el => el === word)) {
        return true;
    }
    else {
        return false;
    }
}


var down = false;

document.addEventListener("mousedown",function(){
    down=true;
})
document.addEventListener("mouseup",function(){
    down=false;
});

[].forEach.call(tds, td => {
    td.addEventListener('mousedown', function(){
        if(td.classList.contains('active') == false && td.classList.contains('true') == false){
            if(Number(td.id) == Number(previous) + 1 || Number(td.id) == Number(previous) - 1 || Number(td.id) == Number(previous) + 10 || Number(td.id) == Number(previous) - 10 || previous == ''){
                td.classList.add('active')
                memoryArr.push(td);
                console.log(memoryArr);
                memory += td.innerHTML;
                console.log(memory);
                previous = td.id;
            
            } 
        } 
    });

    td.addEventListener('mouseenter',function(){
        if(td.classList.contains('active') == false && td.classList.contains('true') == false){
        if(down){
            td.classList.add('active');
            memoryArr.push(td);
            console.log(memoryArr)
            memory+=td.innerHTML;
            console.log(memory)
            
        }
    }
    })

var trueCells=[];
    td.addEventListener('mouseup',function(){
        console.log(check(memory));
    switch (check(memory)) {
        case true:
            [].forEach.call(memoryArr, el => {
                el.classList.add('true');
            });

            break;
        case false:
            [].forEach.call(memoryArr, el => {
                el.classList.remove('active');
            });
            break;
    }
    win();
    memory = '';
    memoryArr = [];
    previous = '';

    })
});

const win = () => {
    const checkWin = [].every.call(tds, td => {
        return td.classList.contains('true');
    });
    console.log(checkWin);
    if (checkWin == true) {
        let message = confirm('You win! Play again?')
        message ? location.reload() : 0;
    }
};