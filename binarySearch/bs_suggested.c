#include <stdio.h>

int binary_search(int primes[], int num, int list_length);

int main(void){
	int num_list[]={2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97}, user_num, length_of_list;
	printf("Enter a prime number from 1 to 100 : ");
	scanf("%d", &user_num);
	length_of_list = sizeof(num_list)/sizeof(num_list[0]);
	binary_search(num_list,user_num,length_of_list);
	return 0;
}

int binary_search(int primes[], int num, int list_length){
	int guess, max, min, count;

	max = list_length - 1; //Cannot get length in function. When array is passed as arg, the pointer to the array is passed. so sizeof(array) will be size of the pointer only.
	min = 0;
	count = 0;

	while(max >= min){
		guess = (max+min)/2;
		count++;
		if(primes[guess] > num){
			max = guess - 1;
		} else if (primes[guess] < num){
			min = guess + 1;
		} else {
			printf("The number is int he list! Index : %d\n",guess);
			printf("Took %d guesses\n", count);
			return guess;
		}
	}
	printf("The number is not in the list.\n");
	return -1;
}


