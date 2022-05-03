#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main()
{
    int c, p;
    cin>>c>>p;
    vector<string> contri;
    map<string, map<string, int>> contri_skills;
    string name, skill_name;
    int n, lvl;
    for(int i=0; i<c; i++)
    {
        cin>>name>>n;
        contri.push_back(name);
        for(int i=0; i<n; i++)
        {
            cin>>skill_name>>lvl;
            contri_skills[skill_name][name] = lvl;
        }
    }
    string project_name;
    priority_queue<pair<float, string>> q;
    int d, s, b, r;
    map<string, vector<int>> project_info;
    map<string, map<string, int>> project_skills;
    map<string, vector<string>> mp;
    vector<string> all_skills;
    for(int i=0; i<p; i++)
    {
        cin>>project_name>>d>>s>>b>>r; //no of days, score, best before, skill number
        project_info[project_name].push_back(d);
        project_info[project_name].push_back(s);
        project_info[project_name].push_back(b);
        project_info[project_name].push_back(r);
        q.push({(float)s/b, project_name});
        all_skills.clear();
        for(int i=0; i<r; i++)
        {
            cin>>skill_name>>lvl;
            all_skills.push_back(skill_name);
            project_skills[project_name][skill_name] = lvl;
        }
        mp[project_name] = all_skills;
    }

    vector<vector<string>> answer;
    vector<string>temporary;
    int size1=100, prev=0;
    unordered_set<string> st;
    
    // while(!q.empty())
    // {
    //     cout<<q.top().second<<" ";
    //     cout<<q.top().first<<"\n";
    //     q.pop();
    // }
    
    while(!q.empty())
    {
        size1 = q.size();
        if(size1==prev) break;        
        prev = size1;
        for(int o = 0; o<size1; o++){
            temporary.clear();
            string curr_name = q.top().second;
            float score = q.top().first;
            q.pop();
            vector<int> curr_values = project_info[curr_name];
            bool check_skill = true;
            vector<string> project_contributors;
            vector<string> skill_used;    
            st.clear();
            for(int i = 0; i<mp[curr_name].size(); ++i)
            {
                string skill_req = mp[curr_name][i];
                // cout<<"Project name"<<curr_name<<" ";
                // cout<<"Skill req"<<p.first<<"\n";
                int skill_lvl_req = project_skills[curr_name][skill_req];
                auto it1 = contri_skills[skill_req].begin();
                
                for(it1 = contri_skills[skill_req].begin(); it1!=contri_skills[skill_req].end(); ++it1)
                {
                    pair<string, int> pp = *it1;
                    string person_name = pp.first;
                    int person_lvl = pp.second;
                    if(person_lvl >= skill_lvl_req && st.find(person_name)==st.end())
                    {
                        project_contributors.push_back(person_name);
                        st.insert(person_name);
                        skill_used.push_back(skill_req);
                        break;
                    }
                }
                if(it1 == contri_skills[skill_req].end())
                {
                    q.push({q.top().first-0.0001, curr_name});
                    break;
                }
            }
            if(project_contributors.size() == project_skills[curr_name].size())
            {
                temporary.push_back(curr_name);
                for(int i=0; i<project_contributors.size(); i++)
                {
                    int bande_ka_level = contri_skills[skill_used[i]][project_contributors[i]];
                    int requirement_level = project_skills[curr_name][skill_used[i]];
                    if(bande_ka_level == requirement_level || bande_ka_level - requirement_level == -1)
                    {
                        contri_skills[skill_used[i]][project_contributors[i]]++;
                    }
                    temporary.push_back(project_contributors[i]);
                }
                answer.push_back(temporary);
            }
        }
    }
    cout<<answer.size()<<"\n";
    for(int i=0; i<answer.size(); i++)
    {
        cout<<answer[i][0]<<"\n";
        for(int j=1; j<answer[i].size(); j++)
        {
            if(j==answer[i].size()-1)
                cout<<answer[i][j]<<"\n";
            else cout<<answer[i][j]<<" ";
        }
    }

    return 0;
}