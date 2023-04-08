// 1-Write a function to find the largest element in an array.
    const first=[5,7,2,9,4,1,2];
    console.log(first);
    function largestElement(x)
    {
        let largest=0;
        for(let i=0;i<x.length;i++)
        {
            if(x[i]>largest)
            largest=x[i];
        }
        return "largest is "+largest;
    }
    console.log( largestElement(first));

// 2-Write a function to find the smallest element in an array.
// const numbers = [5, 3, 8, 1, 9, 2];
// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

console.log(smallestNumber);

function smallestElement(x)
    {
        let smallest=x[0];
        for(let i=1;i<x.length;i++)
        {
            if(x[i]<smallest)
            smallest=x[i];
        }
        console.log("smallest is "+smallest);
    }
smallestElement(first);
// 3-Write a function to find the sum of all elements in an array.
function elementsSum(x)
{
    let sum=0;
    for(let a=0; a<x.length; a++)
    {
        sum+=x[a];//sum=sum+x[a]
    }
    return sum;
}
console.log("sum= "+elementsSum(first));
// 4-Write a function to find the average of all elements in an array.
function average(x)
{
    let sum=0;
    for(let a=0; a<x.length; a++)
    {
        sum+=x[a];//sum=sum+x[a]
    }
    let avg=sum/x.length;
    console.log("average= "+avg); 
}
average(first);
// 5-Write a function to find the median of all elements in an array.
function median(x)
{
    x.sort();
    // console.log(x);
    if(x.length%2==0)
    return (x[x.length/2] + x[x.length/2-1])/2;
    else
    return x[Math.floor(x.length/2)];
    
}
console.log("median = "+median(first));

// 6-Write a function to remove all duplicates from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr); // Output: [1, 2, 3, 4]
    
// 7-Write a function to sort an array in ascending order.

// 8-Write a function to sort an array in descending order.

// 9-Write a function to shuffle the elements of an array randomly.
