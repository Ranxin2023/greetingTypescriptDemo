var greet = function (name, age) {
    return "Hello, ".concat(name, "! I am ").concat(age, " years old");
};
// console.log(greet("World", 0));
// console.log(greet("John", 25));
var names = ["John"];
names.push("Tom");
var ages = [25];
ages.push(20);
ages.push(21);
ages.push(23);
ages.push(29);
ages.push(22);
ages.sort();
process.stdout.write("Sorted ages are:");
for (var i = 0; i < ages.length; i++) {
    process.stdout.write("".concat(ages[i], "\t"));
}
console.log();
var student = { name: "John", age: 25 };
var greetStudents = function (stu) {
    return "Hello, ".concat(stu.name, "! I am ").concat(stu.age, " years old");
};
console.log("This is greenStudents function:");
console.log(greetStudents(student));
var CarClass = /** @class */ (function () {
    function CarClass(logo, age) {
        this.logo = logo;
        this.age = age;
    }
    CarClass.prototype.display = function () {
        console.log("My car's logo is ".concat(this.logo, " and I have used ").concat(this.age, " years"));
    };
    return CarClass;
}());
var car1 = new CarClass("Toyota", 10);
car1.display();
