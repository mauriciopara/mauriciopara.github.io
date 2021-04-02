#include<iostream>
#include<stdlib.h>
#include<time.h>
using namespace std;


main()
{
const int   linhas = 2;
const int  colunas = 3;
const int     K    = 10;
int M [2][3], i, j;

for(i=0; i<linhas; i++)
for(j=0; j<colunas; j++)
   {
		      cout<< "Forneca o elemento da linha  "<<i<< "  e da coluna, "<<j<<" respectivamente. \n";
		      cin>> M[i][j];
   }

for(i=0; i<linhas; i++)
for(j=0; j<colunas; j++)
{
  M[i][j]=M[i][j] * K;
}

for(i=0; i<linhas; i++)
for(j=0; j<colunas; j++)
{
	cout<< "\n" << M[i][j] << "\n";
	
}


cout<< "\n";
system("pause");
}
