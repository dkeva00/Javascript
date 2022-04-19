

/*## Give an array, every element appear twice except for one, find that element

## example given array: [1,1,2,2,3,4,4]
## expect result: 3

let a = [1,1,2,2,3,4,4];
let b = [1,1,2,2,3,3,3,4,4];

for (let i= 0;i < a.lenght;i++){
  for(let j = 1;j < a.lenght;j++){
    if(a[i] == a[j] && a.contains(a[j])){
      let count = 0;
    	  
      continue;
    }else{
      console.log(a);
    }
  	
  }  
}*/

function singlenumber2(a)
{
    // size of the array
    let N = a.length;

    // umap for finding frequency
    let fmap=new Map();
    
    // traverse the array for frequency
    for(let i = 0; i < N;i++)
    {
        if(!fmap.has(a[i]))
            fmap.set(a[i],0);
         
        fmap.set(a[i],fmap.get(a[i])+1);
    }
    
    // iterate over the map
    for(let [key, value] of fmap.entries())
    {
        
        // check frequency whether it is one or not.
        if(value==1)
        {
            
            // return it as we got the answer
            return key;
        }
    }
}
 
// Driver code
 
// given array
let array4 = [12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7]; 
// printing the returned value
console.log("The element with single occurrence is "+singlenumber2(array4));

let a = [ 1, 1, 2, 2, 3, 4, 4 ];
console.log("The element with single occurrence is " + singlenumber2(a));

let b = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5];
console.log("The element with single occurrence is " + singlenumber2(b));

/* We define super digit of an integer P using the following rules:
Given an integer, we need to find the super digit of the integer.
If P has only 1 digit, then its super digit is P.
Otherwise, the super digit of P is equal to the super digit of the sum of the digits of P.
For example, the super digit of P will be calculated as:
super_digit(9875)   	9+8+7+5 = 29 
	super_digit(29) 	2 + 9 = 11
	super_digit(11)		1 + 1 = 2
	super_digit(2)		= 2 

function super_digit(x){
  let y = 0;
  let xArray = x.
  if(x.lenght > 1){
    for(let i = 0; i < x.lenght; i++){
      y += x[i];
    }
    return y;
  }  
  //return super_digit(y);
  return x;
}


console.log("Super digit: " + super_digit(9875));*/

function super_digit(n)
{
    if (n == 0){
        return 0;
    }else{
        //console.log((n % 10));
        //console.log((n/10));
        //console.log(n % 10 + super_digit(parseInt(n / 10)));
        return (n % 10 + super_digit(parseInt(n / 10)));
    }
}
 
// Driven code
var num = 9875;
var result = super_digit(num);
console.log( "Sum of digits in " + num + " is "+ result );



//OTROS EJEMPLOS PARA PRIMER EJERCICIO:
function getSingle(arr)
{
    let n = arr.length;
    let ones = 0, twos = 0;
    let common_bit_mask;

    for (let i = 0; i < n; i++) {
        /*"one & arr[i]" gives the bits that are there in
        both 'ones' and new element from arr[]. We
        add these bits to 'twos' using bitwise OR*/
        twos = twos | (ones & arr[i]);

        /*"one & arr[i]" gives the bits that are
        there in both 'ones' and new element from arr[].
        We add these bits to 'twos' using bitwise OR*/
        ones = ones ^ arr[i];

        /* The common bits are those bits which appear third time
        So these bits should not be there in both 'ones' and 'twos'.
        common_bit_mask contains all these bits as 0, so that the bits can
        be removed from 'ones' and 'twos'*/
        common_bit_mask = ~(ones & twos);

        /*Remove common bits (the bits that appear third time) from 'ones'*/
        ones &= common_bit_mask;

        /*Remove common bits (the bits that appear third time) from 'twos'*/
        twos &= common_bit_mask;
    }
    return ones;
}

// Driver Code

let arr = [ 3, 3, 2, 3 ];
console.log("The element with single occurrence is " + getSingle(arr));
     
function getSingle2(arr)
{
    let n = arr.length;
    // Initialize result
    let result = 0;
    let x, sum;

    // Iterate through every bit
    for (let i = 0; i < n; i++)
    {

        // Find sum of set bits at ith position in all
        // array elements
        sum = 0;
        x = (1 << i);
        for (let j = 0; j < n; j++)
        {
            if (arr[j] & x)
                sum++;
        }

        // The bits with sum not multiple of 3, are the
        // bits of element with single occurrence.
        if ((sum % 3) != 0)
            result |= x;
    }
    return result;
}
 
// Driver code
let array2 = [ 12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7 ];
console.log("The element with single occurrence is " + getSingle2(array2));

function singleNumber(a)
{
    let n = arr.length;
    let s = new Set(a);

    let arr_sum = 0; // sum of array
     
    for(let i=0;i<a.length;i++)
    {
        arr_sum += a[i];
    }
     
    let set_sum = 0; // sum of set
    for (let i of s)
    {
        set_sum +=i;
    }
     
    // applying the formula.
    return Math.floor((3 * set_sum - arr_sum) / 2);
}
    
// Driver code
let array3 = [12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7 ];   
console.log("The element with single occurrence is " + singleNumber(array3));