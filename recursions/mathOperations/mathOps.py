#All operations can be done iteratively, but recursion makes it more intuitive.
# also, code is normally shorter with recursion.
# One bad thing about recursive is the about of memory it takes, which can result in stack overflow
# Also, it is much slower when input becomes very large.
# But the way to think about problems that is taught by recursion is valuable when it comes to solving complex problems.

#Solving problems using recursion
# Break down the problem into simpler part
# Identify the base case(The case where you can get the answer directly)
# Write the code at the highest level, ignoring the lower level operations.

#factorial
# Breaking down the problem, n! = n * (n-1)!
# The base case is when n = 1 or n = 0, when factorial of either will give you 1

def factorial(n):
	if n == 0:
		return 1
	else:
		return n * factorial(n-1)

print(factorial(5))

#power function
# n^a = n * n^(a-1)
# base case is when power is 0, it will return 1
def power(n, p):
	if p == 0:
		return 1
	else:
		return n * power(n, p-1)

print(power(4, 12))

#finding minimum number ( maximum can be implemeneted the same way.)
# Minimum of a list is taking one, and comparing to the minimum and the rest of the list.
# Base case is when there is only one number left in the list, hence the minimum is itself.
def mininmum(num_list):
	if len(num_list) == 1:
		return num_list[0]

	else:
		min1 = num_list[0]
		min2 = mininmum(num_list[1:])

		if min1 < min2:
			return min1
		else:
			return min2
		

print(mininmum([-3424, 4, 5, 7, 9, 2, -123, 56, 0]))

#fibonacci
# The nth terms in (n-1) + (n-2) terms of fibonacci
# Taking the first fibonacci number as 1, first and second fib number will be 1.

def fibonacci(n):
	if n < 3:
		return 1
	else:
		return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(15))

#A faster, non-recursive way to compute fibonacci number.
def fastfib(n):
	p = 1
	pp = 0
	nth_fib = 0
	for i in range(1, n):
		nth_fib = p + pp
		pp = p
		p = nth_fib

	return nth_fib

print(fastfib(15))

