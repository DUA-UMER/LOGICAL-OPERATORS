"use strict";
let isBookAvailable = true;
let userBorrowedBooks = 2;
const maxAllowedBooks = 4;
if (isBookAvailable && userBorrowedBooks < maxAllowedBooks) {
    console.log("you can borrow books");
}
else {
    console.log("you can't borrow books!");
}
//ANOTHER EXAMPLE OF LOGICAL OPERATORS :-
let hasCouponcode = true;
let orderAmount = 150;
let isMember = true;
if (hasCouponcode || (orderAmount > 1000 && isMember)) {
    console.log("Apko discount mill gaya h");
}
else {
    console.log("Apko discount nhi mill sakta");
}
