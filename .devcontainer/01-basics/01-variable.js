const accountId =1234    // we do not change the 'const'  value
let accountEmail ="mdjani@gmail.com"  //we can change 'let' value
var accountPassward ="6788"     //we can change 'var'  value
accountCity ="keonjhar"    //we can change value

let accountState  // if u print that its print 'Undifined'  bcz not assingnt value

/*
oprefer  to not use var
because of issue in block scope and functional scope
 */

accountEmail ="pass@gmail.com"
accountPassward ="56789"
accountCity ="bbsr"


console.log(accountEmail)

console.table([accountId, accountEmail, accountPassward, accountPassward, accountCity, accountState])  // print data all data in table format