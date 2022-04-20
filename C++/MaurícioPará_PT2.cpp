//Maurício Pará Roza Muniz de Aguiar DATA:17/03/2021
#include<iostream>
#include<time.h>
#include<stdlib.h>
using namespace std;

int retornaaposicao(int x1)
{
int i=1;
int z=1;
int n;

if(x1<=0)
return 0;

if( x1 % 2 == 0)
    {
        for(n = 2; n != x1; n = n + 2)
        {
            i = i + z;
            z = i + z;
        }
       
       return z;
    }
    
else 
    {
        for(n= 1; n!= x1; n = n + 2)
        {
           i = i + z;
           z = i + z;
        }
       if(i>0)
        return i;
    }

}




main()
{
	
int k = 40;
int vetor[k];
int i;
float z;
int flagdeerro=0;


cout<< "\n ITEM 2: \n";

for(i=0; i<=k; i++)
{
	if(i<0)
	{
	 cout<<	"valor inválido";
	 flagdeerro++;
	 break;
	}
	z=retornaaposicao(i);
	vetor[i] =z;
		
}

float t =0;
float y =0;
float r =0;



if(flagdeerro==0)
for(i=1; i<k; i++)
{
    t = vetor[i+1];
    y = vetor[i];
    r = t/y;
    cout<< "\n  "<<vetor[i+1]<< "/"<< vetor[i] <<" = " <<r<< "\n"  ;
}






cout<<"\n";
system("pause");
}
