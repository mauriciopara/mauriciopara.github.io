#include<iostream>
#include<stdlib.h>
#include<time.h>
using namespace std;

main()
{
	int i;
	int tam=5;
	int x=tam;
	int vetor1[tam] = {1,1,2,2,2};
	int vetor2[tam] = {1,1,2,2,2};
	int vetor3[x];
	
	for( i=0; i<x; i++)
	{
		vetor3[i] = vetor1[i] + vetor2[i] ;
		cout<< vetor3[i];
	}
cout<<"\n";
	system("pause");	
}
