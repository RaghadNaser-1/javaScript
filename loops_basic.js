// 1- Write a program that prints numbers from 1 to 10 using a for loop.

for(var num=1;num<=10;num++)
{
console.log(num);
}

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
for(var num1=2;num1<=10;num1+=2)
{
console.log(num1);
}

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
var num2=1;
while(num2<=10)
{
    console.log(num2);
    num2+=2;
}

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
var num3= prompt("enter a number",1);
for(var i=1;i<=10;i++)
{
console.log(num3*i);
}

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
var sum=0,x=1;
while(x<=100)
{
    sum+=x;
    x++;
}
console.log("sum= "+sum);

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
var num4= prompt("enter a number",1);
var f=1;
for(var a=1;a<=num4;a++)
{
    f*=a;//f=f*a
}
console.log("factorial= "+f);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
var n4= prompt("enter a number",1);
var n1=0,n2=1,n3=0;
console.log(n1+"\n"+n2);
while(n3<=n4)
{
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
}

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20 using a while loop.
var b=20;
while(b>=1)
{
    console.log(b);
    b-=5;//b=b-5
}


