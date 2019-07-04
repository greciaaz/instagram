require('dotenv').config();

const {ApolloServer} = require ('apollo-server');
const mongoose = require ('mongoose');

const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");
const {
    getContext,
    AuthDirective
  } = require('./actions/authActions');

  mongoose.connect(
      process.env.DATABASE_URL,
      {
          useCreateIndex: true,
          useNewUrlParser: true

      }
  );

  const mongo = mongoose.connection;
  mongo.on('error', console.error.bind(console, 'Error de conexion'));
mongo.on('open', () => console.log('Conectado !'));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives:{
    AuthDirective: AuthDirective
    },

    context: async ({req}) => getContext(req),
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });


