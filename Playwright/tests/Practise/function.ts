function makeChai(type:string , price:number){
    console.log(`chat type: ${type} and price is ${price}`)
}

makeChai("Masala Chai", 20);


function getChaiPrice():number{
    return 25
}

function makeOrder(order:string):string{
    return order

}

function createChai(order:{
    type:string,
    sugar:number,
    size : "small " | "large"
}):number{
    return 4
}