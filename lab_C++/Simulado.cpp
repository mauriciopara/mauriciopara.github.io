#include <iostream>
using namespace std;
main()
{
   int i, j, k, linhas, colunas;

   cout << "Numero de linhas da matriz ---> ";  cin >> linhas;
   cout << "Numero de colunas da matriz --> ";  cin >> colunas;

   int matriz[linhas][colunas];
   int vetor[linhas*colunas];

   i = 0;
   while (i<linhas)
   {
     j = 0;
     while (j < colunas)
     {
       cout << "Matriz[" << i << "][" << j << "] = ";
       cin  >> matriz[i][j];
       j = j + 1;
     }
     i = i + 1;
   }

   //Neste loop, estamos varrendo uma matriz e um vetor.
   //Seus índices não podem ser confundidos.
   k = 0;
   i = 0;
   while (i<linhas)
   {
     j = 0;
     while (j < colunas)
     {
       vetor[k] = matriz[i][j];
       k = k + 1;
       j = j + 1;
     }
     i = i + 1;
   }

   cout << "Indices com elementos pares:\n";
   i = 0;
   while (i < linhas * colunas)
   {
     if (vetor[i] % 2 == 0) cout << i << "\n";
     i = i + 1;
   }
}
