type Customer = {
    birthday?: Date
};
function getCustomer(id: number): Customer | null | undefined{
    return id === 0? : { birthday: new Date()};
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullyear());
let log:any = null;
log?.('a');