#include<iostream>
#include<stdlib.h>
#include<time.h>
using namespace std;

main()
{
	int i,n;
	int vetor1[4]={1,1,1,1};
	int vetor2[4]={2,4,2,2};
	int vetor3[8];
	
	n=0;
	for(i=0; i<8; i=i+2)
	{
		n=0;
		vetor3[i] = vetor1[n];
		n=n+1;
	}
	
	n=0;
	for(i=1; i<8; i=i+2)
	{
		
		vetor3[i] = vetor2[n];
		n=n+1;
	}
	
	for(i=0; i<8; i++)
	{
		cout<< vetor3[i];
	}
	
	
	
	
	
	cout<< "\n";
	system("pause");
}
