// 1- Write a program to declare two numbers. If both numbers are greater than 10, 
//print "Both numbers are greater than 10". Otherwise, print "At least one number is not greater than 10".
var x=5,y=11;
var z=x+y;
if(z>20)//x>10&&y>10
{console.log("Both numbers are greater than 10");}
else
{console.log("At least one number is not greater than 10");}


// 2- Write a program to declare a username and a password. 
//If both the username and password are correct, print "Access granted". Otherwise, print "Access denied".
var username="Raghad", password="12345";
if(username=="Raghad" && password=="12345")//use three equal ===
{console.log("Access granted");}
else
{console.log("Access denied");}


// 3- Write a program to declare a number. If the number is between 10 and 20 (inclusive), print "The number is between 10 and 20".
// Otherwise, print "The number is not between 10 and 20".
var number=25;
if(number>10 && number<=20)
{console.log("The number is between 10 and 20");}
else
{console.log("The number is not between 10 and 20");}


// 4- Write a program that declare age and whether they have a driver's license (yes or no). 
//If the user is 18 or older and has a driver's license, print "You can drive". Otherwise, print "You cannot drive".
var age=24;
var license=false;
if(age>=18 && license==true)
{console.log("You can drive");}
else
{console.log("You cannot drive");}

// 5- Write a program to declare a number. 
//If the number is greater than 10 or less than 0, print "Invalid number". Otherwise, print "Valid number".
var n1=30;
if(n1>10 || n1<0 )
{console.log("Invalid number");}
else
{console.log("Valid number");}

// 6- Write a programto declare a number. 
//If the number is between 5 and 10 (inclusive) or between 20 and 25 (inclusive), print "The number is valid". 
//Otherwise, print "The number is not valid".
var n2=15;
if(n2>=5&n2<=10 || n2>=20&n2<=25)
{console.log("The number is valid");}
else
{console.log("The number is not valid");}


// 7- to declare a password. If the password is "secret" or "password", print "Access granted". 
//Otherwise, print "Access denied".
var password2="password";
if(password2=="password" || password2 == "secret")
{console.log("Access granted");}
else
{console.log("Access denied");}


// 8- Write a program to declare a number. If the number is between 0 and 100 (inclusive) and is even, 
//print "The number is even and between 0 and 100". Otherwise, print "The number is not even and/or not between 0 and 100".
var num3=102;
if(num3>=0 && num3<=100 && num3%2==0)
{console.log("The number is even and between 0 and 100");}
else
{console.log("The number is not even and/or not between 0 and 100")}


// 9- Write a program to declare two numbers. If either number is negative, print "At least one number is negative". 
//Otherwise, print "Both numbers are positive".
var num4=23, num5=-44; 
if(num4>0 && num5>0) //use or 
{console.log("Both numbers are positive");}
else
{console.log("At least one number is negative");}


// 10- Write a program to declare age and whether they are a student (yes or no). 
//If the user is under 18 or is a student, print "You qualify for a discount". Otherwise, print "You do not qualify for a discount".
var age2=21;
var isStudent2=true;
if(age2<18 || isStudent2==true)
{console.log("You qualify for a discount");}
else
{console.log("You do not qualify for a discount");}