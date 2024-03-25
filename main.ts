let  isBookAvailable: boolean = true;
let userBorrowedBooks : number = 2;
const maxAllowedBooks: number= 4;

if (isBookAvailable && userBorrowedBooks < maxAllowedBooks){
    console.log("you can borrow books");
} else{
    console.log ("you can't borrow books!");
}

//ANOTHER EXAMPLE OF LOGICAL OPERATORS :-

let hasCouponcode: boolean = true;
let orderAmount : number = 150;
let isMember:boolean = true;

if (hasCouponcode || (orderAmount > 1000 && isMember)) {
    console.log("Apko discount mill gaya h");
}else {
    console.log("Apko discount nhi mill sakta");
}
