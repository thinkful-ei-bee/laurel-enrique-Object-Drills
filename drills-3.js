const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.flour / this.water) * 100;
    }
}
console.log(loaf);
loaf.hydration();
console.log(loaf.hydration());

const newObj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5,
}

for (var key in newObj){
    console.log(key, newObj[key]);
}

const mealsObject = {
    meals: ['breakfast', 
    'second breakfast', 
    'elevenses', 
    'lunch', 
    'afternoon tea', 
    'dinner', 
    'supper']
}
console.log(mealsObject.meals[3]);

const arr = [
    obj1={
        name: "Margaret",
        jobTitle: "singer",
    },
    obj2={
        name: "Joe",
        jobTitle: "plumber",
    },
    obj3={
        name: "Nick",
        jobTitle: "Uber driver",
    },
    obj4={
        name: "Matthew",
        jobTitle: "Boss",
    }
]
arr.forEach((x) => { return (x.jobTitle !== "Boss") ?  
    (console.log(`${x.jobTitle} ${x.name} reports to ${obj4.name} `)) : (console.log(`${x.jobTitle} ${x.name} doesn't report to anybody`));})

