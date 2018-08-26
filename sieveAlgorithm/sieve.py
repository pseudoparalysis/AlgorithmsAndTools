#Algorithm to generate prime number quickly.
import math
import time

def sieveAlgorithm(n):
	start_time = time.perf_counter()
	num_list_to_n = []
	prime_num_list = []
	upper_limit = int(math.sqrt(n))

	#Create list of number to n
	for i in range(0, n+1, 1):
		num_list_to_n.append(i)

	for j in range(0, upper_limit, 1):
		if num_list_to_n[j] > 1:
			for k in range(j**2, n+1, j):
				if num_list_to_n[k] > 0:
					num_list_to_n[k] = 0

	for p in range(2, n+1, 1):
		if num_list_to_n[p] > 0:
			prime_num_list.append(p)

	end_time = time.perf_counter()
	time_spent = end_time - start_time
	return prime_num_list, time_spent

prime_num_list_2000, time_spent = sieveAlgorithm(2000)

print(prime_num_list_2000)
print("Time taken: {:.10f}s".format(time_spent))