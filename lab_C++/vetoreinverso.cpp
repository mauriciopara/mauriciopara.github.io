#include<iostream>
#include<stdlib.h>
#include<time.h>
using namespace std;

int inverte(int colunas, int vetorteste[])
{
	int i, j;
	
	int inverso[colunas];
	j=colunas-1;
	
	
	
	for(i=0; i<colunas; i++)
	{
		inverso[i]=vetorteste[j];
		j--;
	}
	
	for(i=0; i<colunas; i++)
	{
		vetorteste[i]=inverso[i];

	}

    
}

main()
{
	int n, x;
	int vetor1[x];
	
	
cout<< "Digite a quantidade de colunas do vetor1: ";
cin>> x;
cout<< "Digite um valor para a coluna correspondente.\n";

for(n=0; n<x; n++)
{
	cout<< n<< " = ";
	cin>> vetor1[n];
}



inverte(x, vetor1);

cout<<"O valor invertido corresponde a ;) \n";
for(n=0; n<x; n++)
{
	cout<< vetor1[n];
}


    
	
	
cout<< "\n";
    system("pause");	
}
