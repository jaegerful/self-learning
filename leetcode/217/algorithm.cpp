#include <iostream>
using std::cout;

#include <unordered_map>
using std::unordered_map;

#include <vector>
using std::vector;

bool algorithm(const vector<int>& numbers);

int main() {
    cout << '\n';

    vector<int> first = {1, 2, 3, 1};
    bool result = algorithm(first);

    cout << "result: " << result << '\n';

    cout << '\n';
    return 0;
}

bool algorithm(const vector<int>& numbers) {
    unordered_map<int, bool> map;

    const int size = numbers.size();
    map.reserve(size);

    for (int i = 0; i < numbers.size(); ++i) {
        int number = numbers.at(i);
        
        if (map.find(number) != map.end())
            return true;

        map.insert({number, true});
    }

    return false;
}