type Person = {
  name: string;
  age: number;
};

type Employee = {
  employee_id: string;
  workName: string;
  salary: number;
};

const john: Person = { name: "John Doe", age: 30 };
const emply: Employee = {
  employee_id: "3jhi2",
  workName: "Julia",
  salary: 20_000,
};

function determineType(t: Person | Employee): void {
  if ("name" in t) {
    console.log("Passed parameter is Person type");
  } else {
    console.log("Passed parameter is Employee type");
  }
}


determineType(john)
determineType(emply)