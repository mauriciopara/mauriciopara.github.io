#include<iostream>
#include<time.h>
#include<stdlib.h>
using namespace std;

main()
{
int i, n, c, l, y, x=0, z;


cout<< "Digite o valor de linhas: ";
cin>>l;
cout<< "Digite o valor de colunas: ";
cin>>c;

	
int matriz[l][c];
y = l*c;
int vetor[y];
int vetor1[y];

cout<< "Digite o valor de acordo com a coluna e a linha: \n";
for(i=0; i<l; i++)
for(n=0; n<c; n++)
{
	cout<< "[" <<i<< "] [" <<n<< "] =";
	cin>>matriz[i][n];
}
	
		
for(i=0; i<l; i++)
for(n=0; n<c; n++)
{
    vetor[x]  = matriz[i][n];
	x++;
}	
///////////////////////////

z = y -1;
	
for(i=0; i<y; i++)
{
	vetor1[i] = vetor[z];
	z--;
	
}

for(i=0; i<y; i++)
{
	vetor[i] = vetor1[i];
}

/////////////////////////
x=0;

for(i=0; i<l; i++)
{
cout<< "\n|";
for(n=0; n<c; n++)
{
    matriz[i][n]  = vetor[x];
   
	cout<< matriz[i][n] << " ";
	x++;
}
cout<< "|";
}
	
cout<<"\n";
system("pause");

}
