import { tasks } from "./sample";

export const resolvers = {
    Query: {
        hello: () => 'hello world graphql!',
        greet: (root, args) => {
            console.log('args', args);
            return `hello ${args.name}`
        },
        tasks: (root, args) => {
            return tasks;
        },
    },
    Mutation: {
        createTask: (_, {input}) => {
            input._id =tasks.length;
            tasks.push(input);
            return input;
        }
    }
};