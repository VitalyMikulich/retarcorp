let str = prompt('Enter str');
let a=0;
let p=0;
for(let i=0; i<str.length; i++){
    if(str[i]==')'){
        for(a; a<i; a++){
            if(str[a]=='(') {
                a++; 
                break;
            }
        }
        if(a==i) {
            p++;
            alert("Invalide");
            break;
        }
    }
}
if(p==0){
    alert("Valide");
}