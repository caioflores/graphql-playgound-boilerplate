const path = require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');

class SchemaBuilder {
  constructor() {
    this.typePath = path.join(__dirname, './**/types/*.graphql');
    this.enumPath = path.join(__dirname, './enums');
    this.resolverPath = path.join(__dirname, './**/*.js');
    this.queryPath = path.join(__dirname, './**/query/*.graphql');
    this.mutationPath = path.join(__dirname, './**/mutation/*.graphql');
    this.types = fileLoader(this.typePath);
    this.enums = fileLoader(this.enumPath);
    this.queries = fileLoader(this.queryPath);
    this.mutation = fileLoader(this.mutationPath);
    this.resolvers = fileLoader(this.resolverPath);
  }
  buildAll() {
    this.typeDefs = mergeTypes([...this.types, ...this.queries, ...this.mutation, ...this.enums], {
      all: true
    });
    this.resolvers = mergeResolvers(this.resolvers);
    return {
      typeDefs: this.typeDefs,
      resolvers: this.resolvers
    };
  }
}

module.exports = new SchemaBuilder();
