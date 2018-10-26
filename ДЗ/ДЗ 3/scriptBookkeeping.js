let Company = {
    employees:[
        {
        name:'Alex',
        age:17,
        salary:320,
        department:'Cleaning',
        experience:13*12,
        print:function(){
            console.log(`${this.name}-${this.salary}`);
        }
    },
    {
    name:'VItaly',
    age:18,
    salary:3220,
    department:'Director',
    experience:20*12,
    print:function(){
        console.log(`${this.name}-${this.salary}`);
    }
},
    {
    name:'Vlad',
    age:20,
    salary:420,
    department:'Security',
    experience:11*12,
    print:function(){
        console.log(`${this.name}-${this.salary}`);
    }
},
{
    name:'Ann',
    age:22,
    salary:500,
    department:'Cleaning',
    experience:13*12,
    print:function(){
        console.log(`${this.name}-${this.salary}`);
    }
}
],
printAll:function(){
    for(let i in this.employees){
        this.employees[i].print();
    }
},
addEmployee: function(name, age, salary, department, experience){
    this.employees.push({name, age, salary, department, experience, print:function(){
            console.log(`${this.name}-${this.salary}`);
        }
    })
},
removeEmployee: function(name){
    for(let i in this.employees){
        if(this.employees[i].name==name){
            delete this.employees[i];
        }
    }
},
minMaxAvgSalary: function(){
    let max = this.employees[0];
    let min = this.employees[0];
    let avg = 0;
    for(let i in this.employees){
        max = (this.employees[i].salary > max.salary) ? this.employees[i] : max;
        min = (this.employees[i].salary < min.salary) ? this.employees[i] : min;
        avg += this.employees[i].salary;
    }
    console.log(`max salary `);
    max.print();
    console.log(`min salary`);
    min.print()
    console.log(`avg salary ${avg / this.employees.length}`);
    }
}
Company.printAll();
console.log('===========');
Company.addEmployee('Paul', 21, 1500, 'Developer', 5*12);
Company.printAll();
console.log('===========');
Company.removeEmployee('Vlad');
Company.printAll();
console.log('===========');
Company.minMaxAvgSalary();
