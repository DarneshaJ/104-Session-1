//arrays


const months = new Array("Jan","Feb", "Mar", "Apr");

months.push("May"); //adds new element at the end

months.unshift("Month 0"); //adds new element at the beginning

months[3]="March";

console.table(months);

//alert(months);

var numbers = [10,2,3,4,5,6];

//sum the numbers and save it in a var 
var total = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]+numbers[5];

// calculate the average
var average = total/6;

//display average as alert
alert(average);