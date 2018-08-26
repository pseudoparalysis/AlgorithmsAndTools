//Must defind the variable, otherwise, adding aomething to a variable that is not defined will return NaN
//Summation of multiple of 5 and 3 under 1000

function sum3And5(){
	var total : number;
	
	console.log("Sum of multiples of 5 and 3 under 1000");
	total= 0;

	for( var i=1 ; i<1000 ; i++){
		if(i%3 === 0 || i%5 === 0){
			total += i;
		}
	}
	console.log(total);
}

//Sum of even-valued fibonacci terms, under 4million
function evenValuedFibNumSum(){
	console.log("Sum of even valued terms in the fibonacci sequence for terms <4mill")
	var firstNum : number = 0,
		secondNum : number = 1,
		nextNum : number = 0,
		sumOfEvenValuedTerms : number = 0;

	while(nextNum < 4000000){
		nextNum = secondNum + firstNum;
		firstNum = secondNum;
		secondNum = nextNum;
		if(nextNum%2 === 0){
			sumOfEvenValuedTerms += nextNum;
		}
	}

	console.log(sumOfEvenValuedTerms);
}


//finding the greatest prime factor of 600851475143
function greatestPrime(){
	console.log("Finding the greatest prime factor of 600851475143")
	var quotient : number = 600851475143,
		divisor : number = 2;

	//A multiple is just multiples of prime numbers.
	while(quotient > 1){
		if(quotient % divisor === 0){
			quotient /= divisor;
		} else{
			divisor += 1;
		}
	}

	//When the loop ends, divisor will be the largest prime factor.
	console.log(divisor);

}

//Finding the largest palindrome number obtained from product of two 3 digit numbers.
function palindrom3DigitMultiple(){
	console.log("Finding the largest palindromic number obtained from product of two 3 digit numbers.")

	var largestPalin : number = 0,
		toReverse,
		reversedProduct,
		product;

	for(var i=100 ; i<1000 ; i++){
		for(var j=100 ; j<1000 ; j++){
			product = j*i;
			toReverse = product;
			reversedProduct = 0;

			while(toReverse > 0){
				reversedProduct *= 10;
				reversedProduct += toReverse%10;
				toReverse = Math.floor(toReverse/10);
			}

			if(reversedProduct === product){
				if(product > largestPalin){
					largestPalin = product;
				}
			}
		}
	}

	console.log(largestPalin);
}

function smallestMultipleOf1To20(){
	console.log("smallestMultipleOf1To20");
	var primeNumberBelow20 : number[] = [],
		sieveArray: number[] = [],
		smallestMultiple: number = 1,
		largestPrimePower: number,
		isPrime : boolean = true,
		upperLimit: number = Math.sqrt(20);

	for(var i = 0; i < 21; i++) {
		sieveArray.push(i);
	}

	for(var j = 0; j < upperLimit; j++) {
		if(sieveArray[j] > 1) {
			for(var k = j*j; k < 21; k += j) {
				sieveArray[k] = 0;
			}
		}
	}

	for(var p = 2; p < 21 ; p++) {
		if(sieveArray[p] !== 0) {
			primeNumberBelow20.push(p);
		}
	}

	primeNumberBelow20.forEach(
		prime => {
			largestPrimePower = prime;
			while(largestPrimePower < 20){
				if(largestPrimePower * prime > 20){
					break;
				} else {
					largestPrimePower *= prime;
				}
			}

			smallestMultiple *= largestPrimePower;
	})

	console.log(smallestMultiple);
}

function squaredSumMinusSumOfSquared(){
	console.log("Square of sum of 1-100 minus sum of square of 1 to 100");
	var squaredSum: number = 0,
		sum: number = 0,
		sumOfSquared: number = 0,
		difference: number;

		for(var i = 1; i < 101; i++){
			sum += i;
			sumOfSquared += i*i;
		}

		squaredSum = sum*sum;
		difference = squaredSum - sumOfSquared;

		console.log(difference);
}

