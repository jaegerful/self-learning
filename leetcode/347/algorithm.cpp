#include <map>
using std::unordered_map;

#include <vector>
using std::vector;

#include <iostream>
using std::cout;

vector<int> algorithm(vector<int>& numbers, int level);

int main() {
    cout << '\n';

    vector<int> first = {1, 1, 1, 2, 2, 3};
    vector<int> solutions = algorithm(first, 2);

    cout << "solutions for first: ";

    int i;

    for (i = 0; i < solutions.size() - 1; ++i)
        cout << i << ", ";

    cout << i << '\n';

    cout << '\n';
    return 0;
}

vector<int> algorithm(vector<int>& numbers, int level) {
    
    /* build hashtable w/ mapping: element -> count. */

    unordered_map<int, int> elements_to_counts;

    for (int i = 0; i < numbers.size(); ++i)
        ++elements_to_counts[numbers[i]];

    /* invert hashtable to produce array w/ mapping: count -> elements. */

    vector<int>* counts_to_elements = new vector<int>[numbers.size()];

    for (unordered_map<int, int>::iterator iterator = elements_to_counts.begin(); iterator != elements_to_counts.end(); ++iterator)
        counts_to_elements[iterator->second - 1].push_back(iterator->first);

    /* iterate array backwards to determine 'level' most frequent elements. */

    vector<int> solutions;

    for (int i = numbers.size() - 1; i > -1 && level > 0; --i) {
        for (int j = 0; j < counts_to_elements[i].size() && level > 0; ++j) {
            solutions.push_back(counts_to_elements[i][j]);
            --level;
        }
    }

    return solutions;
}