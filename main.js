class mondaiset1 {
    constructor(parameters) {
        const add = (a,b) => a + b;
    
console.log(add(1,4));


const greet = name => "Hello" + name;
console.log(greet("kazuto"));


const result = (x) => {
    return x * 3;
}

console.log(result(5));
    }
}



//const numbers = [10, 20, 30];

//const result = numbers.map(x => x + 1);

//console.log(result);


const users = [
    { name: "Kazuto", age: 27 },
    { name: "Taro", age: 30 },
    { name: "Hanako", age: 25 }
];

const names = users.map(x => x.name);

console.log(names);


const result = users.map(x => x.name + " is " + x.age);

console.log(result);



const numbers = [1, 2, 3, 4];

const result2 = (str) => {
    return numbers.map(x => x * 2 + str);
}

console.log(result2("です"));