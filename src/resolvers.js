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
        }
    }
};