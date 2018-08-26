# Combinations and permutations using recursion

def comb_no_replace(items, n):
	if n == 0:
		yield []
	else:
		for i in range(len(items)):
			for cc in comb_no_replace(items[:i] + items[i+1], n-1):
				yield [items[i]] + cc

def comb_w_replace(items, n):
	if n == 0:
		yield []
	else:
		for i in range(len(items)):
			for cc in comb_w_replace(items[i+1:], n-1):
				yield [items[i]] + cc

def permutation(items):
	return comb_no_replace(items, len(items))

def selection(items, n):
	if n == 0:
		yield []
	else:
		for i in range(len(items)):
			for ss in selection(items, n-1):
				yield [items[i]] + ss

