type Person = {
    name:string;
    age:number;
}
function getProperty<T,U extends keyof T>(object:T,property:U){
return object[property]
}

const person:Person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));