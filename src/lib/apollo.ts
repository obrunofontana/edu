import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r9e7y70sux01z39v70e5jx/master',
  cache: new InMemoryCache() // TODO: Mudar para redis
});