## TypeScript

### What Is TypeScript

TypeScript is a layer on top of JS, it's more of a development tool which helps with static checking your code. At the end of the day your code still runs in 100% plain JS.

What typeScript does is static checking your code while you type it out. It's more of a superset of JS. Its a wrapper around JS and not a stand alone language on it's own.

It helps with error checking and static checking which JS does not provide. This will in turn make our code less error prone.

#### Example

[Visit](https://www.typescriptlang.org/play?ssl=3&ssc=26&pln=1&pc=1#code/DYUwLgBArgziBOEC8EDeA7AhgWxALggCIAFeAS3QGMRCAaCTAc3wgCYAGe4Ae0szDLd0BQgDlMZeNwBGZQgF8AUIspCY3UADoejABSwEmzABNj8EDBgBKIA) and try out the following code, you can notice that the `email` attribute is highlighted as an error.

```typescript
let person = { name: "Prince", age: 20, location: "Nairobi" };

console.log(person.address);
```

### Installing TypeScript Locally

Visit the [link](https://www.typescriptlang.org/download) and install TypeScript locally

First make sure you make `npm` installed, you can check this using.

```terminal
npm --version
```

Install TypeScript using this command

```terminal
npm install -g typescript
```

Once done, you can use the command below to check the `version` of TypeScript you just installed

```terminal
tsc --version
```

### Creating Your First Program

You can start your first program file, all TypeScript files have the `.ts`or `tsx`(in Nextjs or React, component level)

Intalling a TypeScript extension in VS-code.

Once you have written your first program, you need to convert it to JS and run the code. Plain TS can not be ran.

```typescript
let person = { name: "Prince", age: 20, location: "Nairobi" };

console.log(person);
```

Open up the terminal and type

```terminal
tsc lesson_01.ts
```

This will compile the TS to JS and a JS file will be created in your folder.

You can notice an error in the code, but this does not stop us from converting it to JS

#### Types In TypeScript

There are different types of data types in TypeScript. These include some of the following:

1. Array
2. Boolean
3. Tuples
4. Undefined
5. Number
6. Strings
7. Object
8. Any
9. Unknown
10. Never
11. Void

_and so on_

Knowning these types and when and how to use them is all you need to know to get good at *Type*Script

##### Defining Variables

```typescript
const varName: number = 30;

const msg: string = "Hello world, from TS";

console.log(varName);
console.log(msg);
```

All types in TS are all lower cases not snake or camel casing here with the types.

Convert the code to JS

```terminal
tsc lesson_02.ts
```

This will generate the JS equivalent file. Once this is done back in the original `lesson_02.ts` file you can notice the red lines, to remove and ignore the error, just place

```typescript
export {};
```

Below the code and that will ignore the errors for now.

One of the advantages of using TypeScript is that it allows you to have a better auto code completion. The suggestions you get from the editor are derived based on the _type_ that you defined the variable as.

#### Primitives

Just like in JS where we have 3 main primitive numbers

1. String
2. Number
3. Boolean

In TypeScript we have the same.

**NOTE:** Unlike in Python or C++ where we have `float` and `int` values. In TypeScript just like JS they all all under `Number` not int or float types here.

#### Best Practices, Type Inference

Sometimes it's too obvious to specify types eg

```typescript
const name: string = "James";
```

Instead of this we can just specify the string value directly without the type, TS will automatically detect and know it's of type string.

```typescript
const name = "James";
```

```terminal
tsc lesson_02.ts
```

Trying to perform any changes to it, TypeScript will prevent that from happening

```typescript
const name: string = "James";
name = 345;
```

```terminal
tsc lesson_02.ts
```

**You can still manually specify the Types, but not good practice**

#### Avoid Using Any

The main reason for using TypeScript is the strictness of the type checking. When a variable is declared without the use of the types, TS will automatically assume the type as `any`. Any is not type checked, it's same as having a regular JS variable.

```typescript
let hello;

hello = "Hello";

hello = 234;
```

```terminal
tsc lesson_02.ts
```

By default the type of `hello` variable is of type `any` hence any type can be stored in there, this breaks the whole point of TypeScript. **AVOID this**, any is like turning of the type checking.

"You usually want to avoid this, though, because `any` isn’t type-checked. Use the compiler flag `noImplicitAny` to flag any implicit `any` as an error."[source](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

### Functions

Let say we have a function like this

```typescript
function outputMsg(msg) {
  console.log(msg);
}
```

```terminal
tsc lesson_03.ts
```

When calling this function, user can pass in any type, that defeats the whole point of TypeScript. By default you might say the type is `any`, yes it is.

Let's say we expect strings to carry out a specific operation on the string type. If a user passes in another data types like a number we can't really as as we please.

```typescript
function outputMsg(msg) {
  msg = msg.toUpperCase();
  console.log(msg);
}
// calling the function with different types
outputMsg("Hello world");
outputMsg(45);
```

```terminal
tsc lesson_03.ts
```

Converting this to JS works fine. This should really not work. We always want a string type not `any`. So let's convert this to a type safe function.

```typescript
function outputMsg(msg: string) {
  msg = msg.toUpperCase();
  console.log(msg);
}
// calling the function with different types
outputMsg("Hello world");

// this will give an error
outputMsg(45);
```

```terminal
tsc lesson_03.ts
```

###### Example 2

```typescript
function raiseTo(base: number, power: number) {
  return base ** power;
}

raiseTo(2, 3);
```

```terminal
tsc lesson_03.ts
```

What if we want the `power` to be of 2 by default.

```typescript
function raiseTo(base: number, power: number = 2) {
  return base ** power;
}

raiseTo(2);

export {};
```

```terminal
tsc lesson_03.ts
```

#### Controlling the return type information

Now our functions are just returning any data type, we need to know the data type a function will return in advance in order to decide the type of a variable needed to receive that return information from a function.

If you are coming from Python, we have something similar to

```python
def my_func(num: int) -> int:
    return num * 30
```

To do the same thing in TS we have the following syntax

```typescript
function raiseTo(base: number, power: number = 2): number {
  return base ** power;
}

const result: number = raiseTo(2);

export {};
```

```terminal
tsc lesson_03.ts
```

#### Multiple Return Types

In some cases you'll wish to return multiple data types, in such a case here is a syntax for that

```typescript
function raiseTo(base: number, power: number = 2) {
  if (power === 0) {
    return false;
  }
  return base ** power;
}

const result: number = raiseTo(2);

export {};
```

```terminal
tsc lesson_03.ts
```

Hovering on the `raiseTo` function name, you can see the types it might return `number | false`. How do we explicitly specify that on our own?

We also have to change the variable definition for this to work. The variable that accepts the function call input that is `result: number | boolean`

```typescript
function raiseTo(base: number, power: number = 2): number | boolean {
  if (power === 0) {
    return false;
  }
  return base ** power;
}

const result: number | boolean = raiseTo(2);

export {};
```

```terminal
tsc lesson_03.ts
```

#### Compulsory Return Types

The function in which we explicitly specified the return type, we must return a value from such functions. Unless the return type is `any`, `undefined` or `void`.

Hence the code below should output an error

```typescript
function randomFunc(base: string): string {}
```

```typescript
function randomFunc(base: string): string {
  return base;
}
```

When the return type is `any`, `void` or `undefined`, we should not have a return type

```typescript
function randomFunc(base: string): void {}
```

#### Arrow Functions

```typescript
const sayHello = (name: string): string => {
  return `Hello ${name}`;
};
```

Explain more on this using the documentation

[Go to the anonymous section](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

#### Functions that do not return any thing

Sometimes we have functions that do not return any types not even `void`. In such cases, we can use the `never` type to handle it. This can be used to throw exceptions, forcefull terminations and so on.

`never` is also returned when there is nothing left in a `union`.

Example

```typescript
function handleError(errorMsg: string): never {
  throw new Error(errorMsg);
}
```

### Type Aliases

Imagine in JS we have an object like

```typescript
const Person = {
  name: "Prince",
  age: 20,
};

function getUserDetails(obj: { name: string; age: number }) {
  return `Username is: ${obj.name} and age is: ${obj.age}`;
}

// you get an error
getUserDetails();

getUserDetails(Person);

// you get an error as the attribute
// name and age are not specified
getUserDetails({});
```

Take the example below

```typescript
function getUserDetails(obj: { name: string; age: number }): {} {
  return {};
}
```

Take this example where we defined the attributes of the object

```typescript
function getUserDetails(obj: { name: string; age: number }): {
  name: string;
  age: number;
} {
  return {};
}
```

The code above will return an error, the error is cause as we do not have the attributes defined in the object we are trying to return instead we are only returning an empty object. Here is a possible fix

```typescript
function getUserDetails(obj: { name: string; age: number }): {
  name: string;
  age: number;
} {
  return { name: obj.name, age: obj.age };
}
```

#### Better way around it

One thing you can notice is that we repeating the same copy of the object over and over again. This can be an issue, to address this issue we have type aliases. Let's take a look:

```typescript
type Employee = {
  name: string;
  age: number;
};

function getEmployeeDetails(emply: Employee): string {
  return `Name: ${emply.name}, age: ${emply.age}`;
}

function employee(emply: Employee): Employee {
  return emply;
}
```

You can now see that the function definition is not repeating the object we had initially, only the `Employee` type is passed around.

#### Compibining Aliases

Sometimes we would like to create a new alias by combining existing ones.

**Example 01**

```typescript
type Person = {
  name: string;
  age: number;
  location: string;
};

type Employee = {
  id: string;
  office: string;
  extraWorkHours: number;
};

type employedPerson = Person & Employee;

const emply1: employedPerson = {
  name: "John Doe",
  age: 30,
  location: "New Delhi",
  id: "3Kikdjs232",
  office: "New Town",
  extraWorkHours: 3,
};
```

**Example 02**

```typescript
type Person = {
  name: string;
  age: number;
  location: string;
};

type Employee = {
  id: string;
  office: string;
  extraWorkHours: number;
};

type employedPerson = Person &
  Employee & {
    retirementYear: number;
  };

const emply1: employedPerson = {
  name: "John Doe",
  age: 30,
  location: "New Delhi",
  id: "3Kikdjs232",
  office: "New Town",
  extraWorkHours: 3,
  retirementYear: 2070,
};
```

### Optional And Readonly

Sometimes you'll want to make some attribute or properties optional values or just readable. To do this we need to have the following syntax:

We modified the `_id` to be `readonly`. this means we can not modify it later on. We also modified `retirementYear` as optional using `?` symbol, this meaning we do not have to define it while creatin the `emply1` object anymore, unlike from the previous section.

```typescript
type Person = {
  name: string;
  age: number;
  location: string;
};

type Employee = {
  readonly id: string;
  office: string;
  extraWorkHours: number;
};

type employedPerson = Person &
  Employee & {
    retirementYear?: number;
  };

const emply1: employedPerson = {
  name: "John Doe",
  age: 30,
  location: "New Delhi",
  id: "3Kikdjs232",
  office: "New Town",
  extraWorkHours: 3,
};

emply1.id = "83Ikl4ut^yu";

export {};
```

### Arrays

There are mainly two ways of creating arrays in typescript:

1. Using the square brackets notation `[]`
2. Using the `Array<>` generic

#### Using [] notation

```typescript
const employees: string[] = [];

employees.push("John Doe", "Janet Doe");
employees.pop();
```

#### Using Array<type> notation

```typescript
// Array<type>
const salaries: Array<number> = [];

salaries.push(10_000, 20_000);
```

#### Readonly Arrays

This only allow you to view content of the array and not add to it

```typescript
const readOnly: ReadonlyArray<number> = [20, 30, 40];

// error as read only arrays not have push or pop method
readOnly.push();
readOnly.pop();
```

#### Union Types With Arrays

Some languages like Python provide you with the ability to have more than one type into an array e.g array of strings and number types. With TS we can do that using `union types` Eg:

```typescript
const mixedTypeArray1: number | string[] = [2, 3, 4, "7"];
// meaning all elements can only be number or string type and not a
// mix of the two
const mixedTypeArray2: number[] | string[] = [2, 3, 4, "7"];
// correct syntax
const mixedTypeArray3: (number | string)[] = [2, 3, 4, "7"];
```

### ENUMS

This can be used to define a limited set of values that confides a given variable. Let's say we want to store the education levels. Each country has its own set of education levels. Hence limiting the options can be of importance.

```typescript
enum eduLevel {
  PRIMARY,
  MIDDLE,
  HIGHSCHOOL,
  COLLEGE,
}
```

Now we can assign values to each of the levels. By default the first level will be `0` increment by `1` to each of the other levels following it. If you change the value of the first level to a `number` the other levels following it will increment by `1`. Example:

```typescript
enum eduLevel {
  PRIMARY = 30,
  MIDDLE,
  HIGHSCHOOL,
  COLLEGE,
}
```

`MIDDLE` will be `31` and increment from there, `HIGHSCHOOL` will be `32` and so on.

If the first level is set to a string then the others must be strings as well unless you introduce number back at which point incrementation will resume.

```typescript
// ERROR
enum eduLevel {
  PRIMARY = "Primary",
  MIDDLE,
  HIGHSCHOOL,
  COLLEGE,
}
```

```typescript
enum eduLevel {
  PRIMARY = "Primary",
  MIDDLE = 5,
  HIGHSCHOOL,
  COLLEGE,
}
```

`HIGHSCHOOL` will be `6` and so on.

```typescript
enum EDUVELE {
  PRIMARY = "Primary",
  MIDDLE = "Middle",
  HIGHSCHOOL = "High School",
  COLLEGE = "College",
}

const level: EDUVELE = EDUVELE.PRIMARY;
```

### Interfaces

```typescript
interface BlogPost {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  likePost: () => void;
  likeCount(): number;
  outputID: (id: string) => string;
}

const blog_01: BlogPost = {
  id: "3k9Li*7t",
  author: "johnDoe",
  title: "First blog post title",
  content: "First blog post content",
  date: "20/11/2023",
  likePost: () => {
    console.log("Liked post");
  },
  likeCount: () => {
    return 3;
  },
  outputID: (id: string) => {
    return id;
  },
};
```

#### Re-opening an interface

This is simply adding new attribute/properties to an interface.

```typescript
interface BlogPost {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  likePost: () => void;
  likeCount(): number;
  outputID: (id: string) => string;
}

// interface re-opening
interface BlogPost {
  dataDeleted?: string;
  dateUpdated: string;
}

const blog_01: BlogPost = {
  id: "3k9Li*7t",
  author: "johnDoe",
  title: "First blog post title",
  content: "First blog post content",
  date: "20/11/2023",
  likePost: () => {
    console.log("Liked post");
  },
  likeCount: () => {
    return 3;
  },
  outputID: (id: string) => {
    return id;
  },
  dateUpdated: "20/11/2023",
};
```

#### Interface Inheritance

We can implement two main types of interface inheritance

1. Single inheritance
2. Multiple inheritance

```typescript
interface BlogPost {
  id: string;
  author: string;
  title: string;
  content: string;
  date: string;
  likePost: () => void;
  likeCount(): number;
  outputID: (id: string) => string;
}

// interface re-opening
interface BlogPost {
  dateDeleted?: string;
  dateUpdated: string;
}

// inheritance
interface Comments extends BlogPost {
  commentTo: string;
}

// Multiple inheritance
// interface Comments extends BlogPost, Interface2 {
//   commentTo: string;
// }

const blog_01: Comments = {
  id: "3k9Li*7t",
  author: "johnDoe",
  title: "First blog post title",
  content: "First blog post content",
  date: "20/11/2023",
  likePost: () => {
    console.log("Liked post");
  },
  likeCount: () => {
    return 3;
  },
  outputID: (id: string) => {
    return id;
  },
  dateUpdated: "20/11/2023",
  commentTo: "u979Tx3jl",
};
```

##### Difference Between Type And An Interface

For the difference between type and an interface, read here

[Difference between types and an interface](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

### Project Environment Code

1. Create a new folder `project_env`
2. Open terminal and type in

```terminal
tsc --init
```

This will create a `tsconfig.json` file, open the file and explore the content.

3. Create the `package.json` file.

```terminal
npm init -y
```

4. Create `index.html` file in the root of the folder.

5. In production there will be two main files:

> `src`: here is where you'll have your `ts` file

> `dist`: distribution folder, this contains content that the final user will be able to see. Example let's say we have an `index.ts` file in the `src` folder, when the TS gets compiled, an `index.js` file will be generated in `dist` folder as well. For this to work, we'll have to first set it up. Go into the `tsconfig.json` file and specify the output folder: `"outDir": "./dist"`

6. Create `index.ts` file inside the `src` folder

```typescript
console.log("Hello world");
```

7. Run `tsc` in watch mode using

```terminal
tsc -W
```

This will keep an eye out on all changes an re-compile and run the code.

Once this is ran, go back to the `dist` folder you'll find an `index.js` file containing the JS generated form `src/index.ts`.

Now we need to add the `./dist/index.js/` inside of our HTML

In the `src/index.ts` add the following code.

```html
<script src="./dist/index.js"></script>
```

```typescript
class Person {
  username: string;
  age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }
}

const Prince = new Person("Prince", 30);
```

### Access Modifiers

In TypeScript there are mainly 3 access modifiers, these include:

1. `Public`: All class variables are public by default
2. `Private`: Class variables declared with this modifier can only be accessed from within the class.
3. `Protected`:

**NOTE :** In JS there is no such thing as `Private` access modifier, instead we have `#` to indicate a variable is private.

```typescript
class Person {
  public username: string;
  private age: number;

  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }
}
  // private method, can only be access from within the class
  private upgateAge(newAge: number): void {
    this.age = newAge;
  }

const prince = new Person("Prince", 30);
prince.username;
// error, as its now private
prince.age;
// error, as private methods can only be accessed from within the class
prince.updateAge(49)
```

#### Syntatic Sugar

In TS, we have a simpler way of writing this. This is the syntatic sugar we use. It's as follows:

```typescript
class Person {
  constructor(public username: string, private age: number) {}
}

const prince = new Person("Prince", 30);
prince.username;
```

This will give us the same JS code as before.

### Getters and Setters

This will allow us to control the access to `private` variables in TS.

```typescript
class Person {
  constructor(public username: string, private age: number) {}
  // private method, can only be access from within the class
  private upgateAge(newAge: number): void {
    this.age = newAge;
  }

  get getAge(): number {
    return this.age;
  }

  set setAge(newAge: number) {
    if (newAge < this.age) {
      throw new Error("Reverse aging not allowed");
    } else {
      this.upgateAge(newAge);
    }
  }
}

const prince = new Person("Prince", 30);

console.log(prince.getAge);
prince.setAge = 31;
console.log(prince.getAge);
```

**NOTE:** `getters` and `setters` in TS are not methods that can be called, instead they are properties that can be accessed and modified depending on if it's a getter or a setter.

**NOTE :** `setters` in TS do not have a return type, not even `void`, `undefined` or `never` they are just left blank.

```typescript
  set setAge(newAge: number) {
    if (newAge < this.age) {
      throw new Error("Reverse aging not allowed");
    } else {
      this.upgateAge(newAge);
    }
  }
```

### Inheritance

One class can inherit and take on th properties of another class. We'll also go over `protected` access modifier, a modifier that can be accessed by a class and its child classes.

```typescript
class Person {
  constructor(public username: string, protected age: number) {}
  // private method, can only be access from within the class
  private upgateAge(newAge: number): void {
    this.age = newAge;
  }

  get getAge(): number {
    return this.age;
  }

  set setAge(newAge: number) {
    if (newAge < this.age) {
      throw new Error("Reverse aging not allowed");
    } else {
      this.upgateAge(newAge);
    }
  }
}

class Employee extends Person {
  constructor(username: string, age: number, emplyID: string) {
    // call the super class and instante it
    super(username, age);
  }

  public work(): string {
    return `${this.username} is working`;
  }

  // method overriding
  get getAge(): number {
    return super.getAge + 3;
  }

  // protected, change age in parent class to be of protected
  // access modifier and access it using this function
  get getAge2(): number {
    return this.age;
  }
}

const empl = new Employee("Prince", 30, "33iks4ty9");
console.log(empl.work());
// method overriding
console.log(empl.getAge);
// proteceted
console.log(empl.getAge2);
```

#### Multiple Inheritance

TS just like Python does not support **multiple inheritance**

### Inheritance In Interfaces(Implements)

If you have ever worked with a Language like Java, you probably came across `interfaces`, they are just specifying what needs to be done and do not provide implementations, the interface that inherits them is the one required to provided the definitinos to the stated attributes or methods specified by the interface.

Let's take an example of you wanting to go on a date with a girl. There are somethings you must implement before this can happen. First:

1. You need to have money
2. Mode of transport
3. Set location

If you do not have this implemented you can't go on a date(theoretically). Let's see how interfaces can help to provide as a list of things we need to have, then we can write an algorithm that decides whether we can or can not go on the date.

```typescript
interface CanGoOnADate {
  hasEnoughMoney: boolean;
  hasTransport: boolean;
  setLocation: boolean;
}

class JohnDoe implements CanGoOnADate {
  constructor(
    public hasEnoughMoney: boolean,
    public hasTransport: boolean,
    public setLocation: boolean
  ) {}
}
```

Let's say you also need to have some personality traits to go on a data, lets use this example to demostrate how we can implement more than just one interface.

```typescript
interface CanGoOnADate {
  hasEnoughMoney: boolean;
  hasTransport: boolean;
  setLocation: boolean;
}

interface PersonalityTraits {
  goodStoryTeller(): string;
  goodCharisma(): string;
}

class James implements CanGoOnADate, PersonalityTraits {
  constructor(
    public hasEnoughMoney: boolean,
    public hasTransport: boolean,
    public setLocation: boolean
  ) {}

  public goodStoryTeller(): string {
    return "Can tell good stories";
  }

  public goodCharisma(): string {
    return "has a good charisma";
  }
}
```

Interfaces just provide you with a list of things you **MUST** define or provide. You can also provide additional information if you wish to. Meanind you can add other methods and attributes to a given class that implements an interface if you wish to.

```typescript
interface CanGoOnADate {
  hasEnoughMoney: boolean;
  hasTransport: boolean;
  setLocation: boolean;
}

interface PersonalityTraits {
  goodStoryTeller(): string;
  goodCharisma(): string;
}

class James implements CanGoOnADate, PersonalityTraits {
  constructor(
    public hasEnoughMoney: boolean,
    public hasTransport: boolean,
    public setLocation: boolean,
    public hasACar: boolean
  ) {}

  public goodStoryTeller(): string {
    return "Can tell good stories";
  }

  public goodCharisma(): string {
    return "has a good charisma";
  }

  public greets(): string {
    return "Greeting";
  }
}
```

### Generics

Let's take we have a function that takes an input of a given data type and returns an output of that same data type.

Well sounds easy right, lets just write a function to deal with each specific data types.

```typescript
function output(data: number): number {
  return data;
}

function output01(data: string): string {
  return data;
}

function output02(data: boolean): boolean {
  return data;
}

function output03(data: []): [] {
  return data;
}
```

What is your application keeps defining new data types? Well that can get messy pretty fast.

```typescript
function output(data: number): number {
  return data;
}

function output01(data: string): string {
  return data;
}

function output02(data: boolean): boolean {
  return data;
}

function output03(data: []): [] {
  return data;
}

type multiArray = {
  row01: [];
  row02: [];
};

function output04(data: multiArray): multiArray {
  return data;
}
```

Can we get just **ONE** function to handle all these? That's where generics comes into play.

```typescript
function output<Type>(data: Type): Type {
  return data;
}
```

**Examples**

```typescript
function output<Type>(data: Type): Type {
  return data;
}

console.log(output<number>(3));
console.log(output<string>("Hello world"));
console.log(output<string[]>(["Hello world"]));

type multiArray = {
  row01: number[];
  row02: string[];
};

console.log(output<multiArray>({ row01: [2], row02: ["4"] }));
```

#### Generic Arrays

```typescript
const myArray: Array<number> = [4, 50, 60];
console.log(myArray);

const myArray2: Array<string> = ["Hello world", "Hello John Doe"];
console.log(myArray2);
```

```typescript
function output02<Type>(data: Type[]): Type {
  return data[0];
}

console.log(output02<number>([4, 5, 70]));
```

**NOTE:** Instead of using the word `Type`, instead you are allowed to use any name you wish to use. Most code bases use `T`. Example:

```typescript
function output02<T>(data: T[]): T {
  return data[0];
}

console.log(output02<number>([4, 5, 70]));
```

#### Multiple data types with generics

```typescript
function output02<T, U>(data: T, data2: U): object {
  return {
    data,
    data2,
  };
}

console.log(output02<number, string>(4, "Hello world"));
```

#### Generic Classes Practicals

The same way we have generic variables, we can also have generic classes as well.

```typescript
class GenericClass<T> {
  public bookDetails: T[] = [];

  constructor(private books: T[]) {
    books.forEach((book) => {
      this.bookDetails.push(book);
    });
  }

  set addBook(bookDetail: T) {
    this.bookDetails.push(bookDetail);
  }

  get getBooks(): T[] {
    return this.bookDetails;
  }
}

interface Book {
  title: string;
  author: string;
}

const bookDetails: GenericClass<Book> = new GenericClass([
  { title: "First book", author: "Prince" },
]);

bookDetails.addBook = { title: "Second Book", author: "Code With Prince" };

console.log(bookDetails.getBooks);
```

### Type Narrowing

Sometimes, your application expects user input to be one of many defined types. Each type might have it's own set of attributes and methods. Being able to filter through and identify the right type of the based in data can be crucial.

This filtering through to find the right type is called `Type Narrowing` in TS.

This can help avoid many of the typical problems of JS. Example:

```javascript
(2 + "2") >> 22;
```

Let's create a TypeScript function to be able to take in two inputs which can be of `number` or `string` types and return a sum of the two despite being `string` or `number` type.

```typescript
function add(x: number | string, y: number | string): number {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }

  // convert to number
  x = Number(x);
  y = Number(y);

  return x + y;
}

console.log(add(2, "4"));
```

#### `instanceof` Narrowing

Just like the `typeof` narrowing we have applied, we can also apply the `instanceof` narrowing which is just TS's equivalent.

#### Array type narrowing

Let's write a function that accepts an input, the input can either be a number of an array of numbers. If its a single number, we'll just return that number else, we'll loop through and return the sum of the numbers in the array.

```typescript
function add(x: number | number[]): number {
  let sum: number = 0;
  if (Array.isArray(x)) {
    x.forEach((val) => {
      sum += val;
    });
  } else {
    sum += x;
  }

  return sum;
}

console.log(add([2, 4, 6]));
```

#### Type narrowing with the `in` operator

```typescript
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

determineType(john);
determineType(emply);
```
