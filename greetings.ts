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
ages.push(22)
ages.push(29)
ages.push(22)
ages.push(21)
ages.sort()
process.stdout.write("Sorted ages are:")
for(var i=0; i<ages.length; i++){
    process.stdout.write(`${ages[i]}\t`)
}
console.log()
interface StudentInterface{
    name:string,
    age:number
}
const student1:StudentInterface={name:"John", age:25}
const student2:StudentInterface={name:"Tom", age:22}
const student3:StudentInterface={name:"Lily", age:20}
const student4:StudentInterface={name:"Lucy", age:23}
const student5:StudentInterface={name:"Michael", age:21}
const greetStudent=(stu:StudentInterface):string=>{
    return `Hello, ${stu.name}! I am ${stu.age} years old`;
}
console.log("This is greenStudents function:")
console.log(greetStudent(student1))

class CarClass{
    logo:string;
    age:number;
    constructor(logo:string, age:number){
        this.logo=logo
        this.age=age
    }
    display():void{
        console.log(`My car's logo is ${this.logo} and I have used ${this.age} years`)
    }
}

var car1=new CarClass("Toyota", 10)
car1.display()
const groups:StudentInterface[][]=[]
function makeTwoToThreeGroup(s1:StudentInterface, s2:StudentInterface,s3?:StudentInterface){
    if(s3){
        groups.push([s1, s2, s3])
    }
    else{
        groups.push([s1, s2])
    }
}
makeTwoToThreeGroup(student1, student2, student3)
makeTwoToThreeGroup(student4, student5)
console.log("Final groups:");
for(var i=0; i<groups.length; i++){
    console.log(`Group ${i+1}:`)
    for(const s of groups[i]){
        console.log(greetStudent(s))
    }
}
const fiboLength=15
const fibonacci:number[]=new Array(fiboLength)
fibonacci[0]=1
fibonacci[1]=1
for(var i=2; i<fiboLength; i++){
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]
}
process.stdout.write("Fibonacci numbers are:")
for(var i=0; i<fiboLength; i++){
    process.stdout.write(`${fibonacci[i]}\t`)
}

const ageSet:Set<number>=new Set()
for(const age of ages){
    ageSet.add(age)
}
console.log()
process.stdout.write("Unique Ages are:")
ageSet.forEach(age => {
    process.stdout.write(`${age}\t`);
});
let arr:number[]=[1, 2, 3, 2, 3, 2, 1, 4]
let arrCount:Record<number, number>={}
for(const num of arr){
    arrCount[num]=(arrCount[num]||0)+1
}
for(const key in arrCount){
    console.log(`the frequency of ${key} is ${arrCount[key]}`)
}

let words:string[]=["def", "zoo","banana", "fiber", "foo", "moon", "banana", "abc"]
words.sort((a, b)=>b.localeCompare(a))
console.log("Sorted words in descending order are:")
for(const word of words){
    process.stdout.write(`${word}\t`);
}
console.log()