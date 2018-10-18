let House = {
   flats: [
       {
            area: 12,
            number: 1, 
            people: [
                {
                    name: 'Vlad',
                    age: 18
                },
                {
                    name: 'Pasha',
                    age: 18
                },
                {
                    name: 'Alex',
                    age: 18
                }


            ]
       },
        {
            area: 20,
            number: 2, 
            people: [
                {
                    name: 'Ann',
                    age: 24
                },
                {
                    name: 'George',
                    age: 16
                }

            ]
    },
        {
            area: 24,
            number: 3, 
            people: [
                {
                    name: 'Paul',
                    age: 16
                },
                {
                    name: 'Wass',
                    age: 40
                }

            ]
        },
        {
            area: 30,
            number: 4, 
            people: [
                {
                    name: 'Julia',
                    age: 15
                },
                {
                    name: 'Alla',
                    age: 33
                },
                {
                    name: 'Gena',
                    age: 34
                }
                ]
        }

   ],
    addOrRemovePerson: function(numb, element) { 
    if (typeof element === 'object') { 
    const res = House.flats.find(flat => flat.number === numb).people.push(element); 
    } 
    if (typeof element === 'string') { 
    let res = House.flats.find(flat => flat.number === numb); 
    res.people = res.people.filter(person => person.name !== element) 
    }
    },
    removePeople: function(numb) {
        const res = this.flats.forEach(flat => {
          if(flat.number === numb) flat.people.splice(0, flat.people.length);
        })
      },
    service: function(money) {
        const allArea = this.flats.reduce((prew, acc) => prew + acc.area, 0);
        const flatMoney = this.flats.filter(flat => flat.people.length > 0 && flat.people.some(person => person.age >= 18))
        if(this.flats.length != flatMoney.length) {
          var remind = this.flats.filter(flat => flat.people.length === 0 || flat.people.every(person => person.age < 18))
                                 .reduce((p, c) => p + c.area, 0);
          const otherArea = Math.round(remind / flatMoney.length);
          console.log(flatMoney.length);
          console.log(otherArea);
        }
        const flatMoney1 = flatMoney.forEach(flat => {
                                      flat.m = Math.round((flat.area + remind)*money/allArea);
                                      flat.people = flat.people.filter(person => person.age >= 18);
                                      const mForPerson = Math.round(flat.m / flat.people.length);
                                      flat.people.forEach(person => person.moneyy = mForPerson); 
                                    })
        return flatMoney;
      }
}
console.log(House);
var ob={
    name:'Sasha',
    age:13
}
House.addOrRemovePerson(3, ob);
House.addOrRemovePerson(3, 'Wass');
House.removePeople(2);
console.log(House);
console.log(House.service(1500));