import data from "../mock-data.js";

const hobbies = [
    "FOOTBALL",
    "BASKETBALL",
    "TENNIS",
    "SWIMMING",
    "READING"
];

export default {
    Query: {
        users() {
            return data;
        },
        user(_, args) {
            let { id } = args; // arguments are always strings.

            if (id === null) {
                return null;
            }

            id = parseInt(id, 10);

            if (isNaN(id)) { 
                return null;
            }

            return data.find(user => user.id === id);
        }
    },
    User: {
        hobby(parent, args, context, info) { // this resolver will always run, even if "hobby" is set for the current user.
            // "parent" holds the object that houses this field.
            // "context" holds an object that's shared across resolvers.
            // "info" holds metadata specific to this GraphQL request.
            return hobbies[Math.round(Math.random() * 4)];
        }
    },
    Mutation: {
        createUser(_, args) {
            const { input } = args;

            const length = data.push({
                id: data.length + 1,
                name: input.name,
                age: input.age,
                nationality: input.nationality // this field is defaulted by Apollo before this resolver gets called.
            });
            
            return data[length - 1];
        }
    }
}