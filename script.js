//nak display data di console
console.log("Hai Awak");
// display data di screen web
// document.write("Walaweh");

// Display star
var s = "";
for (var i = 0; i <=10;i++){
    for (var j = 0; j<i;j++){
       s += '*';
    }
    s += '\n';
}
console.log(s);

//nak gabung value dari array dalam satu ayat guna -> .join("")
var myday = ["Today", "is", "Monday"];
myday.push('Guys');
console.log(myday.join(" "));


//nak susun value dalam array acsending -> .sort()
var mymonth = ["December", "October", "April"];
mymonth.pop();
console.log(mymonth.sort());

//function cube
function twocube(a,b){
    var volumeA,
        volumeB,
        total;

    volumeA = a*a*a;
    volumeB = b*b*b;
    total = volumeA + volumeB;

    return total;
}

var arr1 = ["Nafis", "Ikmal", "Nooreen", "Muslimin", "Atikah"];

arr1.splice(3, 1 , "Fakhri");
console.log(arr1);

var arr2 = arr1.slice(1,3);
console.log(arr2);

var num1 = [2, 7, 9, 12, 4, 10];

//foreach
// num1.forEach(function(e) {
//     console.log(e);
// });

//map
var num2 = num1.map(function(e) {
    return e * 2;
});
console.log(num2);

//sort
num1.sort(function(a,b){
    return a-b;
});
console.log(num1);

//filter and find
var num3 = num1.find(function(x) {
    return x > 9;
});
console.log(num3);


