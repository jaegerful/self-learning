#include <unordered_map>
using std::unordered_map;

#include <string>
using std::string;

#include <array>
using std::array;

#include <vector>
using std::vector;

using std::hash;
typedef array<int, 26> anagram;

struct hasher {
    size_t operator()(const anagram& counts) const {
        string aggregate("");

        for (int i = 0; i < 26; ++i)
            aggregate += counts[i];

        return hash<string>()(aggregate);
    }
};

typedef unordered_map<anagram, vector<string>, hasher> hashmap;

class solution {
    vector<vector<string>> algorithm(vector<string>& words) {
        hashmap table;
        anagram counts;

        string current_string;

        char character;
        int index_for_character;
        
        for (int i = 0; i < words.size(); ++i) {
            /* construct anagram for string. */

            counts.fill(0);
            current_string = words[i];

            for (int j = 0; j < current_string.size(); ++j) {
                character = current_string[j];
                index_for_character = character - 'a';

                counts[index_for_character] = counts[index_for_character] + 1;
            }

            /* append string to entry in table. */

            table[counts].push_back(current_string);
        }

        /* copy values from table into 'solutions'. */

        vector<vector<string>> solutions;

        for (hashmap::iterator i = table.begin(); i != table.end(); ++i)
            solutions.push_back(i->second);

        return solutions;
    }
};

int main() {
    return 0;
}