function prime10001st(){
	console.log("10001st Prime");
	var count: number = 1, // number "2" will contribute to the first count.
		isPrime: boolean;

	//Why check up to square root?
	// if n is not a prime, then it can be factored to a*b
	// this means that if sqrt(n) = m, n = m * m = a * b
	// 3 cases can happen
	// a = m, b = m
	// a < m, b > m
	// a > m, b < m
	// One of the factor will be definitely less than or equal to the squareroot.
	// Therefore, when we check up to sqrt(n), if n is not a prime, a factor will definitely appear.
	// If there is no factor till sqrt(n), then n is a prime.

	for(var i = 3;; i += 2) {
		isPrime = true;
		for(var j = 3, k = Math.sqrt(i); j <= k; j += 2) {
			if( i % j === 0) {
				isPrime = false;
			}
		}

		if(isPrime === true && count < 10001) {
			count += 1;
			if(count === 10001) {
				console.log(i);
				break;
			}
		}
	}
}

function pythagorasTripletsProduct() {
	console.log("Pythagoras triplets that adds up to 1000.");

	console.time("without math");
	for(var i = 1, k; i < 1000; i++) {
		for(var j = i + 1, a = 1000 - i; j < a; j++) {
			k = 1000 - j - i;
			if(k*k + i*i === j*j && k < i) {
				console.log(i*j*k);
				console.timeEnd("without math");
				break;
			}
		}
	}

	console.log("Improved version using pythagoras triplets formula")
	var x, y, z;

	//Some mathematician manage to find a way to find unique triplets.
	//given x, y and z are pythagoras triplets, they have a certain relationship
	// x = 2nm;
	// y = m^2 - n^2
	// z = m^2 + n^2
	// where m > n and m and n are integers.
	//Therefore, i our case, where x + y + z = 1000, if x y and z are pythagoras triplets,
	// 2nm + 2m^2 = 1000
	// m(n+m) = 500  --- used to check for values of n and m, which is then used to find x, y and z.
	//
	// n = (500/m) - m > 0, since n > 0
	// m < 22.36

	console.time("with math");
	for(var n = 1; n < 23; n++) {
		for(var m = n + 1; m < 23; m++) {
			if(m * (m + n) === 500) {
				x = 2*m*n;
				y = m*m - n*n;
				z = m*m + n*n;
				console.log(x*y*z);
				console.timeEnd("with math");
				break;
			}
		}
	}
}

function sumOfPrimeBelow2Mil() {
	console.log("sum of all prime below 2 million");
	var isPrime: boolean,
		primeSum: number = 2;

	console.time("sum by checking each number");
	for(var i = 3; i < 2000000; i += 2) {
		isPrime = true;
		for(var j = 3, k = Math.sqrt(i); j <= k; j += 2) {
			if( i % j === 0) {
				isPrime = false;
			}
		}

		if(isPrime === true) {
			primeSum += i;
		}
	}

	console.log(primeSum);
	console.timeEnd("sum by checking each number");

	var numArray: number[] = [],
		primeSum2: number = 0,
		upperLimit: number = Math.sqrt(2000000);

	//Create list from 2 to 2000000
	console.time("sieve");
	for(var i = 0; i < 2000000; i++) {
		numArray.push(i);
	}

	//Removing multiples of primes.
	for(var j = 0; j <= upperLimit; j++) {
		if(numArray[j] > 1) {
			for(var k = j*j; k < 2000000; k += j) {
				numArray[k] = 0;
			}
		}
	}

	//Adding all primes up
	for(var p = 2; p < 2000000; p++) {
		if(numArray[p] !== 0) {
			primeSum2 += numArray[p];
		}
	}

	console.log(primeSum2);
	console.timeEnd("sieve");
}


export {
	sum3And5,
	evenValuedFibNumSum,
	greatestPrime,
	palindrom3DigitMultiple,
	smallestMultipleOf1To20,
	squaredSumMinusSumOfSquared,
	prime10001st,
	pythagorasTripletsProduct,
	sumOfPrimeBelow2Mil
}

