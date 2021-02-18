//1
console.log("Task 1");

const user = {};

user.name = "ПИЛИП";
user.surname = "ШЕВЧЕНКО";
console.log(user);

user.name = "СЕРГІЙ";
console.log(user);

delete user.name;

console.log("");


//2
console.log("Task 2");

const employeeSalaries = {
    developer: 2700,
    driver: 1300,
    manneger: 2000
};

var tempSalary = 0;
for (let salary in employeeSalaries) {
    tempSalary += employeeSalaries[salary];
}

console.log("Сума всіх зарплат працівників " + tempSalary);

console.log("");


//3
console.log("Task 3");
function calculator(a, operator, b) {
    process.stdout.write(a + " " + operator + " " + b + " = ");

    let result = "";
    try {
        if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
            throw "Немає такої операції";

        }
        else if (isNaN(a) || isNaN(b)) {
            throw "Потрібно ввести 2 числа!";

        }
        {
            switch (operator) {
                case ("+"): {
                    result = a + b;
                    break;
                }
                case ("-"): {
                    result = a - b;
                    break;
                }
                case ("*"): {
                    result = a * b;
                    break;
                }
                case ("/"): {
                    if (b == 0) {
                        throw "На 0 ділити заборонено!";
                    } else {
                        result = a / b;
                        break;
                    }
                }
            }
        }
    } catch (error) {
        process.stdout.write(error);
    }

    return result;
}

let a = 14;
let b = 7;

console.log(calculator(a, "-", b));
console.log(calculator(a, "+", b));
console.log(calculator(a, "/", b));
console.log(calculator(a, "*", b));

console.log();
console.log("Помилки:")
console.log(calculator("a", "+", b));
console.log(calculator(a, "add", b));
console.log(calculator(a, "/", 0));