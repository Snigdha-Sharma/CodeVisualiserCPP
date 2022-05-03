#include <bits/stdc++.h>
using namespace std;

struct Node
{
    int val;
    Node *next;
};

int main()
{
    int noOfNodes=0;
    Node *p=new Node(),*list=p;
    p->val=99;
    p->next=NULL;
    for (int i=1;i<10;i++)
    {
        Node *nnode=new Node();
        nnode->val=i;
        nnode->next=NULL;
        p->next=nnode;
        p=p->next;
    }
    while(list)
    {
        noOfNodes++;
        list=list->next;
    }
    cout<<noOfNodes<<endl;
    return 0;
}