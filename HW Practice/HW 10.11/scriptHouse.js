let House = {
   flat: [
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
            area: 12,
            number: 2, 
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
            area: 12,
            number: 2, 
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
    removePeople: function(number){
        this.flat.forEach(el => {
            if(flat.number==number) 
                el.people.splice(0, el.people.lenght);
        }
        )
    },
    service: function(price){
        let overallArea = this.flat.area.reduce((p, c) => p + c, 0);
        const priceFlat = new Array;
        this.flat.area.forEach(el => {
            priceFlat.push((el.area * price)/overllArea)
        })
         
    }
}