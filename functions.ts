function getSum(num1,num2){
    return num1+num2;
}

function getSumtype(num1: number,num2: number): number{
    return num1+num2;
}

console.log(getSum(1,4));
console.log(getSumtype(1,4));

let mySum = function(num1: any,num2: any): number{
    if(typeof num1 =='string')
    num1 = parseInt(num1);
    if(typeof num2 =='string')
    num2 = parseInt(num2);

    return num1+num2;
}

console.log(mySum(1,5));
console.log(mySum('3',5));

function getName(firstName: string,lastName?: string): string{//?: means that feild is not neccesary
    if(lastName == undefined)
    {
        return  firstName;
    }
    return firstName+' '+lastName;
}
console.log(getName('John','Doe'));
