# Babylonian squareroot method

# Idea behind it.
# x = sqrt(n)
# x^2 = n
# x = n/x
# 2x = x + n/x
# x = (x + n/x)/2
# the series converges

def baby_sqrt(n):
	
	if n > 0:
		#initial values
		x_old = n/2 + 1
		x = n/2

		while abs(x_old - x) > 0.000001:
			x_old = x
			x = (x + n/x)/2
	else:
		print("Please enter only positive numbers.")
		x = None

	return x

print(baby_sqrt(0.44))