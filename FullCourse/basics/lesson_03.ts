function outputMsg(msg: string){
    msg = msg.toUpperCase();
    console.log(msg)
}


outputMsg("Hello world");
outputMsg("45");

function raiseTo(base: number, power: number = 2): number | boolean{
    if(power === 0){
        return false;
    }
    return base**power;
}

const result: number | boolean = raiseTo(2);


function randomFunc(base: string): void{};

const sayHello = (name: string): string => {
    return `Hello ${name}`;
}


function handleError(errorMsg: string): never{
    throw new Error(errorMsg);
}

export {}