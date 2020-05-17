import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ProductResolver } from './resolvers/productResolver';
import { buildSchema } from 'type-graphql';
import { CategoryResolver } from './resolvers/categoryResolver';

export async function startServer() {

    const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [ProductResolver, CategoryResolver],
            validate: false

        }),
        context: ({ req, res }) => ({ req, res })
    });

    server.applyMiddleware({ app, path: '/graphql' });

    return app;
}