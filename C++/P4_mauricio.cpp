#include<iostream>
#include<time.h>
#include<stdlib.h>
using namespace std;

main()
{
int i=0, n, c, casas, m=0, z;
int x;

cout<< "Forneca a quantidade de numeros a serem armazenados: ";
cin>> c;
int vetor[c];

casas=c;

while(casas > m * m)
{
	m++;
	
}

int matriz[m][m];	

while(i<c)
{
	cout<<" Forneca o [" <<i<< "] numero natural: ";
	cin>>vetor[i];
	if(vetor[i]>0)
	i++;
}
	

z=0;	
for(i=0; i<m; i++)
for(n=0; n<m; n++)
{
matriz[i][n] = vetor[z];
z++;

if(z==c)
z=0;

cout<< matriz[i][n];

}	


	

	
	
	
cout<<"\n";
system("pause");	
}
