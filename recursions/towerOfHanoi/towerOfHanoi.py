# An example of how recursion can solve a large problem by identifying a small problem.
# Given left, middle, right, To move a pile from left to right,
#	We must first move n-1 disk from left to middle,
#	then, the one, largest disk to right.
# 	then the n-1 disk from middle to right.
# The base case starts from the top of the tower, where large disk is moved one by one to the destination

# highest level: move n from left to right, using middle as the spare tower.
steps_count = 0
def move(n, left="left", right="right", middle="middle"):
	if n > 0:
		global steps_count
		steps_count += 1
		
		move(n-1, left, middle, right)
		print("move {} to {}".format(left, right))
		move(n-1, middle, right, left)

move(3)
print(steps_count)