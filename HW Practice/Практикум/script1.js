const str = "mr.wital1999@gmail.com, vital1999m@mail.ru, +375298250595,   qwerty@mail.ru, Vitaly, iooplk@yandex.com";
const expr = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;
const emails = str.split(', ')
               .map(el => el.trim())
               .filter(el => (el.match(expr) != null));
console.log(emails);
const operators = [];
emails.forEach(email => {
    let operator = email.split('@')[1];
    if(email.indexOf(operator) != -1 && operators.some(el => el===operator)==0){
        operators.push(operator);
    }

});
console.log(operators);
const oper = operators.map(op => {
    return{
        name: op,
        amount: emails.reduce((p, c) => c.indexOf(op) != -1 ? p+1 : p, 0)
    };
}).sort((a, b) => a.amount - b.amount);
console.log(oper);

const avgMinMax = oper.map(op => {
    const emailsWithOp = emails.filter(email => email.indexOf(op.name) != -1)
                               .sort((a, b) => a.length - b.length);
    const avg = emailsWithOp.reduce((p, c)=> p + c.length, 0)/emailsWithOp.length;
    return {
        name: op.name,
        amount: op.amount,
        max: emailsWithOp[emailsWithOp.length - 1],
        min: emailsWithOp[0],
        avg: avg
    }
})
console.log(avgMinMax);

const allMinMax = emails.sort((a, b) => a.length - b.length);
console.log(`Min addres - ${allMinMax[0]}\nMax addres - ${allMinMax[allMinMax.length - 1]}`);


const logins = [];
emails.forEach(email => {
    let login = email.split('@')[0];
    if(email.indexOf(login) != -1 && logins.some(el => el===login)==0){
        logins.push(login);
    }
});
console.log(logins);


const letters = logins.map(login => login.split(''));
console.log(letters);

const amountLetters = [];
letters.forEach(arr => {
    const al = [];
    arr.forEach(lett=>{
        if(arr.indexOf(lett) != -1 && al.some(el => el===lett)==0){
            al.push(lett);
        }
    })
    amountLetters.push(al);
})

// const operators = [];
// emails.forEach(email => {
//     let operator = email.split('@')[1];
//     if(email.indexOf(operator) != -1 && operators.some(el => el===operator)==0){
//         operators.push(operator);
//     }

// });
var c = 0;var count;
console.log(amountLetters);
amountLetters.forEach(arr => {
    arr.forEach(lett => {
    
    letters.forEach(ar => {
        count = 0;
        ar.forEach(el => {

        if(el == lett){
            count++;
        }
    }
    )})
    console.log(`${count} letters "${lett}" in ${logins[c]} `);
})
c++;
})

// const l = amountLetters.map(op => {
//     op.map(el=>{
//     return{
//         name: el,
//         amount: op.reduce((p, c) => c.indexOf(el) != -1 ? p+1 : p, 0)
//     };
// }).sort((a, b) => a.amount - b.amount)});
// console.log(l);