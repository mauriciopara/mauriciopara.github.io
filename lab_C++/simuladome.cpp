////Fazer um único programa (somente o main) para:
//1) Ler do teclado a quantidade de linhas e de colunas de uma matriz.
//2) Ler os elementos da matriz.
//3) Copiar os elementos da matriz para um vetor de tamanho que comporte exatamente os elementos da matriz.
//4) Imprimir os índices do vetor que armazenam números pares.

#include<iostream>
#include<stdlib.h>
#include<time.h>
using namespace std;

main()
{
 int i, n, x,c, y, z=0;
 
 cout<< "Digite o valor da linha  e da coluna(respectivamente): \n";
 cin>>x;
 cin>>y;	
 
 cout<< "\nDigite um valor para sua linha e coluna correspondente: \n";
 c= x*y;

int matrix[x][y];
int vetor[c];
	
for(i=0; i<x; i++)
for(n=0; n<y; n++)
{
cout<< "[" <<i<< "]" "[" <<n<< "] = ";
cin>>matrix[i][n];
}	


	
for(i=0; i<x; i++)
for(n=0; n<y; n++)
{

vetor[z] = matrix[i][n];
z++;	
}	

cout<<"índices do vetor que armazenam numeros pares: \n";
for(i=0; i<c; i++)
{
	vetor[i];
	if(vetor[i] %2 == 0)
	cout<< i<< "\n";
}

	
	
	
cout<<"\n";
system("pause");	
}
