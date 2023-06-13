#include <iostream>
using std::cout;

#include <string>
using std::string;

#include <map>
using std::map;

bool algorithm(string s, string t);

int main() {
    cout << '\n';

    bool result = algorithm("anagram", "nagaram");
    cout << "result: " << result << '\n';

    cout << '\n';
    return 0;
}

bool algorithm(string s, string t) {
    int map[26];

    for (int i = 0; i < 26; i++)
        map[i] = 0;
    
    for (int i = 0; i < s.size(); ++i)
        ++map[s.at(i) - 'a'];

    for (int i = 0; i < t.size(); ++i)
        --map[t.at(i) - 'a'];

    for (int i = 0; i < 26; ++i) {
        if (map[i] != 0)
            return false;
    }
    
    return true;
}