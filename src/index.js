import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

/* app.use('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
}); */

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema 
}));

app.listen(3000, () => console.log('Server on Port 3000'));
