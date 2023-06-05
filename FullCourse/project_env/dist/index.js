"use strict";
const john = { name: "John Doe", age: 30 };
const emply = {
    employee_id: "3jhi2",
    workName: "Julia",
    salary: 20000,
};
function determineType(t) {
    if ("name" in t) {
        console.log("Passed parameter is Person type");
    }
    else {
        console.log("Passed parameter is Employee type");
    }
}
determineType(john);
determineType(emply);
