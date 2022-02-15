const people = [
    {
        name: "Bob",
        age: 20,
        position: "Developer",
    },
    {
         name: "anna",
         age: 25,
         position: "designer",
    },
    {
        name: "susy",
        age: 30,
        position: "the boss", 
    },
];

// Map returns a new array
// does not change the size of the original array (unlike filter)
// uses values from original array when making new one

const ages = people.map((person)=>person.age * 2);
console.log(ages);

//const getAges = (person) => person.age*2;
//const ages = people.map(getAges); 

const newPeople = people.map((item)=>{
    return {
        firstName: item.name.toUpperCase(),
        newAge:item.age + 10
    };
});

console.log(newPeople);

const names = people.map((person)=>`<h2>${person.name}</h2>`)
const result = document.querySelector('#result');

result.innerHTML = names.join(' ');
