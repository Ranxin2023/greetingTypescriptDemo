const greet = (name: string, age:number): string => {
    return `Hello, ${name}! I am ${age} years old`;
};

// console.log(greet("World", 0));
// console.log(greet("John", 25));

const names:string[]=["John"]
names.push("Tom")
const ages:number[]=[25]
ages.push(20)
ages.push(21)
ages.push(23)
ages.push(29)
ages.push(22)
ages.sort()
process.stdout.write("Sorted ages are:")
for(var i=0; i<ages.length; i++){
    process.stdout.write(`${ages[i]}\t`)
}
console.log()
interface Student{
    name:string,
    age:number
}
const student:Student={name:"John", age:25}
const greetStudents=(stu:Student):string=>{
    return `Hello, ${stu.name}! I am ${stu.age} years old`;
}
console.log("This is greenStudents function:")
console.log(greetStudents(student))