#include <bits/stdc++.h>
using namespace std;

int main()
{
    stack<int> st;
    for (int i=0;i<6;i++)
    {
        st.push(i*2);
        cout<<st.top()<<" ";
    }
    while(!st.empty())
    {
        st.pop();
    }
    return 0;
}