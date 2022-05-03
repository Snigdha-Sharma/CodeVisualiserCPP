#include <bits/stdc++.h>
using namespace std;

int main()
{
    int k=6;
    int nums[9]={12,67,45,1,0,98,456,1000,13};
    priority_queue<int> pq;
    for (int i=0;i<9;i++)
    {
        if (pq.size()<k)
        {
            pq.push(nums[i]);
        }
        else
        {
            if (nums[i]<pq.top())
            {
                pq.pop();
                pq.push(nums[i]);
            }
        }
    }
    cout<<pq.top();  
    return 0;
}