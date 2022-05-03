#include <bits/stdc++.h>
using namespace std;

int main()
{
    char str[]= "abbbhg";
    int n = sizeof(str) / sizeof(str[0]);
    int index = 0;
    for (int i=0; i<n; i++) 
    {
	    int j;
        char a,b;
	    for (j=0; j<i; j++)
        {
            a=str[i];
            b=str[j];
            if (str[i] == str[j])
		        break;
        }
        if (j == i)
		    str[index++] = str[i];
    }
    cout<<str;
    return 0;
}
