#include <iostream>
using std::cout;

#include <vector>
using std::vector;

#include <unordered_map>
using std::unordered_map;

vector<int> algorithm(vector<int>& numbers, int target);

int main() {
    cout << '\n';

    vector<int> numbers = {2, 7, 11, 15};
    int target = 9;

    vector<int> result = algorithm(numbers, target);

    cout << "result:\n";

    for (int i = 0; i < result.size(); ++i)
        cout << i << ' ';
    
    cout << "\n\n";
    return 0;
}

vector<int> algorithm(vector<int>& numbers, int target) {
    const int size = numbers.size();
    
    unordered_map<int, int> map;
    map.reserve(size - 1);

    for (int i = 0; i < size; ++i) {
        int number = numbers.at(i);
        int match = target - number;

        if (map.find(match) != map.end())
            return vector<int>({map.at(match), i});
        
        map[number] = i;
    }
}