import { ApolloClient, DefaultOptions, InMemoryCache } from '@apollo/client';
import configurations from './Configurations';
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};
const client = new ApolloClient({
  uri: configurations.backendUrl,
  cache: new InMemoryCache(),
  defaultOptions,
});

export default client;
