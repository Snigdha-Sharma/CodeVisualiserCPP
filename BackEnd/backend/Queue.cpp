#include <bits/stdc++.h>
using namespace std;

int main()
{
    string stream="aabc";
    queue<char> q;
    vector<int> freq(26,0);
    for (int i=0;i<stream.size();i++)
    {
        q.push(stream[i]);
        freq[stream[i]-'a']++;
        while(!q.empty())
        {
            if (freq[q.front()-'a']==1)
            {
                cout<<q.front()<<" ";
                break;
            }
            else
            {
                q.pop();
            }
        }
        
        if (q.empty())
        {
            cout<<"-1 ";
        }
    }
    return 0;
}