#Program to find a number by user in a list using binary search

def binary_search(num, num_list):
    u_limit = len(num_list) - 1
    l_limit = 0
    stop = 0

    while(stop != 1):
        guess = int((u_limit+l_limit)/2)

        if num_list[guess] > num:
            u_limit = guess - 1
        elif num_list[guess] < num:
            l_limit = guess + 1
        else:
            stop = 1
            print("The number is in the list. Index : {}".format(guess))

        if l_limit > u_limit:
            stop = 1
            print("The number is not in the list.")

prime_num = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
find_num = int(input("Please enter a prime number from 1 to 97 : "))

binary_search(find_num, prime_num)
    

