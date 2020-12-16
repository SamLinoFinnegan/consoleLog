let cont = 0
const array = [
    { name: "N. Armstrong ", profession: " spacecowboy ", age: 89 },
    { name: "H. de Haan ", profession: " kippen hypnotiseur ", age: 59 },
    { name: "A. Curry ", profession: " kikvorsman ", age: 32 },
    { name: "F. Vonk ", profession: " slangenmelker ", age: 36 },
    { name: "B. Bunny ", profession: " konijnen uitlaatservice ", age: 27 },
    { name: "Dr.Evil ", profession: " digital overlord ", age: 56 }
];

for (let person of array) {
    //console.log(array)
    //console.log(person.name)
    //console.log(person.profession)
    //console.log(person.age)
    //console.log("This is his name " + person.name)
    //console.log("This is the whole person: " + person.name + person.profession + person.age)
    //console.log(person.age - 2020)
    //console.log(person.name + person.profession)
    if (person.age >= 50) {
        console.log(person.name + "You are old!!")
        cont += 1

    }

}
console.log("There are " + cont + "people that are over 50")
