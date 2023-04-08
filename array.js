const new1=[5,7,2,9,4,1,2];

console.log('Here is : ', new1)



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
//[ 1,7,9 , 45 ]

 //["Str", "alex","moh"]

// ['the','fox' ,'over' ,'lazy', 'dog'  ]


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/
var fruits=["Tomato","Banana","Watermelon"]

console.log("the index of \"Banana\" is "+fruits.indexOf("Banana"));
console.log("the index of \"Tomato\" is "+fruits.indexOf("Tomato"));


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
const fav_food=['A','B','C','D','E'];
const fav_sport=['A','B','C'];
const fav_movie=['A','B','C','D'];


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(x)
{
    return x[0];
}
console.log("the first element in an array is ", firstOfArray(fav_food));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(a)
{
    return a[a.length-1];
}
console.log("the last element in an array is ", lastOfArray(fav_food));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9] => [1,3,4,6,8,9,10]
*/
var array1 = [0,5,7,9]
array1.push(10);
array1.shift();
array1.shift();
array1.shift();
array1.unshift(8);
array1.unshift(6);
array1.unshift(4);
array1.unshift(3);
array1.unshift(1);

console.log(array1);

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
console.log(array2);
array2.pop();
console.log(array2);
array2.push(1);
console.log(array2);
array2.shift();
console.log(array2);
array2.unshift(2);
console.log(array2);

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(x)
{
    if(x.length%2==0)
    return (x[x.length/2-1] +" and "+ x[x.length/2]);
    else
    return x[Math.floor(x.length/2)];
}
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]))
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
console.log(animals);
animals[0]='zebra';
animals[1]='elephant';
animals.pop();
console.log(animals);
const nums= [1,2,3,8,9]
console.log(nums);
nums[0]=5;
nums[1]=-22;
nums[2]=3.5;
nums[3]=44;
nums[4]=98;
nums[5]=44;
console.log(nums);

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums1= [1,2,3,8,9]

function indexOfArray(a,b)
{
    return a[b];//if (b<a.length)
}
console.log(indexOfArray(nums1,3));
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(x)
{
    return x.slice(0,x.length-1)
}
console.log(arrayExceptLast(nums1));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(a,b)
{   
    a[a.length]=b;  return a; //return a.push(b)
}
console.log(addToEnd(nums1,55));

// all the exercises below should solved 2 times: 1- for loop 2- while loop
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(x)
{
    let sum=0;
    for(let a=0; a<x.length; a++)
    {
        sum+=x[a];//sum=sum+x[a]
    }
    return sum;
}
console.log("sum = "+sumArray(nums1));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(x)
{
    var min=x[0], i=0;
    while(i<x.length)
    {
        if(min<x[i])
        {min=x[i];}
        i++;
    }
    return min;
}
console.log("min = "+minInArray(nums1));
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: removeFromArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(x,y)
{   var b=[];
    var a=x.indexOf(y);
    for(var i=0;i<x.length;i++)
    {
        if(i==a)
        continue;
        else
        b.push(x[i]);
    }
    return b;
}
console.log(removeFromArray(nums1,3));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(x)
{   var c=[];
    for(var i=0;i<x.length;i++)
    {
        if(x[i]%2!==0)
        c.push(x[i]);
    }
    return c;
}
console.log("odd array "+oddArray(nums1));
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function aveArray(x)
{
    let sum=0;
    for(let a=0; a<x.length; a++)
    {
        sum+=x[a];//sum=sum+x[a]
    }
    let avg=sum/x.length;
    console.log("average= "+avg); 
}
aveArray(nums1);

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["leena","mercer","madrasa","rashed","emad","hala"]
function shorterInArray(x)
{
    var shortest=x[0],i=0;
    while(i<x.length)
    {
        if(x[i].length<shortest.length)
        {shortest=x[i];}
        i++;
    }
    return shortest;
}
console.log("shortest string is "+shorterInArray(strings));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string1= "alex mercer madrasa rashed2 emad hala"

function repeatChar(a,b)
{
    var count=0;
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==b)
        count+=1;//count=count+1
    }
    return count;
}
console.log(repeatChar(string1,"a"));
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(x)
{   var e=[];
    for(var i=0;i<x.length;i++)
    {   
        if(i%2==0 && x[i].length%2!=0)
        e.push(x[i]);
    }
    return e;
}
console.log(evenIndexOddLength(strings));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [1, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function powerElementIndex(x)
{   var z=[];
    for(var i=0;i<x.length;i++)
        {
            z[i]=x[i]**i;//z.push(x[i]**i)
        }
        return z;
}
var nums5= [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums5));

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndex(x)
{
    var new3=[];
    for(var i=0; i<x.length;i++)
    {
        if(i%2==0 && x[i]%2==0)
        new3.push(x[i]);
    }
    return new3;
}
var nums3= [5,2,2,1,8,66,55,77,34,9,55,1];
console.log(evenNumberEvenIndex(nums3));
var x=[10], y=[5];
x.push(y[0]);
y.push(x[0]);
x.shift();
y.shift();
console.log("x = "+x);
console.log("y = "+ y);
function right_left(x)
{
    if(x===x.reverse())
    console.log("True");
    else
    console.log("False");
}
var a1=[1,1,2,2,1,1];
var a2=[3,2,1,3,2,1];
a1.every(right_left);
console.log(a2);
console.log(a2.reverse());
right_left(a1);
right_left(a2);
a1.forEach(a2)
function left_right(x)
{   var y= x.reverse();
    console.log("x = "+x);
    console.log("y = "+ y);
    for(var i=0; i<x.length;i++)
    {
        if(x[i]==y[i])
          continue;
        else
        console.log("false");
        
    }
    return "True";
}
var a1=[1,1,2,2,1,1];
a11=a1.reverse();

var a2=[3,2,1,3,2,1];
console.log(left_right(a1));
console.log(left_right(a2));

function isEqualFromLeftToRight(arr) {
    const n = arr.length;
    for (let i = 0; i < n / 2; i++) {
      if (arr[i] !== arr[n - i - 1]) {
        return false;
      }
    }
    return true;
  }
  
  const myArray = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  console.log(isEqualFromLeftToRight(myArray));
//   right to left ----
function nnnn(num) {

    let d = num.toString().split('');
    let mid = Math.floor(d.length / 2);

    for (let i = 0; i < mid; i++) {
      if (d[i ]!== d[d.length - 1 - i]) {
        return false;
      }
    }

    return true;
  }
