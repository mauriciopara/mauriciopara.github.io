#include<iostream>
#include<time.h>
#include<stdlib.h>
using namespace std;

main()
{
int i, n, l, c, x, z=0;	

cout<<"Fala filho, digita pro pai as linhas e as colunas da matriz: \n";
cout<<"Linhas  = "; cin>>l;
cout<<"Colunas = "; cin>>c;

int matriz[l][c];

x = l*c;

int vetor[x];

if( c>0 && c<=10 && l>0 && l<=10 )
{
	
	
cout<<"Digite o valor para sua linha e coluna correspondente: \n";
for(i=0;i<l;i++)
for(n=0;n<c;n++)	
{
	cout<< "\n  ["<<i<<"]["<<n<<"] = ";
	cin>> matriz[i][n];
}

for(n=0;n<c;n++)
for(i=0;i<l;i++)	
{
	vetor[z] = matriz[i][n];
	z++;
}

for(i=0;i<x;i++)
{
	cout<<"\n ["<<i<<"] =" <<vetor[i];
}


	
}	
else	
cout<<"\n Os numeros nao correspondem ao valor maximo e minimo da matriz.";	
	
cout<<"\n";
system("pause");	
}
