#include <bits/stdc++.h>
#include<iostream>
using namespace std;

int main()
{
   int a[] =  {-2, -3, 4, -1, -2, 1, 5, -3};
   int n = sizeof(a)/sizeof(a[0]);
   int max_so_far = a[0];
   int curr_max = a[0];
   for (int i = 1; i < n; i++)
   {
      if (a[i]>curr_max+a[i])
      {
         curr_max=a[i];
      }
      else
      {
         curr_max=curr_max+a[i];
      }
      if (curr_max>max_so_far)
      {
         max_so_far=curr_max;
      }
   }
   cout << "Maximum contiguous sum is " << max_so_far;
   return 0;
}