type Person = {
    name: string
    age: number
    location: string
}

type Employee = {
    readonly id: string
    office: string
    extraWorkHours: number
}

type employedPerson = Person & Employee & {
    retirementYear?: number
};

const emply1 : employedPerson = {
    name: "John Doe",
    age: 30,
    location: "New Delhi",
    id: "3Kikdjs232",
    office: "New Town",
    extraWorkHours: 3,
}

// emply1.id = "83Ikl4ut^yu";


export {}