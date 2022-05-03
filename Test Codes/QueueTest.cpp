#include <bits/stdc++.h>
using namespace std;

int main()
{
    queue<int> q;
    for (int i=0;i<6;i++)
    {
        q.push(i*2);
        q.push(i*3);
        q.pop();
    }
    return 0;
}