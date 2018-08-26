from math import floor

def binary_search(num_list, find):
    u_limit = len(num_list) - 1
    l_limit = 0
    count = 0

    while u_limit >= l_limit:
        guess = floor((u_limit+l_limit)/2)
        count += 1
        if num_list[guess] > find:
            u_limit = guess - 1
        elif num_list[guess] < find:
            l_limit = guess + 1
        else:
            print("The number is the the list. Index : {}".format(guess))
            print("Took {} guess(es)".format(count))
            return guess
    else:
        print("The number is not in the list.")
        return -1

primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
          41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
user_num = int(input("Please enter a prime number from 1 to 100 : "))


binary_search(primes, user_num)
