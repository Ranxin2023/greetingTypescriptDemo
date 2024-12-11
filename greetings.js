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
ages.push(22);
ages.push(29);
ages.push(22);
ages.push(21);
ages.sort();
process.stdout.write("Sorted ages are:");
for (var i = 0; i < ages.length; i++) {
    process.stdout.write("".concat(ages[i], "\t"));
}
console.log();
var student1 = { name: "John", age: 25 };
var student2 = { name: "Tom", age: 22 };
var student3 = { name: "Lily", age: 20 };
var student4 = { name: "Lucy", age: 23 };
var student5 = { name: "Michael", age: 21 };
var greetStudent = function (stu) {
    return "Hello, ".concat(stu.name, "! I am ").concat(stu.age, " years old");
};
console.log("This is greenStudents function:");
console.log(greetStudent(student1));
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
var groups = [];
function makeTwoToThreeGroup(s1, s2, s3) {
    if (s3) {
        groups.push([s1, s2, s3]);
    }
    else {
        groups.push([s1, s2]);
    }
}
makeTwoToThreeGroup(student1, student2, student3);
makeTwoToThreeGroup(student4, student5);
console.log("Final groups:");
for (var i = 0; i < groups.length; i++) {
    console.log("Group ".concat(i + 1, ":"));
    for (var _i = 0, _a = groups[i]; _i < _a.length; _i++) {
        var s = _a[_i];
        console.log(greetStudent(s));
    }
}
var fiboLength = 15;
var fibonacci = new Array(fiboLength);
fibonacci[0] = 1;
fibonacci[1] = 1;
for (var i = 2; i < fiboLength; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
process.stdout.write("Fibonacci numbers are:");
for (var i = 0; i < fiboLength; i++) {
    process.stdout.write("".concat(fibonacci[i], "\t"));
}
var ageSet = new Set();
for (var _b = 0, ages_1 = ages; _b < ages_1.length; _b++) {
    var age = ages_1[_b];
    ageSet.add(age);
}
console.log();
process.stdout.write("Unique Ages are:");
ageSet.forEach(function (age) {
    process.stdout.write("".concat(age, "\t"));
});
