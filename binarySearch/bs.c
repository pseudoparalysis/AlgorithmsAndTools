#include <stdio.h>

//This program accepts a user input and checks if it is within an ordered list.

int main(void){
	int num_list[]={2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97}, find, stop, guess, min ,max;
	// int i,j;

	// srand(time(NULL)); 
	/*time(NULL) is the time now, which is the number of seconds from epoch. 
	Since number of seconds changes with time, seed is unqiue, hence the rand() can produce more random numbers*/
	// answer = (rand() % 100) + 1;
	printf("Enter a prime number from 1 to 97 : ");
	scanf("%d", &find);
	/*random number from 1 to 100. Taking the remainder works because when the random number is divided by 100, there is no way the remainder can be less than 0 or more than 99.
	So to get 1 to 100, just add 1.*/

	// for(j = 0; j < 100; j++){ //To print the array
	// 	printf("%d ",num_list[j]);
	// }

	min = 0;
	max = sizeof(num_list)/sizeof(num_list[0]);

	do{
		guess = (min+max)/2;
			printf("%d\n", num_list[guess]);
			if(num_list[guess] > find){
				max = guess - 1;
				printf("max : %d\n", max);
			} else if(num_list[guess] < find) {
				min = guess + 1;
				printf("min : %d\n", min);
			} else {
				stop = 1;
				printf("The number in the the list. Index : %d", guess);
			}

			//Terminate if cannot find
			if(min > max){
				stop = 1;
				printf("The number is not found.");
			}

	}while(stop != 1);
	return 0;
}
